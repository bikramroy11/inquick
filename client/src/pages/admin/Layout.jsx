// sidebar
import React from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {assets} from '../../assets/assets';
import {Outlet} from 'react-router-dom';

import Sidebar from '../../components/admin/Sidebar';

import { useNavigate } from 'react-router-dom';
import {useAppContext} from '../../context/AppContext';
import toast from 'react-hot-toast';

const Layout = () => {
  const navigate = useNavigate();

  const {axios, setToken }= useAppContext();

  const logout=()=>{
    localStorage.removeItem('token');
    axios.defaults.headers.common['Authorization']=null;
    setToken(null);
    navigate('/');
  }

  return (
    <>

      {/* navbar for admin */}
      <div  className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32'>
        <img src={assets.inQuick} alt="" className='w-32 sm:w-40 cursor-pointer'
        onClick={()=>navigate('/')} />
        <button onClick={logout} className='text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer'>Logout</button>
      </div>
      <div className='border-b-2 border-gray-300/70'></div>

      {/* side manu with its options and show pages */}
      <div className='flex h-[calc(100vh-70px)]'> {/* here 'flex' used to make sidebarwith adminPage-panel side-by-side */}
        <Sidebar />
        <Outlet />  {/* it by default added the index child '/Dashboard' & for other i.e. '/admin/Comments' */}
        {/* The Outlet component used with React Router to render child routes within a parent route, here parent is '/admin'-Layout and child are 
        '/AddBlog', '/Comments', '/ListBlog', '/Dashboard' */}
      </div>
    </>
  )
}

export default Layout