import React from 'react';
import { Link } from 'react-router-dom';
import { footerNavItems } from './items-list';
import "./styles.css"

const styles = {
  body: `
    w-1/2 flex flex-row flex-wrap gap-4
    phone:w-full
    tablet:w-full
    laptop:w-4/6
  `,
  link: `w-max font-russian font-normal text-[1rem] text-white footer-link mix-blend-lighten`
}

const FooterNav = () => {
  return (
    <div className={styles.body}>
      {footerNavItems?.map((items) => (
        <Link key={items.id} className={styles.link} to={items.to}><span>{items.name}</span></Link>
      ))}
    </div>
  )
}

export default FooterNav