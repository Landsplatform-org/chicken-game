import React from 'react';
import { ITitleHeaderTemplateProps } from '../../interfaces/ITitleHeaderTemplateProps';
import "./styles.css"

const styles = {
  wrapper: `w-full h-[400px] flex items-center justify-center th-background`,
  container: `
    w-[70%] flex flex-row items-center
    phone:w-full phone:justify-center
    tablet:w-full tablet:justify-center
    desktop:w-[90%]
  `,
  name: `
    font-english font-[900] text-[3.5rem] text-dark_blue
    phone:text-[3rem] phone:text-center
  `
}

const TitleHeaderTemplate: React.FC<ITitleHeaderTemplateProps> = ({ name }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.name}>{name}</h1>
      </div>
    </div>
  )
}

export default TitleHeaderTemplate