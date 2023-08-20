import Link from 'next/link'
import React from 'react'

const Container = ({Name , Link}) => {
  return (
    <div className='w-auto h-auto p-2 hover:bg-black/60'>{Name}</div>
  )
}

export default Container