import React, {useRef} from 'react'
import {assets} from '../assets/assets';
import {useAppContext} from '../context/AppContext';

const Header = () => {

    //search box
    const {setInput, input}=useAppContext();

    const inputRef=useRef();

    const onSubmitHandler= async(e)=>{
        e.preventDefault();
        setInput(inputRef.current.value);
    }

    //search box clear
    const onClear=()=>{
        setInput('');
        inputRef.current.value='';
    }

  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
        <div className='text-center mt-12 sm:mt-20 mb-8'>

            {/* ai feature ad */}
            <div className='inline-flex items-center justify-center gap-4 px-6 sm:py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary'>
                <p>New AI-generated content is live now</p>
                <img src={assets.star_icon} alt="" className='w-2.5'/>
            </div>

            {/* welcome message- tagline */}
            <h1 className='text-4xl sm:text-6xl font-semibold sm:leading-16 text-gray-700 mt-4'>
                Tech moves fast, <br />
                stay relevant with <span className='text-red-400 text-5xl sm:text-7xl'>inQuick.</span> 
            </h1>

            {/* description */}
            <p className='my-6 sm:my-8 max-w-4xl m-auto text-lg  text-gray-500 '> 
                <span className='hidden sm:block'>This is your space to catch up, to explore what’s new, and to stay sharp in a world where tech never slows down.</span> 
                <span className='my-6 sm:my-8 max-w-2xl m-auto text-lg text-gray-700'> Whether it’s a quick update or a deep dive, <span className='text-red-500 text-xl'>inQuick</span> keeps you connected, informed, and always relevant.</span>
            </p> 

            {/* search bar */}
            <form onSubmit={onSubmitHandler} className='flex justify-between my-12 max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden'>
                <input ref={inputRef} type="text" placeholder='Search for Content' required className='w-full pl-4 outline-none'/>
                <button className='bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer' type='submit'>Search</button>
            </form>

        </div>

        <div className='text-center'>
            {
                input && <button onClick={onClear} className='border font-light text-xs py-1 px-3 rounded-sm shadow-custom-sm cursor-pointer'>Clear Search</button>
            }
        </div>

        {/* background gradient image */}
        <img src={assets.gradientBackground} alt="" className='absolute -top-50 -z-1 opacity-50'/>
    </div>
  )
}
export default Header