import React, { useRef, useLayoutEffect } from "react";
import TitleHeader from "../components/TitleHeader";
import Statistics from "../components/Statistics";
import StatisticsLists from "../components/StatisticsLists";

const styles = {
  wrapper: `flex flex-col gap-40`,
};

const StatisticsPage = () => {
  const statiscticsRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (ref: HTMLDivElement | null) => {
    if (ref) {
      window.scrollTo({
        top: ref.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  useLayoutEffect(() => {
    handleScroll(statiscticsRef.current);
  });

  return (
    <div className={styles.wrapper}>
      <TitleHeader titleName="Статистика проекта" refCurrent={statiscticsRef} />
      <Statistics />
      <StatisticsLists />
    </div>
  );
};

export default StatisticsPage;
