import React from 'react'

const Neon = ({color , position}) => {
  return (
    <div className={`w-[300px] h-16 rounded-3xl ${color} sm:blur-[150px] blur-[200px] absolute ${position}  `}>
        
    </div>
  )
}

export default Neon