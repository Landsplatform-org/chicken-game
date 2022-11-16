import React, { useRef, useLayoutEffect }  from 'react';
import TitleHeader from '../components/TitleHeader';
import ContestInformation from '../components/ContestInformation';
import ContestParticipants from '../components/ContestParticipants/ContestParticipants';

const styles = {
  wrapper: `flex flex-col gap-40`
}

const ContestsPage = () => {
  const contestRef = useRef<HTMLDivElement | null>(null)
  
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
    handleScroll(contestRef.current)
  })

  return (
    <div className={styles.wrapper}>
      <TitleHeader titleName="Конкурсы" refCurrent={contestRef} />
      <ContestInformation />
      <ContestParticipants />
    </div>
  )
}

export default ContestsPage