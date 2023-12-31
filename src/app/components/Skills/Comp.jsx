'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Comp = ({src , Title , Percentage , href}) => {
    const [hide , setHide] = useState(true)
  return (
    <Link href={href} target='_blank'><div className='w-20 h-24 rounded-xl border-[0.5px]  border-gray-500 group  hover:bg-black hover:brightness-75 transition-all' onMouseEnter={()=>{setHide(false)}} onMouseLeave={()=>{setHide(true)}}>
        <div className={hide ? 'hidden transition-colors' : 'block text-white text-center text-sm font-bold uppercase mt-8 overflow-hidden transition-colors' }>
            {Title}
        </div>
        <div className='flex text-center group-hover:hidden'>
    <Image src={src} alt='icon' width={300} height={200} className='h-auto w-auto  my-2   object-fill  transition-all '/>
        </div>
    </div>
    </Link>
  )
}

export default Comp