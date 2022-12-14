import React from "react";
import wallet from "../assets/icons/metamask-icon.svg";

const styles = {
  wrapper: `w-full h-screen flex items-center justify-center`,
  body: `w-[600px] h-[300px] bg-white rounded-3xl flex flex-col justify-center items-center gap-2`,
  logo: `w-[100px] h-[100px]`,
  text: `text-[1.2rem]`,
  link: `text-[1.2rem] font-bold`,
  metamask: `text-orange-500`
};

const MetamaskIsNotInstalled = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>
        <img className={styles.logo} src={wallet} alt="metamask-icon" />
        <p className={styles.text}>Metamask не найден в браузере</p>
        <p className={styles.link}>
          <a href="https://metamask.io/" target="_blank" rel="noreferrer">
            Установить <span className={styles.metamask}>Metamask</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default MetamaskIsNotInstalled;
