import React from "react";
import telegram from "../../assets/icons/telegram.svg";
import "./styles.css";

const styles = {
  wrapper: `w-full flex justify-center items-center`,
  container: `
    w-[70%]
    phone:w-full
    tablet:w-full
    laptop:w-full
    desktop:w-[90%]
  `,
  content: `
    flex flex-col gap-16
    phone:p-4
    tablet:p-6
    laptop:p-12
  `,
  titleContainer: `flex flex-col gap-5`,
  titleText: `
    font-english font-[900] text-[3.5rem] text-dark_blue
    phone:text-[3rem] phone:text-center
    tablet:text-center
    
  `,
  subtitleText: `
    font-russian font-normal text-[1.25rem] text-dark_blue
    phone:text-[1.2rem] phone:text-center
    tablet:text-center
  `,
  socialContainer: `
    flex flex-row items-center gap-16
    phone:flex-col phone:gap-8
    tablet:justify-center
  `,
  linksContainer: `
    flex flex-row items-center font-english font-[900] text-[1.875rem] gap-2
    phone:text-[1.7rem]
  `,
  email: `text-dark_blue email-link`,
  telegram: `flex flex-row gap-2 text-light_blue telegram-link`,
  warningBody: `
    w-full h-max flex flex-row items-center justify-center bg-light_green rounded-3xl gap-10
    phone:flex-col
  `,
  infoIconContainer: `
    w-[30%] flex items-center p-10 justify-center bg-green rounded-tl-3xl rounded-bl-3xl
    phone:w-full phone:rounded-tl-3xl phone:rounded-tr-3xl phone:rounded-bl-none phone:p-4
    tablet:w-[40%] tablet:p-14
  `,
  infoIcon: `
    font-english font-[900] text-[9.75rem] text-white
    phone:text-[6rem]
  `,
  warningContainer: `
    flex flex-col p-10 gap-5 
    phone:p-4
    tablet:p-6
  `,
  warningTitle: `font-russian font-bold text-[1.5rem] text-white`,
  warningText: `
    font-russian font-normal text-[1.25rem] text-white
    phone:text-[1.2rem]
  `,
};

const ContactUs = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.titleContainer}>
            <h1 className={styles.titleText}>Обратиться по любым вопросам</h1>
            <h3 className={styles.subtitleText}>
              Указывайте свой логин в проекте для более быстрого решения вашего
              вопроса!
            </h3>
          </div>
          <div className={styles.socialContainer}>
            <a
              className={styles.linksContainer}
              href="mailto:support@gmail.com"
            >
              <span className={styles.email}>support@gmail.com</span>
            </a>
            <a
              className={styles.linksContainer}
              href="https://t.me/jojjerg"
              target="_blank"
              rel="noreferrer"
            >
              <span className={styles.telegram}>
                <img src={telegram} alt="telegram" />
                Telegram
              </span>
            </a>
          </div>
          <div className={styles.warningBody}>
            <div className={styles.infoIconContainer}>
              <span className={styles.infoIcon}>!</span>
            </div>
            <div className={styles.warningContainer}>
              <h1 className={styles.warningTitle}>
                Вопросы без указания логина рассмотрены не будут!
              </h1>
              <p className={styles.warningText}>
                По поводу рекламы (мониторинга проекта) просим не предлагать! У
                нас свой список рекламы по которому мы работаем и других мы не
                берём. Если вы в списке, мы обязательно вам напишем.
              </p>
              <p className={styles.warningText}>Спасибо за понимание.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
