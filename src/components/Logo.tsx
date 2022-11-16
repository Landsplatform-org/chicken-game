import React from "react";
import chikenLogo from "../assets/icons/chiken-game-logo.svg";
import { ILogo } from "../interfaces/ILogo";

const styles = {
  wrapper: `w-max flex flex-row items-center gap-2 order-1`,
  logo: `w-[34px] h-[34px] scale-x-[-1] scale-y-[1]`,
  logoText: `
    font-english font-bold text-2xl
    phone:text-[1.2rem]
  `,
};

const Logo: React.FC<ILogo> = ({ color }) => {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.logo}
        src={chikenLogo}
        alt="chiken-logo"
      />
      <span style={{ color: color }} className={styles.logoText}>ChickenGame</span>
    </div>
  );
};

export default Logo;
