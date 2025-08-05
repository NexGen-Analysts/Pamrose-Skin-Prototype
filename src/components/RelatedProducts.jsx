import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const RelatedProducts = ({ category, currentProductId }) => {

    const [related, setRelated] = useState([])
    const { products } = useContext(ShopContext)

    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.filter(item => 
                item.category === category && item._id !== currentProductId
            );
            setRelated(productsCopy.slice(0, 5));
        }
    }, [products, category, currentProductId])

    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1={"RELATED"} text2={"PRODUCTS"} />
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    related.map((item) => (
                         // Corrected prop: passed 'thumbnail' instead of 'image'
                        <ProductItem key={item._id} id={item._id} thumbnail={item.thumbnail} name={item.name} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default RelatedProducts