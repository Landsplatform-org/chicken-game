import React from 'react';
import { IAdvatagesTemplateProps } from '../interfaces/IAdvantagesTemplateProps';


const styles = {
  body: `
    w-[47%] h-[450px] p-12 rounded-3xl bg-light_blue
    phone:w-full phone:p-4
    tablet:w-[50%] tablet:p-12
    laptop:w-[50%]
    desktop:w-[40%]
  `,
  bodyContent: `
    flex flex-row items-center gap-10 w-full h-full
    phone:flex-col phone:gap-5
  `,
  textContent: `
    w-max h-full flex flex-col justify-between gap-5
    phone:items-center phone:w-full phone:h-max phone:gap-5
  `,
  title: `
    font-english font-[900] text-white text-[2.25rem]
    phone:text-[2rem] phone:text-center
  `,
  text: `
    font-russian font-normal text-white text-[1.25rem]
    text-[1.2rem]
  `,
  button: `w-max`,
  img: `
    w-[100px] h-[100px]
    phone:w-[70px] phone:h-[70px]
  `
}

const AdvatagesTemplate: React.FC<IAdvatagesTemplateProps> = ({ title, text, icon, children }) => {
  return (
    <div className={styles.body}>
      <div className={styles.bodyContent}>
        <img className={styles.img} src={require(`../assets/icons/${icon}.svg`)} alt="icon" />
        <div className={styles.textContent}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.text}>{text}</p>
          <button className={styles.button}>{children}</button>
        </div>
      </div>
    </div>
  )
}

export default AdvatagesTemplate;