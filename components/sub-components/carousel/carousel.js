import React from 'react';
import Carousel from 'nuka-carousel';
import {
  VscAccount,
  VscActivateBreakpoints,
  VscAdd,
  VscArchive,
  VscArrowBoth,
} from 'react-icons/vsc';
export const Slider = () => {
  return (
    <Carousel
      wrapAround={true}
      slidesToShow={4}
      autoplay={true}
      autoplayInterval={1000}
      withoutControls={true}
      pauseOnHover={true}
      adaptiveHeight={true}
      cellAlign='center'
    >
      <VscAccount className='h-10 w-10' />
      <VscActivateBreakpoints className='h-10 w-10' />
      <VscAdd className='h-10 w-10' />
      <VscArchive className='h-10 w-10' />
      <VscArrowBoth className='h-10 w-10' />
    </Carousel>
  );
};
