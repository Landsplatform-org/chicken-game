import React, { useRef, useLayoutEffect } from "react";
import TitleHeader from '../components/TitleHeader';
import QnA from "../components/QnA/QnA";
import ContactUs from "../components/ContactUs/ContactUs";

const styles = {
  wrapper: `flex flex-col gap-40`,
};

const SupportPage = () => {
  const supportRef = useRef<HTMLDivElement | null>(null)

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
    handleScroll(supportRef.current)
  })
  
  return (
    <div className={styles.wrapper}>
      <TitleHeader titleName="Поддержка" refCurrent={supportRef} />
      <ContactUs />
      <QnA />
    </div>
  )
}

export default SupportPage