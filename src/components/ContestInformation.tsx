import React from "react";
import InformationTemplate from "../templates/InformationTemplate/InformationTemplate";

const styles = {
  wrapper: `w-screen flex justify-center items-center`,
  container: `
    w-[70%]
    phone:w-full
    tablet:w-full
    laptop:w-full
    desktop:w-[90%]
  `,
  content: `phone:p-4 tablet:p-4 laptop:p-6`,
  text: `
    font-russian font-normal text-white text-[1.5rem] text-center
    phone:text-[1.2rem]
  `,
};

const ContestInformation = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <InformationTemplate title="Конкурсные баллы">
            <p className={styles.text}>
              За каждое действие вами или вашим рефералом в момент проведения
              конкурса начисляются баллы, 1 RUB = 1 балл. Чем больше у Вас
              баллов, тем больше шанс победить в конкурсе. В конкурсе может
              участвовать любой желающий и занять 1-е призовое место.
            </p>
          </InformationTemplate>
        </div>
      </div>
    </div>
  );
};

export default ContestInformation;
