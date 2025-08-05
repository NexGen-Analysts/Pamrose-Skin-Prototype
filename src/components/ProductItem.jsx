import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({ id, thumbnail, name, price }) => {

  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} onClick={() => window.scrollTo(0, 0)} className='text-gray-700 cursor-pointer flex flex-col'>

      <div className=' overflow-hidden rounded-md'>
        {/* Corrected to use the 'thumbnail' prop */}
        <img className='hover:scale-110 transition ease-in-out w-full' src={thumbnail} alt={name} />
      </div>

      <div className='pt-3 pb-1 flex-grow'>
        <p className='text-sm'>{name}</p>
      </div>
      <p className='text-sm font-medium'>{currency}{price}</p>
      
    </Link>
  )
}

export default ProductItem