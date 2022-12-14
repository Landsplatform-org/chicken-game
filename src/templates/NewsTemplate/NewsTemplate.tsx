import React, { useContext } from "react";
import { NewsModalContext } from "../../context/NewsModalContext";
import { INewsTemplateProps } from "../../interfaces/INewsTemplateProps";

import "./styles.css";

const styles = {
  body: `
    w-full flex flex-row text-left gap-10 rounded-3xl news-bg
    phone:flex-col
    tablet:flex-col tablet:items-center
    laptop:flex-col laptop:items-center
  `,
  newsContainer: `
    flex flex-col gap-6
    phone:p-2 phone:items-start
    tablet:p-2 tablet:items-start
    laptop:items-center
  `,
  textContainer: `
    w-[770px] h-[190px] overflow-hidden text-ellipsis z-[2]
    phone:w-[330px]
    tablet:w-[630px]
    laptop:w-[900px]
    desktop:w-[670px]
  `,
  newsTitle: `
    font-[900] font-english text-[2rem] z-[2]
    phone:text-[1.3rem] phone:text-left
    tablet:text-left
    laptop:text-center
  `,
  newsText: `font-normal font-russian text-[1rem] z-[2]`,
  newsAuthor: `font-[700] font-russian text-[0.9rem] text-gray-400 z-[2]`,
  additionalInfo: `flex flex-row justify-between items-center z-[2]`,
  read: `font-[900] font-english text-[1.1rem] mr-12 z-[2]`,
  img: `w-[500px] h-full rounded-3xl z-[2]`,
};

const NewsTemplate: React.FC<INewsTemplateProps> = ({
  title,
  text,
  author,
  image,
}) => {
  const { openModalNews, setModalNews } = useContext(NewsModalContext);

  return (
    <>
      <button 
        onClick={() => { 
          openModalNews();
          setModalNews({
            title: title,
            text: text,
            author: author,
            image: image
          }) 
        }} 
        className={styles.body}
      >
        <img src={image} alt={title} className={styles.img} />
        <div className={styles.newsContainer}>
          <h1 className={styles.newsTitle}>{title}</h1>
          <div className={styles.textContainer}>
            <p className={styles.newsText}>{text}</p>
          </div>
          <div className={styles.additionalInfo}>
            <span className={styles.newsAuthor}>{author}</span>
          </div>
        </div>
      </button>
    </>
  );
};

export default NewsTemplate;
