'use client'
import React from 'react'
import { motion } from 'framer-motion'
const Title = ({Heading , Tagline}) => {
  return (
    <motion.div initial={{opacity:0, scale:0}} whileInView={{opacity:1 , scale:1}} transition={{duration:1}}>
        <div className='flex flex-col justify-center text-center items-center'>
    <h1 className='uppercase tracking-[20px] text-gray-500 text-2xl'>{Heading}</h1>
    <p className='uppercase tracking-[3px] text-gray-500 text-sm'>{Tagline}</p>
</div>
    </motion.div>
  )
}

export default Title