import React from 'react';
import { ISubInformationTemplateProps } from "../interfaces/ISubInformationTemplateProps"


const styles = { 
  body: `
    w-full p-5 rounded-3xl bg-sky_blue flex flex-row items-center gap-10
    phone:flex-col phone:gap-5
    tablet:w-[90%] tablet:self-center
    laptop:w-[80%] laptop:self-center
  `
}

const SubInformationTemplate: React.FC<ISubInformationTemplateProps> = ({ children }) => {
  return (
    <div className={styles.body}>{children}</div>
  )
}

export default SubInformationTemplate