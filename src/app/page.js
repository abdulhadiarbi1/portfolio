"use client";
import dynamic from 'next/dynamic';
import MobileDesgin from './components/My Design/MobileDesgin';
import { VideoReveal } from "./components/VideoReveal";
import { useState } from "react";
import Mobile from './components/Header/MobileNav/Mobile';
import Header from './components/Header/Index'


const Products = dynamic(() => import('./components/Products/Products'))
const ProductMobile = dynamic(() => import('./components/Products/ProductMobile'))
const Design = dynamic(() => import('./components/My Design/Design'))
const Skills = dynamic(() => import('./components/Skills/Skills'))
const Mask = dynamic(() => import('./components/Mask/Mask'))
const Contact = dynamic(() => import('./components/Contact/Contact'))

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  return (
    <>
    {isVideoPlaying ? (
        <VideoReveal onVideoEnd={() => setIsVideoPlaying(false)} />
      ) : null}
      <div className=''>
      <Header writing={true}/>
    <Mobile/>
    <div className='pb-[600px]'></div>
    <div className='hidden sm:block'>
    <Products/>
    </div>
    <ProductMobile/>
    <div className='hidden lg:block'>
    <Design/>
    </div>
    <MobileDesgin/>
    <div className='mt-6'></div>
    <Skills/>
    <div className='hidden sm:block'>
    <Mask/>
    </div>
    <Contact/>
    <div className='mt-32'></div>
    <div className='mt-32'></div>
    
    </div>

    
   
    

    

    </>
  )
}

{ /* export async function getServerSideProps(context) {
    const client = createClient({
      projectId: "mgrr3fa7",
      dataset: "production",
      useCdn: true
    });

    const query = `*[_type == "Pet"]`;
    const pets = await client.fetch(query);
    return {
      props: {
        pets
      }
    }
  }*/}



