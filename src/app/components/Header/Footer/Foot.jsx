import React from 'react'
import Link from 'next/link';
import MagneticFramer from '../../MagneticFramer';
export const Foot = () => {
  return (
    <div className='flex justify-center text-[12px] sm:gap-[40px] gap-10 '>
        <MagneticFramer><Link href={'https://github.com/abdulhadi240'} target='_blank' className='hover:underline'>Github</Link></MagneticFramer>
        <MagneticFramer><Link href={'https://www.linkedin.com/in/abdul-hadi-28a46221b/'} target='_blank' className='hover:underline'>Linkedin</Link></MagneticFramer>
        <MagneticFramer><Link href={'https://api.whatsapp.com/send/?phone=%2B923120202881&text&type=phone_number&app_absent=0'} target='_blank' className='hover:underline'>Whatsapp</Link></MagneticFramer>
        <MagneticFramer><Link href={'https://mail.google.com/mail/?view=cm&to=ah912425@gmail.com&su=Your%20Subject&body=Your%20Message'} target='_blank' className='hover:underline'>Email</Link></MagneticFramer>

    </div>
  )
}
