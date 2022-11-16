import React, { useRef, useLayoutEffect } from "react";
import Title from "../components/Title/Title";
import Statistics from "../components/Statistics";
import About from "../components/About/About";
import Advantages from "../components/Advantages";
import QnA from "../components/QnA/QnA";
import ChickenToBuy from "../components/ChickenToBuy/ChickenToBuy";

const styles = {
  wrapper: `flex flex-col gap-40`,
};

const HomePage = () => {
  const homeRef = useRef<HTMLDivElement | null>(null)

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
    handleScroll(homeRef.current)
  })

  return (
    <div className={styles.wrapper}>
      <Title homeRef={homeRef}/>
      <Statistics />
      <About />
      <Advantages />
      <QnA />
      <ChickenToBuy />
    </div>
  );
};

export default HomePage;
