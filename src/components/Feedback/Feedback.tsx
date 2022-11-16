import React from "react";
import FeedbackTemplate from "../../templates/FeedbackTemplate";
import { feedbackList } from "./feedback-list";
import LeaveFeedback from "../LeaveFeedback";

const styles = {
  wrapper: `w-screen flex justify-center items-center`,
  container: `
    w-[70%]
    phone:w-full
    tablet:w-full
    laptop:w-full
    desktop:w-[90%]
  `,
  content: `
    flex flex-row gap-10
    phone:p-4 phone:flex-col-reverse
    tablet:p-6 tablet:flex-col-reverse
    laptop:p-12 laptop:flex-col-reverse
  `,
  feedbackContainer: `flex flex-col gap-10 overflow-auto`
};

const Feedback = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.feedbackContainer}>
            {feedbackList?.map((item) => (
              <FeedbackTemplate key={item.id} username={item.username} date={item.date} text={item.text} />
            ))}
          </div>
          <LeaveFeedback />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
