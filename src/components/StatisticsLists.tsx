import React, { useState, useEffect } from "react";
import UsersDataTemplate from "../templates/UsersDataTemplate";
import UsersTemplate from "../templates/UsersTemplate";
import { IParticipantListProps } from "../interfaces/IParticipantsListProps";
import { participantsList } from "./ContestParticipants/participants-list";

const styles = {
  wrapper: `w-full flex justify-center items-center`,
  container: `
    w-[70%]
    phone:w-full
    laptop:w-full
    desktop:w-[90%]
  `,
  content: `
    flex flex-row flex-wrap justify-center justify-between gap-y-10
    phone:p-4
    tablet:p-4
    laptop:p-4
  `,
  span: `font-russian font-normal text-dark_blue text-[1.25rem]`,
};

const StatisticsLists = () => {
  const [firstListPart, setFirstListPart] = useState<IParticipantListProps[]>();
  const [secondListPart, setSecondListPart] =
    useState<IParticipantListProps[]>();

  const devideArray = (array: IParticipantListProps[]) => {
    const array_size = 10;

    const sliced_array = [];

    for (let i = 0; i < array.length; i += array_size) {
      sliced_array.push(array.slice(i, i + array_size));
    }

    setFirstListPart(sliced_array[0]);
    setSecondListPart(sliced_array[1]);
  };

  useEffect(() => {
    devideArray(participantsList);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <UsersDataTemplate title="Последние 10 пополнений">
            {firstListPart?.map((item) => (
              <UsersTemplate
                key={item.id}
                txhash={item.txhash}
                sum={item.sum}
              />
            ))}
          </UsersDataTemplate>
          <UsersDataTemplate title="Последние 10 выплат">
            {secondListPart?.map((item) => (
              <UsersTemplate
                key={item.id}
                txhash={item.txhash}
                sum={item.sum}
              />
            ))}
          </UsersDataTemplate>
          <UsersDataTemplate title="Топ 10 рефералов">
            {secondListPart?.map((item) => (
              <UsersTemplate
                key={item.id}
                txhash={item.txhash}
                sum={item.sum}
              />
            ))}
          </UsersDataTemplate>
          <UsersDataTemplate title="Топ 10 по заработку">
            {secondListPart?.map((item) => (
              <UsersTemplate
                key={item.id}
                txhash={item.txhash}
                sum={item.sum}
              />
            ))}
          </UsersDataTemplate>
        </div>
      </div>
    </div>
  );
};

export default StatisticsLists;
