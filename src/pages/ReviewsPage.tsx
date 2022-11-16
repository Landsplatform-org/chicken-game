import React, { useLayoutEffect, useRef } from 'react';
import TitleHeader from '../components/TitleHeader';

const ReviewsPage = () => {
  const reviewsRef = useRef<HTMLDivElement | null>(null);

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
    handleScroll(reviewsRef.current);
  });
  
  return (
    <div>
      <TitleHeader titleName="Обзоры" refCurrent={reviewsRef} />
    </div>
  )
}

export default ReviewsPage