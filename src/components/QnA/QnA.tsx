import React, { useEffect, useState } from "react";
import QnATemplate from "../../templates/QnaATemplate/QnATemplate";
import { IQnAListProps } from "../../interfaces/IQnAListProps";
import { qnaList } from './qna-list';

const styles = {
  wrapper: `w-screen flex justify-center items-center`,
  container: `
    w-[70%]
    phone:w-full
    tablet:w-full
    laptop:w-full
    desktop:w-[90%]
  `,
  content: `flex flex-col gap-20`,
  title: `
    font-english font-[900] text-dark_blue text-[3.5rem] text-center
    phone:text-[3rem]
  `,
  qnaContainer: `
    flex flex-row justify-between gap-10
    phone:flex-col phone:p-4
    tablet:flex-col tablet:p-6
    laptop:flex-col laptop:p-12
  `,
  list: `w-full flex flex-col gap-5`
};

const QnA = () => {
  const [firstListPart, setFirstListPart] = useState<IQnAListProps[]>()
  const [secondListPart, setSecondListPart] = useState<IQnAListProps[]>()

  const devideArray = (array: IQnAListProps[]) => {
    const array_size = 5;
    
    const sliced_array = [];
    
    for (let i = 0; i <array.length; i += array_size) {
        sliced_array.push(array.slice(i, i + array_size));
    }
    
    setFirstListPart(sliced_array[0])
    setSecondListPart(sliced_array[1])
  }

  useEffect(() => {
    devideArray(qnaList)
  }, [])
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Готовые ответы на вопросы</h1>
          <ul className={styles.qnaContainer}>
            <div className={styles.list}>
              {firstListPart?.map((item) => (
                <QnATemplate
                  key={item.id}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
            <div className={styles.list}>
              {secondListPart?.map((item) => (
                <QnATemplate
                  key={item.id}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QnA;
