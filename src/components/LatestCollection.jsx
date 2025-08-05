import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const [latestProducts, setLatestProducts] = useState([])
    const { products } = useContext(ShopContext)

    useEffect(() => {
        if (products.length > 0) {
            // Displaying the first 10 products as the latest collection
            setLatestProducts(products.slice(0, 10))
        }
    }, [products])

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={"LATEST"} text2={"COLLECTION"} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Discover our newest arrivals, crafted with care for radiant skin.</p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    latestProducts.map((item) => (
                        // Corrected prop: passed 'thumbnail' instead of 'image'
                        <ProductItem key={item._id} id={item._id} thumbnail={item.thumbnail} name={item.name} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default LatestCollection