import React, { useRef, useEffect } from "react";
import ButtonTemplate from "../templates/ButtonTemplate/ButtonTemplate";

const styles = {
  body: `
    w-1/2 h-max bg-light_blue p-6 rounded-3xl flex flex-col justify-center gap-10
    phone:w-full
    tablet:w-full
    laptop:w-full
  `,
  titleContainer: `flex flex-col`,
  title: `
    font-english font-[900] text-[2.25rem] text-white
  `,
  subTitle: `
    font-russian font-bold text-[1.2rem] text-white
    phone:text-[1.1rem]
  `,
  feedbackArea: `w-full h-max rounded-xl p-6 bg-sky_blue placeholder:text-[1.2rem]`,
  feedbackAreaText: `font-russian text-[1.2rem]`
};

const LeaveFeedback = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  
  useEffect(() => {
    if(textareaRef.current) {
      textareaRef.current.focus()
    }
  }, [])

  return (
    <div className={styles.body}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Оставьте свой отзыв</h1>
        <h3 className={styles.subTitle}>
          Для нас очень важно ваше мнение о проекте
        </h3>
      </div>
      <textarea ref={textareaRef} className={styles.feedbackArea} placeholder="Ваш отзыв..." />
      <ButtonTemplate text="Отправить" />
    </div>
  );
};

export default LeaveFeedback;
