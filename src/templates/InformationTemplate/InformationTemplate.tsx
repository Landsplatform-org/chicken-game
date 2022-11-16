import React from 'react';
import { IInformationTemplateProps } from '../../interfaces/IInformationTemplateProps';
import './styles.css'
const styles = {
  body: `
    w-full h-max rounded-3xl p-20 inset-shadow
    phone:p-4
    tablet:p-8
    laptop:p-16
    desktop:p-16
  `,
  content: `
    flex flex-col gap-8 items-center justify-center
  `,
  title: `
    font-english font-[900] text-white text-[3.5rem]
    phone:text-[2.5rem] phone:text-center
    tablet:text-[3rem]
  `,
}

const InformationTemplate: React.FC<IInformationTemplateProps> = ({ title, children }) => {
  return (
    <div className={styles.body}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default InformationTemplate