import React from "react";
import { IUsersTemplateProps } from "../interfaces/IUsersTemplateProps";


const styles = {
  body: `py-6 px-12 w-full flex flex-row justify-between odd:bg-sky_blue shadow shadow-md even:bg-white `,
  span: `
    font-russian font-normal text-dark_blue text-[1.25rem]
    phone:text-[1rem]
  `,
};

const UsersTemplate: React.FC<IUsersTemplateProps> = ({ txhash, sum }) => {
  return (
    <div className={styles.body}>
      <span className={styles.span}>
        {txhash?.substring(0, 7)}...{txhash?.substring(32, 42)}
      </span>
      <span className={styles.span}>{sum} ₽</span>
    </div>
  );
};

export default UsersTemplate;
