import React from 'react';
import TitleHeaderTemplate from '../templates/TitleHeaderTemplate/TitleHeaderTemplate';
import { ITitleHeaderProps } from '../interfaces/ITitleHeaderProps';

const styles = {
  wrapper: `w-full`
}

const TitleHeader: React.FC<ITitleHeaderProps> = ({ titleName, refCurrent }) => {
  return (
    <div ref={refCurrent} className={styles.wrapper}>
      <TitleHeaderTemplate name={titleName} />
    </div>
  )
}

export default TitleHeader;
