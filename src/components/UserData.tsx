import React from "react";
import UsersAddDataTemplate from "../templates/UsersAddDataTemplate";
import UsersDataTemplate from "../templates/UsersDataTemplate";

const styles = {
  wrapper: `
    w-full h-max flex justify-center
    phone:py-0
    tablet:py-0
    laptop:py-0
  `,
  container: `
    w-[75%]
    phone:w-full
    tablet:w-full
    laptop:w-full
    desktop:w-[90%]
  `,
  content: `
    flex flex-row flex-wrap justify-center justify-between gap-y-10
    phone:p-4
    tablet:p-4
    laptop:p-4
  `,
};

const UserData = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <UsersDataTemplate title="Данные игрока"></UsersDataTemplate>
          <UsersDataTemplate title="Финансовая статистика"></UsersDataTemplate>
          <UsersDataTemplate title="Последние 20 пополнений">
            <></>
            <UsersAddDataTemplate
              donated="Оплачено"
              method="Способ"
              date="Дата"
              status="Статус"
            />
          </UsersDataTemplate>
          <UsersDataTemplate title="Последние 20 пополнений">
            <></>
            <UsersAddDataTemplate
              donated="Оплачено"
              method="Способ"
              date="Дата"
              status="Статус"
            />
          </UsersDataTemplate>
        </div>
      </div>
    </div>
  );
};

export default UserData;
