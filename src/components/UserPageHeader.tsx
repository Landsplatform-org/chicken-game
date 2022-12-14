import React from "react";
import user from "../assets/icons/user.svg";

const styles = {
  wrapper: `
    w-full h-max flex justify-center
    phone:py-0
    tablet:py-0
    laptop:py-0
  `,
  container: `
    w-[75%]
    phone:w-full
    tablet:w-full
    laptop:w-full
    desktop:w-[90%]
  `,
  content: `
    flex flex-row justify-between items-center
    phone:flex-col phone:gap-5
    tablet:p-6 tablet:flex-col tablet:gap-7
    laptop:p-6 laptop:flex-col laptop:gap-7
  `,
  title: `
    flex flex-row items-center gap-5
    phone:flex-col phone:items-center
    tablet:w-full
    laptop:w-[70%]
  `,
  profileTitle: `
    flex flex-col
    phone:flex-col phone:items-center
  `,
  logoContainer: `w-max h-max flex items-center justify-center`,
  logo: `w-[55px] h-[55px]`,
  revenueBody: `
    flex flex-row justify-between items-center p-6 w-1/3 rounded-3xl bg-light_green text-white
    phone:w-full phone:p-4
    tablet:w-full
    laptop:w-[70%]
  `,
  revenueBodyTitle: `flex flex-col`,
  revenueBodyNumber: `
    font-[900] text-[1.5rem]
    phone:text-[1.2rem]
  `,
  h1: `font-english font-[900] text-[1.875rem]`,
  h3: `
    font-russian text-[1.25rem]
    phone:text-center
  `,
  h4: `
    font-english font-[900] text-[1.25rem]
    phone:text-[1.15rem]
  `,
  h5: `font-russian text-[1rem]`,
};

const UserPageHeader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            <div className={styles.logoContainer}>
              <img className={styles.logo} src={user} alt="userlogo "/>
            </div>
            <div className={styles.profileTitle}>
              <h1 className={styles.h1}>Профиль</h1>
              <h3 className={styles.h3}>
                В данном разделе можно увидеть всю Вашу информацию.
              </h3>
            </div>
          </div>
          <div className={styles.revenueBody}>
            <div className={styles.revenueBodyTitle}>
              <h4 className={styles.h4}>Скорость заработка</h4>
              <h5 className={styles.h5}>Доходность в час</h5>
            </div>
            <div className={styles.revenueBodyNumber}>
              <span>0.043 ₽</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPageHeader;
