import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const BestSeller = () => {

    const [bestSeller, setBestSeller] = useState([])
    const { products } = useContext(ShopContext)

    useEffect(() => {
        const bestProducts = products.filter((item) => item.bestseller)
        setBestSeller(bestProducts.slice(0, 5))
    }, [products])

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={"BEST"} text2={"SELLERS"} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Our most loved products, celebrated by our community.</p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    bestSeller.map((item) => (
                         // Corrected prop: passed 'thumbnail' instead of 'image'
                        <ProductItem key={item._id} id={item._id} thumbnail={item.thumbnail} name={item.name} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default BestSeller