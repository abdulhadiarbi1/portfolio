'use client'
import { AnimatePresence } from 'framer-motion';
import styles from './style.module.scss'
import { useEffect, useState } from 'react';
import Navbar from './Nav/Navbar';
import { usePathname } from 'next/navigation';
import Writing from './Writing';
import ThemeButton from '../DarkMode/ThemeButton';
export default function Index({writing}) {

  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false)
  }, [pathname])

  return (
    <div className='flex justify-between sm:justify-between px-10 mb-10'>
      {writing && <Writing />}
      <div className='sm:hidden mt-5'>      
        <ThemeButton/>
        </div>

      
      <div className={`${styles.main} hidden sm:block `}>
      
        <div className={styles.header}>
          <div onClick={() => { setIsActive(!isActive) }} className={styles.button}>
            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
          </div>
        </div>

      </div>
      <AnimatePresence>   {/* mode="wait"    Means it will take sometime to perform animation*/}
        {isActive && <Navbar />}
      </AnimatePresence>
    </div>
  )

}