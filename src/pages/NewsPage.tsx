import React, { useRef, useLayoutEffect } from "react";
import TitleHeader from "../components/TitleHeader";
import News from "../components/News";

const styles = {
  wrapper: `flex flex-col gap-40`,
};

const NewsPage = () => {
  const newsRef = useRef<HTMLDivElement | null>(null);

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
    handleScroll(newsRef.current);
  });

  return (
    <div className={styles.wrapper}>
      <TitleHeader titleName="Новости" refCurrent={newsRef} />
      <News />
    </div>
  );
};

export default NewsPage;
