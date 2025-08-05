import React, { useState, useContext } from 'react'
import { ShopContext } from '../context/ShopContext';

const Login = () => {
    const [currentState, setCurrentState] = useState('Login');
    const { login, register } = useContext(ShopContext);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const onChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if (currentState === 'Login') {
            login(formData.email, formData.password);
        } else {
            register(formData.name, formData.email, formData.password);
        }
    };

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
            <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                <p className='prata-regular text-3xl'>{currentState}</p>
                <hr className=' border-none h-[1.5px] w-8 bg-gray-800' />
            </div>
            {currentState === 'Sign Up' && (
                <input name="name" onChange={onChangeHandler} value={formData.name} className='w-full px-3 py-2 border border-gray-800' type="text" placeholder='Name' required />
            )}
            <input name="email" onChange={onChangeHandler} value={formData.email} className='w-full px-3 py-2 border border-gray-800' type="email" placeholder='Email' required />
            <input name="password" onChange={onChangeHandler} value={formData.password} className='w-full px-3 py-2 border border-gray-800' type="password" placeholder='Password' required />
            <div className='w-full flex justify-between text-sm mt-[-8px]'>
                <p className='cursor-pointer hover:text-primary-pink'>Forgot your password?</p>
                {currentState === 'Login'
                    ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer font-semibold'>Create account</p>
                    : <p onClick={() => setCurrentState('Login')} className='cursor-pointer font-semibold'>Already have an account? Login</p>
                }
            </div>
            <button type='submit' className='bg-primary-pink text-white font-light px-8 py-3 mt-4 rounded-md'>{currentState === 'Login' ? 'Sign in' : 'Create Account'}</button>
        </form>
    )
}

export default Login;