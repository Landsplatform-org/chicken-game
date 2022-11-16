import React from 'react';
import { IRulesProps } from '../interfaces/IRulesProps';

const styles = {
  wrapper: `flex flex-col gap-5`,
  title: `
    font-english font-[900] text-[3.5rem] text-dark_blue
    phone:text-[2.9rem] phone:text-center
  `,
  textContainer: `flex flex-col gap-2`,
  text: `
    font-russian font-normal text-[1.25rem] text-dark_blue
    phone:text-[1.2rem]
  `
}

const Rules: React.FC<IRulesProps> = ({ title, rules }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <ol className={styles.textContainer}>
        {rules?.map((item, index) => (
          <li className={styles.text} key={index}>{item}</li>
        ))}
      </ol>
    </div>
  )
}

export default Rules; 