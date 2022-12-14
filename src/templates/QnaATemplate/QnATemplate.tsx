import React, { useState } from "react";
import arrow from "../../assets/icons/arrow-accord.svg";
import { IQnATemplateProps } from "../../interfaces/IQnATemplateProps";
import "./styles.css";

const styles = {
  body: `rounded-3xl flex flex-col items-center transition-all ease-in-out duration-300`,
  questionContainer: `
    relative z-[100] w-full flex flex-row justify-between items-center p-6 rounded-full bg-light_blue
    phone:p-4
  `,
  questionText: `
    font-english font-[900] text-white text-[1.25rem]
    phone:text-[1.2rem]
  `,
  answersContainer: `p-6 shadow-md rounded-bl-3xl rounded-br-3xl overflow-hidden`,
  answersText: `
    font-russian font-normal text-dark_blue text-[1.25rem]
    phone:text-[1.2rem]
  `,
};

const QnATemplate: React.FC<IQnATemplateProps> = ({ question, answer }) => {
  const [clicked, setClicked] = useState<boolean>(false);

  const handleToggle = () => {
    if (!clicked) {
      return setClicked(true);
    }
    setClicked(false);
  };

  return (
    <div className={`${styles.body} ${clicked ? "h-auto" : "h-[70px]"}`}>
      <button className={styles.questionContainer} onClick={handleToggle}>
        <h2 className={styles.questionText}>{question}</h2>
        <img
          src={arrow}
          style={{ transition: "all 300ms ease-in-out" }}
          className={clicked ? "rotate-180" : "rotate-0"}
          alt="arrow"
        />
      </button>
      <div className={styles.answersContainer}>
        <p className={styles.answersText}>{answer}</p>
      </div>
    </div>
  );
};

export default QnATemplate;
