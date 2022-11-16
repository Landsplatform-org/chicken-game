import React from 'react'
import { Link } from 'react-router-dom';
import { IButtonTemplateProps } from '../../interfaces/IButtonTemplateProps';
import "./styles.css"

const styles = {
  body: `
    w-max flex flex-row gap-2 items-center py-3 px-8 rounded-full bg-blue text-[1.2rem] text-white font-russian font-semibold outline-none button
    phone:text-[1rem]
  `
}

const ButtonTemplate: React.FC<IButtonTemplateProps> = ({ text, link = '' }) => {
  return (
    <Link className={styles.body} to={link}><span>{text}</span></Link>
  )
}

export default ButtonTemplate;