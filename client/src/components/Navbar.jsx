import React from 'react'
import {assets} from '../assets/assets';

import {useAppContext} from '../context/AppContext';

const Navbar = () => {
  
  //now we use app-context
  const {navigate, token}= useAppContext();

  return (
    <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 cursor-pointer '>

        {/* logo */}
        <img onClick={()=> navigate("/")} src={assets.inQuick} alt="logo" className='w-32 sm:w-44'/>

        {/* Admin Login */}
        <button onClick={()=> navigate("/admin")} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-4 sm:px-10 py-1.5 sm:py-2.5'>
            {token ? 'Dashboard' : 'Admin Login'}
            <img src={assets.arrow} alt="arrow"  className='w-3'/>
        </button>

    </div>
  )
}
export default Navbar