'use client'
import React from 'react'
import { projects } from './data';
import Image from 'next/image';
import Title from '../Title';
import Link from 'next/link';
const ProductMobile = () => {
  return (
    <div className='sm:hidden'>
      <Title Tagline={'MOVE YOUR MOUSE FOR SCALING'} Heading={'Projects'} />
      <div className='flex justify-center sm:hidden mt-10 '>
        <div className='flex flex-col'>
          {projects?.map((data, id) => {
            return (
              <Link ref={data.link}><div key={id} className='mb-5'>
                <Image src={`/${data.src}`} alt={data.name} height={400} width={400} />
                <div className='flex justify-between px-2 mt-2'>
                  <h1 className='font-bold uppercase'>{data.name}</h1>
                  <p className='text-xs mt-[2px]'>{data.year}</p>
                </div>
                <p className='text-sm px-2'>{data.description}</p>
              </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>

  )
}

export default ProductMobile