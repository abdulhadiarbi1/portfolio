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
            <Comp src={'/next.svg'} Percentage={80} Title={'NextJS'}  href={"https://nextjs.org/"}/>
            <Comp src={'/react.png'} Percentage={80} Title={'ReactJS'}  href={"https://react.dev/"}/>
            <Comp src={'/js.png'} Percentage={80} Title={'js'}  href={"https://en.wikipedia.org/wiki/JavaScript"}/>
            <Comp src={'/css.png'} Percentage={80} Title={'CSS'}  href={"https://en.wikipedia.org/wiki/CSS"}/>
            <Comp src={'/html.png'} Percentage={80} Title={'html'}  href={"https://en.wikipedia.org/wiki/HTML5#:~:text=HTML5%20(Hypertext%20Markup%20Language%205,as%20the%20HTML%20Living%20Standard."}/>
            <Comp src={'/tw.png'} Percentage={80} Title={'Tailwind'}  href={"https://tailwindcss.com/"}/>
            <Comp src={'/sanity.png'} Percentage={80} Title={'sanity'} href={"https://www.sanity.io/"} />
            <Comp src={'/strapi.png'} Percentage={80} Title={'strapi'}  href={"https://strapi.io/"}/>
          </motion.div>
          <motion.div initial={{ x: 100 }} whileInView={{ x: 0 }} transition={{ duration: 1 }} className='grid grid-cols-2 gap-3'>
            <Comp src={'/post.png'} Percentage={80} Title={'postgre'}  href={"https://www.postgresql.org/"}/>
            <Comp src={'/c.png'} Percentage={80} Title={'C'}  href={"https://en.wikipedia.org/wiki/C_(programming_language)"}/>
            <Comp src={'/c++.png'} Percentage={80} Title={'C ++'} href={"https://en.wikipedia.org/wiki/C%2B%2B"}/>
            <Comp src={'/wordpress.png'} Percentage={80} Title={'wordpress'}  href={"https://wordpress.com/"}/>
            <Comp src={'/shopify.png'} Percentage={80} Title={'shopify'}  href={"https://www.shopify.com/"}/>
            <Comp src={'/vscode.png'} Percentage={80} Title={'VSCODE'}  href={"https://code.visualstudio.com/"}/>
            <Comp src={'/git.png'} Percentage={80} Title={'git'}  href={"https://git-scm.com/"}/>
            <Comp src={'/github.png'} Percentage={80} Title={'github'}  href={"https://github.com/"}/>
          </motion.div>




        </div>
      </div>
    </>
  )
}

export default Skills
