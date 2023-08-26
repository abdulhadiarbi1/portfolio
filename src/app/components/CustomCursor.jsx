import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'

const CustomCursor = () => {
  const [mousePosition , setMousePosition] = useState({
    x:0,
    y:0
  });
  console.log(mousePosition);

  useEffect(()=>{
    const mouseMove = e => {
      setMousePosition({
        x : e.clientX,
        y : e.clientY
      })
    }
    window.addEventListener("mousemove",mouseMove)

    return () =>{
      window.removeEventListener("mousemove",mouseMove)
    }
  },[])

  const variants = {
    default : {
      x: mousePosition.x,
      y: mousePosition.y
    }
  }
  return (
    <motion.div variants={variants} animate="default" className='h-16 w-16 rounded-full bg-black cursor-none '>
      
    </motion.div>
  )
}

export default CustomCursor