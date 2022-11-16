import React from "react";
import wallet from "../../assets/icons/metamask-icon.svg";
import "./styles.css";

const styles = {
  wrapper: `
    w-max flex justify-center items-center order-3
    phone:order-2
    tablet:order-2
    laptop:order-2
  `,
  container: `
    w-max flex flex-row items-center
    phone:w-max phone:items-center
    tablet:w-max tablet:items-center
  `,
  body: `
    py-1 px-6 bg-blue rounded-full wallet-btn
    phone:mr-0 phone:ml-8 phone:py-1 phone:px-6
    tablet:ml-32 tablet:py-1 tablet:px-10
    laptop:ml-96 laptop:py-2 laptop:px-10
  `,
  buttonSpan: `
    block font-russian text-white font-semibold
    phone:hidden phone:text-[0.8rem]
    tablet:text-[1.2rem]
  `,
  walletIcon: ` 
    hidden 
    phone:block phone:w-[32px] phone:h-[32px]
  `
};

const WalletButton = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <button className={styles.body}>
          <span className={styles.buttonSpan}>Подключить кошелек</span>
          <img className={styles.walletIcon} src={wallet} alt="wallet icon" />
        </button>
      </div>
    </div>
  );
};

export default WalletButton;
