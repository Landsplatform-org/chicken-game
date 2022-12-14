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
      <div className={styles.usersContainer}>
        {children}
      </div>
    </div>
  )
}

export default ContestsParticipantsTemplate