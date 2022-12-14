import React, { useContext } from "react";
import profile from "../../assets/icons/user-white.svg";
import farm from "../../assets/icons/house.svg";
import shop from "../../assets/icons/shop-cart.svg";
import upgrade from "../../assets/icons/upgrade.svg";
import "./styles.css";
import { SidebarContext } from '../../context/UserPageSidebarContext';

const styles = {
  wrapper: `
    wrapper fixed w-max h-max overflow-hidden rounded-tr-3xl rounded-br-3xl z-[999]
    phone:w-full phone:rounded-tr-none phone:rounded-tl-none phone:rounded-br-none phone:shadow-4xl
    tablet:w-[50%] tablet:rounded-tr-3xl tablet:rounded-tl-3xl tablet:rounded-bl-none tablet:rounded-br-none tablet:shadow-5xl
  `,
  buttonContainer: `
    flex flex-col relative bg-light_blue rounded-tr-3xl rounded-br-3xl
    phone:flex-row phone:rounded-tr-none phone:rounded-br-none phone:bg-light_blue
    tablet:flex-row tablet:rounded-bl-none tablet:rounded-br-none
  `,
  button: `
    w-full h-[60px] flex flex-row items-center justify-start gap-3 sidebar-btn px-4 py-2
    phone:justify-center
    tablet:justify-center
  `,
  img: `w-[25px] h-[25px] text-black`,
  buttonName: `font-[700] text-english text-white text-[1rem]`
};

const SideBar = () => {
  const { switchComponent } = useContext(SidebarContext)
  
  return (
    <div className={styles.wrapper}>
      {/* <input type="checkbox" className="checkbox" /> */}
      <div className={styles.buttonContainer}>
        <button onClick={() => switchComponent("main-page")} className={styles.button}>
          <img className={styles.img} src={profile} alt="profile-logo" />
          {/* <span className={styles.buttonName}>Профиль</span> */}
        </button>
        <button onClick={() => switchComponent("farm-page")} className={styles.button}>
          <img className={styles.img} src={farm} alt="farm-logo" />
          {/* <span className={styles.buttonName}>Ферма</span> */}
        </button>
        <button onClick={() => switchComponent("shop-page")} className={styles.button}>
          <img className={styles.img} src={shop} alt="shop-logo" />
          {/* <span className={styles.buttonName}>Покупка куриц</span> */}
        </button>
        <button onClick={() => switchComponent("upgrade-page")} className={styles.button}>
          <img className={styles.img} src={upgrade} alt="upgrade-logo" />
          {/* <span className={styles.buttonName}>Повышение уровня</span> */}
        </button>
      </div>
    </div>
  );
};

export default SideBar;
