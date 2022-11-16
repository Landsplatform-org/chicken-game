import React, { useLayoutEffect, useRef } from "react";
import TitleHeader from "../../components/TitleHeader";
import Rules from "../../components/Rules";
import { mainRules } from "./main-rules";
import { projectResponsibilities } from "./project-responsibilities";
import { userResponsibilities } from "./user-responsibilities";

const styles = {
  wrapper: `flex flex-col justify-center items-center gap-40`,
  container: `
    w-[70%]
    phone:w-full
    tablet:w-full
    laptop:w-full
    desktop:w-[90%]
  `,
  content: `
    flex flex-col gap-16
    phone:p-4
    tablet:p-6
    laptop:p-12
  `
}

const RulesPage = () => {
  const rulesRef = useRef<HTMLDivElement | null>(null);

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
    handleScroll(rulesRef.current);
  });

  return (
    <div className={styles.wrapper}>
      <TitleHeader titleName="Правила игры" refCurrent={rulesRef} />
      <div className={styles.container}>
        <div className={styles.content}>
          <Rules title="1. Общие положения" rules={mainRules} />
          <Rules
            title="2. Обязанности проекта"
            rules={projectResponsibilities}
          />
          <Rules
            title="3. Обязанности пользователей"
            rules={userResponsibilities}
          />
        </div>
      </div>
    </div>
  );
};

export default RulesPage;
