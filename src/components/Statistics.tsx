import React from 'react';
import InformationTemplate from '../templates/InformationTemplate/InformationTemplate';
import StatisticsData from './StatisticsData';

const styles = {
  wrapper: `w-screen flex justify-center items-center`,
  container: `
    w-[70%]
    phone:w-full phone:px-2
    tablet:w-full tablet:px-4
    laptop:w-full laptop:px-6
    desktop:w-[90%]
  `
}

const Statistics = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <InformationTemplate title="Статистика проекта">
          <StatisticsData />
        </InformationTemplate>
      </div>
    </div>
  )
}

export default Statistics