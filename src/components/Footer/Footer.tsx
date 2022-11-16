import React from "react";
import "./styles.css";
import Logo from "../Logo";
import FooterProjectDescription from '../FooterProjectDescription/FooterProjectDescription';
import FooterNav from "../FooterNavBar/FooterNav";

const styles = {
  wrapper: `h-max flex justify-center py-4 footer`,
  container: `
    w-[75%]
    phone:w-full
    tablet:w-full
    laptop:w-full
    desktop:w-[90%]
  `,
  content: `
    flex flex-row items-center justify-between p-10
    phone:p-4 phone:flex-col phone:gap-10
  `,
  cellDescription: `
    w-[40%] flex flex-col-reverse justify-center gap-5
    phone:w-full 
  `,
  cellFooterNav: `
  w-[40%] flex flex-col justify-center gap-5
  phone:w-full 
  desktop:w-[50%]
`,
  h1: `font-english font-[900] text-[1.5rem] text-white`
};

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.cellDescription}>
            <Logo color="#ffffff"/>
            <FooterProjectDescription />
          </div>
          <div className={styles.cellFooterNav}>
            <h1 className={styles.h1}>Меню</h1>
            <FooterNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
