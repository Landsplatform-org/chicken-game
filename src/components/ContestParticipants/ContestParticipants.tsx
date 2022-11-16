import React, { useState, useEffect } from "react";
import ContestsParticipantsTemplate from "../../templates/ContestsParticipantsTemplate";
import UsersTemplate from "../../templates/UsersTemplate";
import { IParticipantListProps } from "../../interfaces/IParticipantsListProps";
import { participantsList } from './participants-list';

const styles = {
  wrapper: `w-full flex justify-center items-center`,
  container: `
    w-[70%]
    phone:w-full
    tablet:w-full
    laptop:w-full
    desktop:w-[90%]
  `,
  content: `
    flex flex-row justify-center gap-8
    phone:p-4 phone:flex-col
    tablet:p-4 tablet:flex-col
    laptop:p-4
  `,
};

const ContestParticipants = () => {
  const [firstListPart, setFirstListPart] = useState<IParticipantListProps[]>();
  const [secondListPart, setSecondListPart] = useState<IParticipantListProps[]>();

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
          <ContestsParticipantsTemplate title="Топ участников конкурса реферелов">
            {firstListPart?.map((item) => (
              <UsersTemplate key={item.id} txhash={item.txhash} sum={item.sum} />
            ))}
          </ContestsParticipantsTemplate>
          <ContestsParticipantsTemplate title="Топ участников конкурса инвесторов">
            {secondListPart?.map((item) => (
              <UsersTemplate key={item.id} txhash={item.txhash} sum={item.sum} />
            ))}
          </ContestsParticipantsTemplate>
        </div>
      </div>
    </div>
  );
};

export default ContestParticipants;
