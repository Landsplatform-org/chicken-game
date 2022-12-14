import React, { useState, useEffect, useContext } from "react";

import NewsTemplate from "../templates/NewsTemplate/NewsTemplate";
import NewsModal from "../components/NewsModal";
import Modal from "react-modal";
import { MutatingDots } from "react-loader-spinner";

import { NewsModalContext } from "../context/NewsModalContext";

import { database } from "../firebase.config"
import { collection, getDocs } from "firebase/firestore";


Modal.setAppElement(document.getElementById("root")!);

const styles = {
  wrapper: `w-full h-max bg-white flex justify-center`,
  container: `
    w-[70%] flex flex-col items-center gap-12
    phone:w-full phone:px-4
    tablet:w-[90%] tablet:px-4
    laptop:w-full laptop:px-4
    desktop:w-[90%]
  `,
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    padding: 0,
    border: "none",
    zIndex: 1002,
  },
  overlay: {
    overflow: "hidden",
    backgroundColor: "rgba(10, 11, 13, 0.5)",
    backdropFilter: "blur(2px)",
    zIndex: 1001,
  },
};

const News = () => {
  const [newsList, setNewsList] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>();

  const { isShow, modalNews } = useContext(NewsModalContext);

  const newsInstance = collection(database, "news");
  
  const getAllNews = async () => {
    setLoading(true);
    try {
      const res = await getDocs(newsInstance)
      setNewsList(res.docs.map((item) => {
        return { ...item.data(), id: item.id, }
      }))
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    getAllNews();
  }, []);

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
        {newsList?.map((item: any) => (
          <NewsTemplate
            key={item.id}
            title={item.title}
            text={item.text}
            author={item.author}
            image={item.image}
          />
        ))}
        <Modal isOpen={!!isShow} style={customStyles}>
          <NewsModal
            title={modalNews.title}
            text={modalNews.text}
            author={modalNews.author}
            image={modalNews.image}
          />
        </Modal>
      </div>
    </div>
  );
};

export default News;
