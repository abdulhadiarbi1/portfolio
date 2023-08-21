import Header from './components/Header/Index'
import Mobile from './components/Header/MobileNav/Mobile';
import dynamic from 'next/dynamic';
import MobileDesgin from './components/My Design/MobileDesgin';

const Products = dynamic(() => import('./components/Products/Products'))
const ProductMobile = dynamic(() => import('./components/Products/ProductMobile'))
const Design = dynamic(() => import('./components/My Design/Design'))
const Skills = dynamic(() => import('./components/Skills/Skills'))
const Mask = dynamic(() => import('./components/Mask/Mask'))
const Contact = dynamic(() => import('./components/Contact/Contact'))

export default function Home({  }) {
  
  return (
    <>
    <Header/>
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

    
   
    

    

    </>
  )
}



