// BackToTop.js
import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const scrollPercentage = (scrollY / document.body.scrollHeight) * 100;

    // Show the button when scroll percentage is greater than 15%
    setIsVisible(scrollPercentage > 15);
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuad',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 p-2 bg-orange-500 h-[2rem] w-[2rem] flex justify-center items-center text-white rounded-[50%] transition-opacity ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <button onClick={scrollToTop}>
        <FontAwesomeIcon className='text-slate-100' icon={faArrowUp} />
      </button>
    </div>
  );
};

export default BackToTop;
