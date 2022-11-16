import React from "react";
import ButtonTemplate from "../../templates/ButtonTemplate/ButtonTemplate";
import gift from "../../assets/icons/gift.svg";
import cloud from "../../assets/images/cloud.png";
import { ITitleProps } from "../../interfaces/ITitleProps";
import "./styles.css";

const styles = {
  wrapper: `w-full flex justify-center items-center title-background`,
  container: `
    w-[70%]
    phone:w-full phone:flex phone:justify-center
    tablet:w-full tablet:flex tablet:justify-center
  `,
  titlePage: `
    flex flex-row items-center justify-between h-screen
    phone:items-center
    tablet:items-center
    laptop:items-center
  `,
  titleText: `
    font-english text-[6.6rem] text-dark_blue font-[900]
    phone:text-[3rem] phone:text-center
  `,
  content: `
    w-[590px]
    phone:w-full phone:flex phone:flex-col phone:justify-center phone:items-center
    tablet:w-full tablet:flex tablet:flex-col tablet:justify-center tablet:items-center

  `,
  subTitleText: `
    text-[3rem] text-dark_blue font-normal ml-3 mix-blend-darken
    phone:text-[1.8rem] phone:text-center
  `,
  descrition: `
    w-[400px] text-[1.25rem] text-dark_blue font-normal mt-8 ml-3 mix-blend-darken
    phone:w-[300px] phone:text-[1.2rem] phone:text-center
    tablet:text-center
  `,
  btnContainer: `
    w-max flex flex-row gap-8 mt-8
    phone:flex-col phone:items-center phone:gap-8
  `,
  getChickenBtn: `
    flex flex-row gap-2 items-center py-3 px-8 rounded-full bg-green text-[1.2rem] text-white font-russian font-semibold outline-none get-chicken-btn 
    phone:mx-2 phone:px-8 phone:text-[1rem]
  `,
  cloud: `
    relative mb-[500px]
    phone:hidden
    tablet:hidden
    laptop:hidden
  `,
  cloudTextContainer: `
    absolute top-[85px] left-[95px] flex flex-col
    desktop:top-[65px] desktop:left-[65px]
  `,
  cloudTextSpanTitle: `
    text-[2rem] text-blue font-english font-bold
    desktop:text-[1.8rem]
  `,
  cloudTextSpanText: `text-[1rem] text-blue font-russian font-bold`
};

const Title: React.FC<ITitleProps> = ({ homeRef }) => {
  return (
    <div ref={homeRef} className={styles.wrapper}>
      <div className={styles.container}>
        <section className={styles.titlePage}>
          <div className={styles.content}>
            <h1 className={styles.titleText}>ChickenGame</h1>
            <h3 className={styles.subTitleText}>Симулятор курятника</h3>
            <p className={styles.descrition}>
              Покупай куриц, собирай яйца и зарабатывай на этом реальные деньги.
            </p>
            <div className={styles.btnContainer}>
              <ButtonTemplate text="Авторизация" link="/" />
              <button type="button" className={styles.getChickenBtn}>
                <img src={gift} alt="gift" />
                <span>Получить курицу в подарок</span>
              </button>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.cloud}>
              <div className={styles.cloudTextContainer}>
                <span className={styles.cloudTextSpanTitle}>ChickenGame.org</span>
                <span className={styles.cloudTextSpanText}>Покупай куриц и зарабатывай</span>
              </div>
              <img src={cloud} alt="cloud" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Title;
