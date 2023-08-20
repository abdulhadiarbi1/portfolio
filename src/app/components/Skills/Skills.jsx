'use client'
import React from 'react'
import Comp from './Comp'
import Title from '../Title'
import { motion } from 'framer-motion'
const Skills = () => {
  return (
    <>
      <Title Tagline={'Hover over a skill for currency proficiency'} Heading={'SKILLS'} />
      <div className='flex justify-center mt-20'>
        <div className='flex gap-4 overflow-hidden'>

          <motion.div initial={{ x: -100 }} whileInView={{ x: 0 }} transition={{ duration: 1 }} className='grid grid-cols-2 gap-3'>
            <Comp src={'/next.png'} Percentage={80} Title={'NextJS'} />
            <Comp src={'/react.png'} Percentage={80} Title={'ReactJS'} />
            <Comp src={'/js.png'} Percentage={80} Title={'js'} />
            <Comp src={'/css.png'} Percentage={80} Title={'CSS'} />
            <Comp src={'/html.png'} Percentage={80} Title={'html'} />
            <Comp src={'/tw.png'} Percentage={80} Title={'Tailwind'} />
            <Comp src={'/sanity.png'} Percentage={80} Title={'sanity'} />
            <Comp src={'/strapi.png'} Percentage={80} Title={'strapi'} />
          </motion.div>
          <motion.div initial={{ x: 100 }} whileInView={{ x: 0 }} transition={{ duration: 1 }} className='grid grid-cols-2 gap-3'>
            <Comp src={'/post.png'} Percentage={80} Title={'postgre'} />
            <Comp src={'/c.png'} Percentage={80} Title={'C'} />
            <Comp src={'/c++.png'} Percentage={80} Title={'C ++'} />
            <Comp src={'/wordpress.png'} Percentage={80} Title={'wordpress'} />
            <Comp src={'/shopify.png'} Percentage={80} Title={'shopify'} />
            <Comp src={'/vscode.png'} Percentage={80} Title={'VSCODE'} />
            <Comp src={'/git.png'} Percentage={80} Title={'git'} />
            <Comp src={'/github.png'} Percentage={80} Title={'github'} />
          </motion.div>




        </div>
      </div>
    </>
  )
}

export default Skills
