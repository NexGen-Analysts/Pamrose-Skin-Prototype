import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
    const { navigate, user } = useContext(ShopContext);
    const [deliveryMethod, setDeliveryMethod] = useState('courier');
    const [paymentMethod, setPaymentMethod] = useState('cash');

    return (
        <div className='flex flex-col sm:flex-row justify-between gap-10 pt-5 sm:pt-14 min-h-[80vh] border-t'>
            {/* Delivery Information */}
            <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
                <div className='text-xl sm:text-2xl my-3'>
                    <Title text1={'DELIVERY'} text2={'INFORMATION'} />
                </div>
                {/* Simplified form - in a real app, this would be more complex */}
                <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Full Name' required />
                <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street Address' required />
                <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Suburb' required />
                <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' required />
                <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Postal Code' required />
                <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Phone Number' required />
            </div>

            {/* Order Summary & Payment */}
            <div className='mt-8 flex-1'>
                <div className='min-w-80'>
                    <CartTotal />
                </div>

                {/* Delivery Method */}
                <div className='mt-12'>
                    <Title text1={'DELIVERY'} text2={'METHOD'} />
                    <div className='flex flex-col gap-3'>
                        <div onClick={() => setDeliveryMethod('courier')} className='flex items-center gap-3 border p-3 cursor-pointer'>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${deliveryMethod === 'courier' ? 'bg-primary-pink' : ''}`}></p>
                            <p className='text-gray-500 text-sm font-medium'>3rd Party Courier (e.g. The Courier Guy)</p>
                        </div>
                        <div onClick={() => setDeliveryMethod('collection')} className='flex items-center gap-3 border p-3 cursor-pointer'>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${deliveryMethod === 'collection' ? 'bg-primary-pink' : ''}`}></p>
                            <p className='text-gray-500 text-sm font-medium'>Collection at IIE Rosebank College, Pretoria</p>
                        </div>
                    </div>
                </div>
                
                {/* Payment Method */}
                <div className='mt-12'>
                    <Title text1={'PAYMENT'} text2={'METHOD'} />
                    <div className='flex flex-col gap-3'>
                        <div onClick={() => setPaymentMethod('cash')} className={`border p-3 cursor-pointer ${paymentMethod === 'cash' ? 'border-primary-pink' : ''}`}>
                            <div className='flex items-center gap-3'>
                                <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === 'cash' ? 'bg-primary-pink' : ''}`}></p>
                                <p className='text-gray-500 text-sm font-medium'>Cash on {deliveryMethod === 'collection' ? 'Collection' : 'Delivery'}</p>
                            </div>
                        </div>
                        <div onClick={() => setPaymentMethod('deposit')} className={`border p-3 cursor-pointer ${paymentMethod === 'deposit' ? 'border-primary-pink' : ''}`}>
                            <div className='flex items-center gap-3'>
                                <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === 'deposit' ? 'bg-primary-pink' : ''}`}></p>
                                <p className='text-gray-500 text-sm font-medium'>Bank Deposit / EFT</p>
                            </div>
                            {paymentMethod === 'deposit' && (
                                <div className='mt-4 pl-8 text-xs text-gray-600'>
                                    <p><b>Account Holder:</b> MISS NALEDI MAKAMA</p>
                                    <p><b>Bank:</b> [Your Bank Name]</p>
                                    <p><b>Account Number:</b> [Your Account Number]</p>
                                    <p><b>Reference:</b> {user?.email || "Your Email Address"}</p>
                                    <p className='mt-2 font-semibold'>Please send proof of payment to Naledi via Email, SMS, or WhatsApp.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className='w-full text-end mt-8'>
                    <button onClick={() => { toast.success("Order Placed Successfully!"); navigate('/orders'); }} className='bg-primary-pink text-white px-16 py-3 text-sm rounded-md'>PLACE ORDER</button>
                </div>
            </div>
        </div>
    )
}

export default PlaceOrder