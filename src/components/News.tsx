import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsTemplate from "../templates/NewsTemplate";
import Pagination from "./Pagination";
import { INewsProps } from "../interfaces/INews";
import { MutatingDots } from "react-loader-spinner";

const styles = {
  wrapper: `w-full h-max bg-white flex justify-center`,
  container: `w-[70%] flex flex-col items-center gap-10`,
  paginateButton: `w-max h-max font-english font-bold py-2 px-6 flex flex-row items-center justify-center border-2 border-blue bg-transparent text-blue rounded-full hover:bg-blue hover:text-white transition duration-100`
};

const News = () => {
  const [newsList, setNewsList] = useState<INewsProps[]>([]);
  const [loading, setLoading] = useState<boolean>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sizePerPage] = useState<number>(15);

  const getAllProducts = async () => {
    setLoading(true);
    try {
      const res: any = await axios.get<INewsProps>(
        "https://restcountries.com/v3.1/all"
      );
      setNewsList(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const lastNewsIndex = currentPage + sizePerPage;
  const firstNewsIndex = lastNewsIndex - sizePerPage;
  const currentNews = newsList.slice(firstNewsIndex, lastNewsIndex);

  const paginate = (pageNumber: number) => {
    setLoading(true);
    setCurrentPage(pageNumber);
    setLoading(false);
  };
  
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {loading && (
          <div>
            <MutatingDots
              height="100"
              width="100"
              color="#2790cb"
              secondaryColor="#2790cb"
              radius="12.5"
              ariaLabel="mutating-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        )}
        {currentNews?.map((item, index) => (
          <NewsTemplate
            key={index}
            common={item.name.common}
            official={item.name.official}
            image={item.flags.svg}
          />
        ))}
        <div className="flex flex-row gap-10">
          <a href="#" className={styles.paginateButton} onClick={prevPage}>Назад</a>
          <Pagination
            sizePerPage={sizePerPage}
            totalNews={newsList.length}
            paginate={paginate}
          />
          <a href="#" className={styles.paginateButton} onClick={nextPage}>Вперед</a>
        </div>
      </div>
    </div>
  );
};

export default News;
