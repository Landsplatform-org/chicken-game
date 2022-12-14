import React, { useContext } from "react";
import { NewsModalContext } from "../context/NewsModalContext";
import { INewsTemplateProps } from "../interfaces/INewsTemplateProps";

import { ImCross } from "react-icons/im";

const styles = {
  wrapper: `w-full flex items-center justify-center`,
  contentBody: `
    w-[70%] h-max flex flex-col gap-4 bg-white rounded-3xl overflow-hidden
    phone:w-[350px]
    tablet:w-[700px]
    laptop:w-[750px]
    desktop:w-[750px]
  `,
  closeBtn: `
    absolute left-[90%] top-[6%] p-3 rounded-full bg-white z-[1003] w-[40px] h-[40px] flex items-center justify-center text-[0.9rem]
    hover:rotate-90 transtition-rotate duration-100 ease-in-out
    phone:w-[25px] phone:h-[25px] phone:p-2 phone:left-[90%] phone:top-[7%]
    laptop:left-[93%]
    desktop:left-[93%]
  `,
  imgContainer: `
    relative w-full h-[300px] bg-no-repeat bg-center overflow-hidden
    phone:h-[170px]
    laptop:h-[300px]
  `,
  textContainer: `
    px-4 h-[400px] overflow-y-scroll overflow-x-hidden text-[1.1rem]
    phone:px-2 phone:h-[270px]
    laptop:h-[300px]
  `,
  newsTitle: `
    font-[900] font-english text-[2rem] px-4
    phone:text-[1.3rem] phone:text-left
    tablet:text-left
    laptop:text-left laptop:text-[1.2rem]
  `,
  newsAuthor: `font-[700] font-russian text-[0.9rem] text-gray-400 px-4 pb-2`,
};

const NewsModal: React.FC<INewsTemplateProps> = ({
  title,
  text,
  author,
  image,
}) => {
  const { closeModalNews } = useContext(NewsModalContext);

  return (
    <div className={styles.wrapper}>
      <div className={styles.contentBody}>
        <div className={styles.imgContainer}>
          <img src={image} alt="news-title" />
          <button className={styles.closeBtn} onClick={() => closeModalNews()}>
            <ImCross />
          </button>
        </div>
        <h1 className={styles.newsTitle}>{title}</h1>
        <div className={styles.textContainer}>
          <p>{text}</p>
        </div>
        <span className={styles.newsAuthor}>{author}</span>
      </div>
    </div>
  );
};

export default NewsModal;
