import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Loader = () => {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowError(true);
    }, 3000);
    return () => clearTimeout(timer); // cleanup timer
  }, []);

  return (
    <>
    <Navbar/>
    
      <div className='flex justify-center items-center h-[60vh]'>
          {/* init state have useState(false), so first it show 'loading...' then 'page-not-found' */}
        {showError ? (
          <div className='ms-5 text-3xl'>Page Not Found...</div>
        ) : (
          <>
            <div className='animate-spin rounded-full h-16 w-16 border-4 border-t-white border-gray-700'></div>
            <div className='ms-5 text-3xl'>Loading...</div>
          </>
        )}
      </div>
    </>
    
  );
};
export default Loader;
