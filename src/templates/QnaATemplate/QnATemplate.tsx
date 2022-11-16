import React, { useState } from "react";
import arrow from "../../assets/icons/arrow-accord.svg";
import { IQnATemplateProps } from "../../interfaces/IQnATemplateProps";
import "./styles.css";

const styles = {
  body: `rounded-3xl overflow-hidden`,
  questionContainer: `
    relative z-[100] w-full flex flex-row justify-between items-center p-6 rounded-full bg-light_blue
    phone:p-4
  `,
  questionText: `
    font-english font-[900] text-white text-[1.25rem]
    phone:text-[1.2rem]
  `,
  answersContainer: `relative z-[99] rounded-bl-3xl rounded-br-3xl shadow-md transition-all ease-in-out duration-300 overflow-hidden origin-top`,
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
    <div className={styles.body}>
      <button className={styles.questionContainer} onClick={handleToggle}>
        <h2 className={styles.questionText}>{question}</h2>
        <img
          src={arrow}
          style={{ transition: "all 300ms ease-in-out" }}
          className={clicked ? "rotate-180" : "rotate-0"}
          alt="arrow"
        />
      </button>
      <div className={`${styles.answersContainer} ${clicked ? "-translate-y-0 max-h-max p-6" : "-translate-y-[200%] max-h-0 p-0"}`}>
        <p className={styles.answersText}>{answer}</p>
      </div>
    </div>
  );
};

export default QnATemplate;
