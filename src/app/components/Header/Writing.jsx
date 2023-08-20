import React from 'react'
import Typewriter from 'typewriter-effect';

const Writing = () => {
  return (
    <div className='text-xl font-bold mt-6'>
        <Typewriter
  options={{
    strings: ['Abdul Hadi'],
    autoStart: true,
    loop: true,
  }}
/>
    </div>
  )
}

export default Writing