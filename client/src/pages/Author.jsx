
import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Author = () => {
  return(
    <>
    <Navbar/>

      <div className="flex flex-col items-center justify-center min-h-[60vh] p-6">
        <div className='flex flex-row justify-center mt-4 mb-14'>
            <p className='inline-block py-2 px-8 rounded-full mb-2 border text-sm border-primary/35 bg-primary/5 font-medium text-primary cursor-pointer'> Author Details</p>
        </div>

        {/* Name */}
        <h1 className="text-5xl font-bold text-primary mb-4">Bikram Roy</h1>

        {/* Qualification */}
        <p className="text-lg text-gray-700 mb-6">
          MCA (First-Class First), BSc CS (CGPA: 8.589)
        </p>

        {/* Links */}
        <div className="flex gap-6">
          <a 
            href="https://www.linkedin.com/in/roybikram1411/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-lg border border-primary/40 text-primary hover:bg-primary hover:text-white transition-all"
          >
            LinkedIn
          </a>

          <a 
            href="https://bikramroy.onrender.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-lg border border-primary/40 text-primary hover:bg-primary hover:text-white transition-all"
          >
            Website
          </a>
        </div>
      </div>

    <Footer/>
    
    </>
  ) 
};

export default Author;
