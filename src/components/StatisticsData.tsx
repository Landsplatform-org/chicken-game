import React, { useState } from "react";

const styles = {
  wrapper: `
    flex flex-row gap-10 flex-1
    phone:grid phone:grid-rows-2 phone:grid-cols-2
  `,
  cell: `
    flex flex-col justify-center items-center text-white text-[2.25rem] font-english font-[900]
    text-[1.8rem]
  `,
  span: `
    text-white text-[1.5rem] font-normal
    phone:text-[1.2rem]
  `,
};

const StatisticsData = () => {
  const [players, setPlayers] = useState<number>(22070);
  const [reserve, setReserve] = useState<number>(6228575);
  const [money, setMoney] = useState<number>(4419659);
  const [days, setDays] = useState<number>(110);

  return (
    <div className={styles.wrapper}>
      <div className={styles.cell}>
        {players}
        <span className={styles.span}>Игроков</span>
      </div>
      <div className={styles.cell}>
        {reserve}
        <span className={styles.span}>Пополнено ₽</span>
      </div>
      <div className={styles.cell}>
        {money}
        <span className={styles.span}>Выплачено ₽</span>
      </div>
      <div className={styles.cell}>
        {days} дней <span className={styles.span}>работаем</span>
      </div>
    </div>
  );
};

export default StatisticsData;
