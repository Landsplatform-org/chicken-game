import React from "react";
import ChickenToBuyTemplate from "../../templates/ChickenToBuyTemplate/ChickenToBuyTemplate";
import { chickenList } from "./chicken-list";
import "./styles.css";

const styles = {
  wrapper: `w-screen flex justify-center items-center`,
  container: `
    w-[70%]
    phone:w-full
    tablet:w-full
  `,
  content: `
    flex flex-col gap-20 items-center
    phone:p-4
    tablet:p-6
  `,
  title: `
    font-english font-[900] text-dark_blue text-[3.5rem]
    phone:text-[3rem] phone:text-center
  `,
  grid: `
    grid
  `,
};

const ChickenToBuy = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Курицы для покупки</h1>
          <div className={styles.grid}>
            {chickenList?.map((item) => (
              <ChickenToBuyTemplate
                key={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
                revenuePerHour={item.revenuePerHour}
                revenuePerDay={item.revenuePerDay}
                payback={item.payback}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChickenToBuy;
