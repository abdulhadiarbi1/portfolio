import React from 'react'
import { projects } from './data';
import ProductCard from './ProductCard';
import styles from './style.module.scss'
import Title from '../Title';
const Products = () => {
  return (
    <div>
       <Title Tagline={'move your mouse for scaling'} Heading={'projects'}/>
        <div className={styles.gallery}>
        <ProductCard projects={[projects[0], projects[1]]}/>
        <ProductCard projects={[projects[2], projects[3]]} reversed={true}/>
        <ProductCard projects={[projects[4], projects[5]]}/>
        <ProductCard projects={[projects[6], projects[7]]} reversed={true}/>
      </div>
    </div>
  )
}

export default Products