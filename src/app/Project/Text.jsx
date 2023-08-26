import Link from 'next/link'
import React from 'react'

const Text = ({h1 , h2 , underline , src}) => {
  return (
    <div>
    {underline ? (
 <Link href={src} target='_blank'>
  <div className='group text-sm sm:text-base'>
        <h1 className=' font-semibold text-[#9a9a9abb]'>{h1}</h1>
        <h2 className={`font-semibold ${underline ? 'group-hover:underline' : ''} `}>{h2}</h2>
    </div></Link>
    ) : (
 <div className='group text-sm sm:text-base'>
        <h1 className=' font-semibold text-[#9a9a9abb]'>{h1}</h1>
        <h2 className={`font-semibold ${underline ? 'group-hover:underline' : ''} `}>{h2}</h2>
    </div>
    )}
    </div>
   
  )
}

export default Text