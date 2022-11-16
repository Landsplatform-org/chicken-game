import React from "react";
import { IFeedbackProps } from "../interfaces/IFeedbackProps";

const styles = {
  body: `
    w-full flex flex-col justify-center gap-10 p-8 bg-sky_blue rounded-3xl
    phone:p-4
  `,
  titleContainer: `flex flex-col`,
  title: `font-russian font-[700] text-[1.5rem] text-dark_blue`,
  subTitle: `font-russian font-normal text-[1rem] text-gray-300`,
  text: `
    font-russian font-normal text-[1.25rem] text-dark_blue
    phone:text-[1.2rem]
  `,
};

const FeedbackTemplate: React.FC<IFeedbackProps> = ({
  username,
  date,
  text,
}) => {
  return (
    <div className={styles.body}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          Пользователь: {username?.substring(0, 7)}...
          {username?.substring(32, 42)}
        </h1>
        <h3 className={styles.subTitle}>{date}</h3>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default FeedbackTemplate;
