import React from 'react';
import { IContestsParticipantsTemplateProps } from '../interfaces/IContestsParticipantsTemplateProps';


const styles = {
  body: `
    w-[49%] flex flex-col
    phone:w-full
    tablet:w-full
  `,
  titleContainer: `px-12 py-6 rounded-tl-3xl rounded-tr-3xl bg-blue`,
  title: `
    font-english font-[900] text-white text-[1.75rem] text-center
    phone:text-[1.5rem]
  `,
  statsContainer: `px-12 py-6 bg-light_blue flex flex-row justify-between items-center shadow shadow-3xl`,
  stats: `
    font-russian font-normal text-white text-[1.25rem]
    text-[1.2rem]
  `,
  usersContainer: `w-full flex flex-col`,
  span: `font-russian font-normal text-dark_blue text-[1.25rem]`
}

const ContestsParticipantsTemplate: React.FC<IContestsParticipantsTemplateProps> = ({ title, children }) => {
  return (
    <div className={styles.body}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          {title}
        </h1>
      </div>
      <div className={styles.statsContainer}>
        <span className={styles.stats}>Логин</span>
        <span className={styles.stats}>Сумма</span>
      </div>
      <div className={styles.usersContainer}>
        {children}
      </div>
    </div>
  )
}

export default ContestsParticipantsTemplate