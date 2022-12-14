import React, { useContext } from "react";
import { NewsModalContext } from "../context/NewsModalContext";
import { INewsTemplateProps } from "../interfaces/INewsTemplateProps";

import { ImCross } from "react-icons/im";

const styles = {
  wrapper: `w-full flex items-center justify-center`,
  contentBody: `w-[70%] h-max flex flex-col gap-4 bg-white rounded-3xl overflow-hidden`,
  closeBtn: `
    absolute left-[92%] top-[5%] p-3 rounded-full bg-white z-[1003] w-[40px] h-[40px] flex items-center justify-center text-[0.9rem]
    hover:rotate-90 transtition-rotate duration-100 ease-in-out
  `,
  imgContainer: `relative w-full h-[300px] bg-no-repeat bg-center overflow-hidden`,
  textContainer: `px-4 h-[400px] overflow-y-scroll overflow-x-hidden`,
  newsTitle: `
    font-[900] font-english text-[2rem] px-4
    phone:text-[1.3rem] phone:text-left
    tablet:text-left
    laptop:text-center
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
          <img src={image} alt="" />
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
