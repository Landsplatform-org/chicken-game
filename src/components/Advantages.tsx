import React from "react";
import AdvatagesTemplate from "../templates/AdvatagesTemplate";
import ButtonTemplate from "../templates/ButtonTemplate/ButtonTemplate";

const styles = {
  wrapper: `w-screen flex justify-center items-center`,
  container: `
    w-[70%] 
    phone:w-full phone:justify-center
    tablet:w-full tablet:justify-center
    laptop:w-full
    desktop:w-[90%]
  `,
  content: `
    flex flex-col justify-center items-center gap-16
    desktop:p-12
  `,
  grid: `
    flex flex-row flex-wrap gap-5
    phone:flex-col phone:items-center phone:p-0
    tablet:flex-col tablet:items-center
    laptop:flex-row laptop:items-center laptop:justify-center laptop:p-6
    desktop:flex-row desktop:justify-center
  `,
  title: `
    font-english font-[900] text-dark_blue text-[3.5rem]
    phone:text-[3rem] phone:text-center
  `,
};

const Advantages = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Преимущества проекта</h1>
          <div className={styles.grid}>
            <AdvatagesTemplate
              icon="browser"
              title="Адаптация проекта"
              text="Проект сделан по современным технологиям. Просмотр сайта удобен на любом Вашем устройстве, ПК, Смартфон, Планшет."
            >
              <ButtonTemplate text="Регистрация" />
            </AdvatagesTemplate>
            <AdvatagesTemplate
              icon="gift"
              title="Выплата средств"
              text="Вы можете выводить заработанные средства на удобную для Вас платёжную систему. Выплаты происходят в автоматическом режиме"
            >
              <ButtonTemplate text="Вывести средства" />
            </AdvatagesTemplate>
            <AdvatagesTemplate
              icon="gift"
              title="Функционал проекта"
              text="Внутри игры Вы можете: собирать бонусы,выполнять квесты, сёрфить сайты, поиграть в лотерею."
            >
              <ButtonTemplate text="Приступить" />
            </AdvatagesTemplate>
            <AdvatagesTemplate
              icon="diagram"
              title="Маркетинг"
              text="В проекте доступно 6 видов куриц для покупки. Также доступно повышение их уровня вплоть до 7 уровня."
            >
              <ButtonTemplate text="Купить куриц" />
            </AdvatagesTemplate>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
