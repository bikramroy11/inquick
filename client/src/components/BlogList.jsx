
import React, {useState} from 'react'
import { motion } from "motion/react" //npm package
import {blogCategories, blog_data} from '../assets/assets'; //blogCategories- have all of 4category of content and blog_data - have details blog
import BlogCard from './BlogCard'; //import BlogCard component

import {useAppContext} from '../context/AppContext';

const BlogList = () => {
    // state for active item from menu
    const [menu, setMenu]=useState("All");

    const {blogs, input}=useAppContext();

    //serach items in home page  
    const filteredBlogs=()=>{
        if(input === ''){
            return blogs
        }
        return blogs.filter((blog)=> blog.title.toLowerCase().includes(input.toLowerCase())  ||  blog.category.toLowerCase().includes(input.toLowerCase()));
    }

  return (
    <div>

        {/* content menu --------------------------------------------- */}
        <div className='flex flex-wrap md:flex-nowrap justify-center gap-x-8 gap-y-3  sm:gap-12 my-10 relative'>
            {/* by using map() we iterate all-over the array and item argument store each iterated element and setMenu re-render the clicked menu */}
            {blogCategories.map((item)=>(
                <div key={item} className='relative'>
                    <button onClick={()=> setMenu(item)} className={` cursor-pointer font-medium text-gray-600 ${menu===item && 'text-white px-4 pt-1'}`}>
                        {item}

                        {/* when select a menu then bg change */}
                        {menu===item && (
                            <motion.div 
                                layoutId='underline' 
                                transition={{type: 'spring', stiffness: 500, damping: 30}} 
                                className='absolute left-0 right-0 top-0 h-7.5 -z-1 bg-primary rounded-full'
                            >
                            </motion.div>
                        )}
                    </button>
                </div>
            ))}
        </div>

        {/* content cards ------------------------------------------ */}
        {/* This code filters blog_data to include all blogs if menu is "All" or only those matching the selected category, then maps the filtered array to render a BlogCard for each blog, using its _id as a unique key. */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40'>

            {/* prev we use 'blog_data' that is dummy data, now we use 'filteredBlogs()' to get data from dataset */}
            {filteredBlogs().filter((blog)=>menu==="All" ? true : blog.category===menu).map((blog)=><BlogCard key={blog._id} blog={blog}/>)}
            {/* blog={blog}, from here, left (blog) is prop name you are defining and sending to the child component. 
            Right side (blog) The actual blog object from the array get from 
            map() */}
        </div>

    </div>
  )
}

export default BlogList