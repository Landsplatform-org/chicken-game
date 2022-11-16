import React from "react";
import SubInformationTemplate from "../../templates/SubInformationTemplate";
import gift from "../../assets/icons/gift.svg";
import hands from "../../assets/icons/hands.svg";
import support from "../../assets/icons/support.svg";
import "./styles.css";

const styles = {
  wrapper: `w-screen h-full flex justify-center items-center about-background`,
  container: `
    w-[70%] flex flex-row justify-end my-24
    phone:w-full phone:justify-center phone:
    tablet:w-full tablet:justify-center
    laptop:w-full 
    desktop:w-full
  `,
  content: `
    w-[47%] flex flex-col gap-8
    phone:p-4 phone:w-full
    tablet:p-4 tablet:w-full tablet:mt-[600px]
    laptop:mt-[300px] laptop:w-full laptop:p-6
    desktop:p-6
  `,
  title: `
    text-[3.5rem] text-dark_blue font-english font-[900] backdrop-blue-3xl
    phone:text-center text-[3rem]
    tablet:w-[90%] tablet:self-center
    laptop:w-[50%] laptop:self-end
  `,
  text: `
    text-[1.25rem] text-dark_blue font-russian font-normal backdrop-blue-3xl
    tablet:w-[90%] tablet:self-center
    laptop:w-[50%] laptop:self-end
  `,
  cellContainer: `
    flex flex-col gap-2
    laptop:w-full
  `,
  cellIcon: `
    w-[70px] h-[70px]
    phone:w-[50px] phone:h-[50px]
  `,
  cellTitle: `
    text-[1.5rem] text-dark_blue font-english font-[700]
    phone:text-center
  `,
  cellText: `
    text-[1.25rem] text-dark_blue font-russian font-normal 
  `,
};

const About = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>О проекте</h1>
          <p className={styles.text}>
            Проект ChickenGame - это экономическая игра - симулятор курятника.
            Вам нужно покупать различных куриц, которые будут нести Вам яйца.
            Так же можно улучшать куриц, вплоть до 7-го уровня, тем самым
            повысив Ваш доход.
          </p>
          <p className={styles.text}>
            У нас в проекте имеется различное количевство игр: Колесо Фортуны.
            Так же у нас Вы можете зарабатывать на серфинге сайтов, на квестах
            от Администрации.
          </p>
          <p className={styles.text}>
            В подарок Вы получаете пчелу "Bullet" 1-го уровня, которая начнёт
            Вам приносить прибыль, абсолютно без вложений. Мы долго
            разрабатывали данный проект, просчитывали маркетинг, воплощали новые
            идеи и задумки, и в итоге получился проект который Вы сейчас видите
            перед собой.
          </p>
          <SubInformationTemplate>
            <img className={styles.cellIcon} src={gift} alt="gift" />
            <div className={styles.cellContainer}>
              <h3 className={styles.cellTitle}>Подарок За Регистрацию</h3>
              <span className={styles.cellText}>
                Мы дарим Вам пчелу "Bullet" 1-го уровня, которая начнёт Вам
                приносить прибыль, абсолютно без вложений.
              </span>
            </div>
          </SubInformationTemplate>
          <SubInformationTemplate>
            <img className={styles.cellIcon} src={hands} alt="hands" />
            <div className={styles.cellContainer}>
              <h3 className={styles.cellTitle}>Поддержка Игроков</h3>
              <span className={styles.cellText}>
                Поддержка нашего проекта работает для Вас, что бы максимально
                быстро решить Ваш вопрос или проблему.
              </span>
            </div>
          </SubInformationTemplate>
          <SubInformationTemplate>
            <img className={styles.cellIcon} src={support} alt="support" />
            <div className={styles.cellContainer}>
              <h3 className={styles.cellTitle}>Администрация</h3>
              <span className={styles.cellText}>
                Мы опытная группа которая имеет позади много лет работы, в
                индустрии "Экономических игр", и создании "толковых" проектов. И
                сможем Вас приятно удивить данным проектом.
              </span>
            </div>
          </SubInformationTemplate>
        </div>
      </div>
    </div>
  );
};

export default About;
