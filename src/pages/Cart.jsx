import React, { useContext } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {

  const { products, currency, navigate, cartItems, removeFromCart, updateQuantity } = useContext(ShopContext);

  const cartData = Object.keys(cartItems).map(itemId => {
    const product = products.find(p => p._id === itemId);
    return { ...product, quantity: cartItems[itemId] };
  }).filter(item => item._id); // Filter out any potential mismatches

  return (
    <div className='border-t pt-14'>

      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div>
        {cartData.length > 0 ? cartData.map((item) => (
          <div key={item._id} className='py-4 border-b text-gray-700 grid grid-cols-[1fr_4fr_1fr_1fr] sm:grid-cols-[1fr_4fr_2fr_1fr] items-center gap-4'>
            {/* Corrected image source to use thumbnail */}
            <img className='w-16 sm:w-20' src={item.thumbnail} alt={item.name} />
            <div>
              <p className='text-xs sm:text-base font-medium'>{item.name}</p>
              <p className='text-sm mt-1'>{currency}{item.price}</p>
            </div>
            <input 
              onChange={(e) => updateQuantity(item._id, Number(e.target.value))} 
              className='border max-w-16 sm:max-w-20 px-1 sm:px-2 py-1 justify-self-center' 
              type="number" 
              value={item.quantity} 
              min={1}
            />
            <img onClick={() => removeFromCart(item._id)} className='w-4 sm:w-5 cursor-pointer justify-self-center' src={assets.bin_icon} alt="Remove" />
          </div>
        )) : <p>Your cart is empty.</p>}
      </div>

      {cartData.length > 0 && (
        <div className='flex justify-end my-20'>
          <div className='w-full sm:w-[450px]'>
            <CartTotal />
            <div className='w-full text-end'>
              <button onClick={() => navigate('/place-order')} className='bg-primary-pink text-white text-sm my-8 px-8 py-3 rounded-md'>PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Cart