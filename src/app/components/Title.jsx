'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Neon from './Neon'
const Title = ({Heading , Tagline}) => {
  return (
    <div className='overflow-hidden'>
    <Neon color={'bg-blue-600'} position={'left-64'}/> 
    <Neon color={'bg-purple-600'} position={'right-64'}/>    
   
    <motion.div initial={{opacity:0, scale:0}} whileInView={{opacity:1 , scale:1}} transition={{duration:1}}>
        <div className='flex flex-col justify-center text-center items-center'>
    <h1 className='uppercase tracking-[20px]  text-2xl'>{Heading}</h1>
    <p className='uppercase tracking-[3px] text-gray-500 text-sm'>{Tagline}</p>
</div>
    </motion.div>
    </div>

  )
}

export default Title