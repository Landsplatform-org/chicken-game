import React, { useRef, useLayoutEffect }  from 'react';
import TitleHeader from '../components/TitleHeader';
import About from "../components/About/About";
import Advantages from "../components/Advantages";
import ChickenToBuy from "../components/ChickenToBuy/ChickenToBuy";

const styles = {
  wrapper: `flex flex-col gap-40`,
};

const AboutPage = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null)
  
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
    handleScroll(aboutRef.current)
  })

  return (
    <div className={styles.wrapper}>
    <TitleHeader titleName='Об игре' refCurrent={aboutRef} />
    <About />
    <Advantages />
    <ChickenToBuy />
  </div>
  )
}

export default AboutPage