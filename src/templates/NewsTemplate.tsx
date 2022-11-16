import React from "react";
import { INewsTemplateProps } from "../interfaces/INewsTemplateProps";

const styles = {
  body: `w-full flex flex-row gap-10`,
  textContainer: `flex flex-col gap-1`,
  img: `w-[70px] h-[50px]`
};

const NewsTemplate: React.FC<INewsTemplateProps> = ({ common, official, image }) => {
  return (
    <article className={styles.body}>
      <img src={image} alt={common} className={styles.img} />
      <div className={styles.textContainer}>
        <h1 className="font-bold">{official}</h1>
        <h3 className="font-normal">{common}</h3>
      </div>
    </article>
  );
};

export default NewsTemplate;
