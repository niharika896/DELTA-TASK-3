import React, { useRef, useEffect } from 'react';
import asb from "../assets/asb.avif"
import loot from "../assets/loot.jpg";
import movie from "../assets/movie.webp";
import au from "../assets/au.avif";
import xmen from "../assets/xmen.jpg";
import './carousel.css';

const Carousel = () => {
  const listRef = useRef(null);
  const currentImg = useRef(0);

  function scrollToIndex(index) {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll('li>img')[index];
    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }


  return (
    <div className='max-w-screen'>
      <button
        className='fixed top-[30%] font-bold text-2xl bg-black text-white pl-6 pr-2 py-1.5 rounded-r-lg opacity-80'
        onClick={() => {
          if (currentImg.current - 1 >= 0) scrollToIndex(--currentImg.current);
        }}>{`<`}</button>
      <div className='overflow-hidden w-full'>
      <ul className='flex overflow-x-scroll scrollbar-hide' ref={listRef}>
        <li className='m-4 shrink-0'><img src={asb} alt="asb" className='h-[40vh] rounded-2xl' /></li>
        <li className='m-4 shrink-0'><img src={loot} alt="loot" className='h-[40vh] rounded-2xl' /></li>
        <li className='m-4 shrink-0'><img src={movie} alt="movie" className='h-[40vh] rounded-2xl' /></li>
        <li className='m-4 shrink-0'><img src={au} alt="au" className='h-[40vh] rounded-2xl' /></li>
        <li className='m-4 shrink-0'><img src={xmen} alt="xmen" className='h-[40vh] rounded-2xl' /></li>
      </ul>
        </div>
      <button
        className='fixed right-0 top-[30%] font-bold text-2xl bg-black text-white pl-2 pr-6 py-1.5 rounded-l-lg opacity-80'
        onClick={() => {
          if (currentImg.current + 1 <= 4) scrollToIndex(++currentImg.current);
        }}>{`>`}
      </button>
    </div>
  );
};

export default Carousel;
