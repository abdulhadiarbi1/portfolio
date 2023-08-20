import React from 'react'
import Container from './Container'

const Mobile = () => {
  return (
    <div className='flex justify-center sm:hidden'>
    <div className='w-auto mix-blend-difference bg-white text-black fixed bottom-0 flex rounded-md shadow-lg mb-4'>
        <Container Name={'Home'}/>
        <Container Name={'Work'}/>
        <Container Name={'About'}/>
        <Container Name={'Contact'}/>

    </div>
    </div>
  )
}

export default Mobile