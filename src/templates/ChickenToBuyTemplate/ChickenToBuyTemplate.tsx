import React from "react";
import { IChickenToBuyTemplateProps } from '../../interfaces/IChickenToBuyTemplateProps';
import { FaInfo } from "react-icons/fa";
import "./styles.css";

const styles = {
  body: `flex flex-col justify-center items-center p-16 bg-light_green rounded-3xl`,
  img: `w-[240px] h-[270px]`,
  chickenName: `font-russian font-bold text-white text-[2.25rem]`,
  chickenPrice: `font-russian font-bold text-white text-[1.25rem]`,
  egg: `relative flex flex-col`,
  chickenStats: `flex flex-col items-center`,
  chickenStatsContainer: `absolute flex flex-col justify-center items-center bg-black rounded-3xl opacity-[0.65] cs`,
  statText: `w-max font-russian font-bold text-white text-[1.25rem] opacity-1`,
  statNumber: `w-max font-russian font-bold text-white text-[1.5rem] opacity-1`,
  infoIcon: `text-white info`
};

const ChickenToBuyTemplate: React.FC<IChickenToBuyTemplateProps> = ({
  img,
  name,
  price,
  revenuePerHour,
  revenuePerDay,
  payback,
}) => {
  return (
    <div className={styles.body}>
      <div className={styles.egg}>
        <img
          className={styles.img}
          src={require(`../../assets/icons/${img}.svg`)}
          alt={img}
        />
        <div className={styles.chickenStatsContainer}>
          <span className={styles.infoIcon}><FaInfo /></span>
          <div className={styles.chickenStats}>
            <span className={styles.statText}>Доход в час: </span>
            <span className={styles.statNumber}>{revenuePerHour}₽</span>
          </div>
          <div className={styles.chickenStats}>
            <span className={styles.statText}>Доход в день: </span>
            <span className={styles.statNumber}>{revenuePerDay}₽</span>
          </div>
          <div className={styles.chickenStats}>
            <span className={styles.statText}>Окупаемость: </span>
            <span className={styles.statNumber}>{payback}%</span>
          </div>
        </div>
      </div>
      <span className={styles.chickenName}>{name}</span>
      <span className={styles.chickenPrice}>Цена: {price}₽</span>
    </div>
  );
};

export default ChickenToBuyTemplate;
