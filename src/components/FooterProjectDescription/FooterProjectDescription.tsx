import React from "react";
import "./styles.css"

const styles = {
  body: `w-full h-max flex flex-col gap-5`,
  text: `font-russian font-normal text-[1rem] text-white`,
  link: `font-russian font-normal text-[1rem] text-white visited:text-white`,
  linkSpan: `font-[700] email`,
};

const FooterProjectDescription = () => {
  return (
    <div className={styles.body}>
      <p className={styles.text}>
        ChickenGame - это экономическая игра - симулятор курятника. Вам нужно
        покупать различных куриц, которые будут нести Вам яйца.
      </p>
      <a className={styles.link} href="mailto:support@gmail.com">
        <span>
          Поддержка: <span className={styles.linkSpan}>support@gmail.com</span>
        </span>
      </a>
    </div>
  );
};

export default FooterProjectDescription;
