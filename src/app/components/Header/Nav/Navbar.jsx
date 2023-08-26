'use client'
import React, {  useState } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../animation';
import Link from '../Link/Links';
import { Foot } from '../Footer/Foot';
import Curve from '../Curve/Curve';
import ThemeButton from '../../DarkMode/ThemeButton';

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export default function Navbar() {

    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  

    return (
      <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={`${styles.menu} w-screen sm:w-auto  z-50`} >
         <div className={styles.body}>
              <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className={styles.nav}>
                      <div className={styles.header}>
                          <p>Navigation</p>
                      </div>
                      {
                        navItems.map( (data, index) => {
                          return <Link key={index} data={{...data, index}} isActive={selectedIndicator == data.href} setSelectedIndicator={setSelectedIndicator}></Link>
                        })
                      }
              </div>
              <ThemeButton/>
              <Foot/>
          </div>
          <Curve />
      </motion.div>
    )
}