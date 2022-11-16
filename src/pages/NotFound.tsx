import React from 'react'
import { Link } from 'react-router-dom';

const styles = {
  wrapper: `fixed w-full h-full flex items-center justify-center bg-white z-[1000]`,
  container: `
    w-[50%]
    phone:w-full
    tablet:w-full
    laptop:w-full
    desktop:w-full
  `,
  content: `flex flex-col items-center justify-center gap-10`,
  error: `
    font-english font-[900] text-[4.5rem] text-dark_blue
    phone:text-[3rem] phone:text-center
    tablet:text-center
    laptop:text-center
  `,
  backHome: `
    font-russian font-normal text-[2rem] text-dark_blue
    phone:text-[1.5rem]
  `
}

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.error}>Страница не найдена 404</h1>
          <Link className={styles.backHome} to="/">Вернуться на главную</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound