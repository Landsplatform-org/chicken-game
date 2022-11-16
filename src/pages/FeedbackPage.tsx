import React, { useRef, useLayoutEffect }  from "react";
import Feedback from "../components/Feedback/Feedback";
import TitleHeader from "../components/TitleHeader";

const styles = {
  wrapper: `flex flex-col gap-40`,
};

const FeedbackPage = () => {
  const feedbackRef = useRef<HTMLDivElement | null>(null)

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
    handleScroll(feedbackRef.current)
  })  

  return (
    <div className={styles.wrapper}>
      <TitleHeader titleName="Отзывы о проекте" refCurrent={feedbackRef} />
      <Feedback />
    </div>
  );
};

export default FeedbackPage;
