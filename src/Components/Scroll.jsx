import React, { useState, useEffect } from 'react';
import {BsArrowUpCircle} from "react-icons/bs"

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show or hide the button based on scroll position
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const shouldShowButton = scrollTop > 200; // Show button after scrolling 200 pixels
      setIsVisible(shouldShowButton);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`scroll-to-top-button ${isVisible ? 'visible' : 'hidden'}`}
      onClick={handleScrollToTop}
    >
      <BsArrowUpCircle className='icon-up'/>
    </button>
  );
};

export default ScrollToTopButton;
