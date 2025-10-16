import React from 'react'
import {useNavigate} from 'react-router-dom';


// we create this component as a card to display all content data into 'BlogList.jsx' component
const BlogCard = ({blog}) => {
  
    const {title, description, category, image, _id}=blog; // direct destructure approach: You already have the blog_data array of object.(here blog indicate each object of blog_data array, that have multiple objects{})

    const navigate=useNavigate();
  return (
    // when user click on any content card, they navigate to details view of the card
    <div onClick={()=>navigate(`/blog/${_id}`)} className='w-full rounded-lg overflow-hidden shadow hover:scale-102 hover:shadow-primary/25 duration-500 cursor-pointer'>
        <img src={image} alt="" className='aspect-video'/>
        <span className='ml-5 mt-4 px-3 py-1 inline-block bg-primary/20 rounded-full text-primary text-xs'>{category}</span>
        <div className='p-5'>
            <h5 className='mb-2 font-medium text-gray-900'>{title}</h5>

            {/* we take 80 characters */}
            {/* ""dangerouslySetInnerHTML"" is used to remove the html tags thats are present in paragraph */}
            <p className='mb-3 text-xs text-gray-600' dangerouslySetInnerHTML={{"__html": description.slice(0,80)}}></p> 
        </div>
    </div>
  )
}

export default BlogCard