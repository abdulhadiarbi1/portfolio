'use client'
import React from 'react'
import { Images } from './Images'
import Image from 'next/image'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Title from '../Title';


const MobileDesgin = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className='lg:hidden block mt-28 overflow-hidden'>
      <div className='mb-16'>
      <Title Tagline={'swipe to see new designs'} Heading={'designs'} />
      </div>
      <div className=''>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        ssr={true}
        infinite={true}
        arrows={false}
      >
        {Images.map((data, id) => {
          return (
            <div key={id} className='flex justify-center'>
              <Image src={data.src} alt='design' width={400} height={400} />
            </div>
          );
        })}
      </Carousel>
      </div>
    </div>
  )
}


export default MobileDesgin