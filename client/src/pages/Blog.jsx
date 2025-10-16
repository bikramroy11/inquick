import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import {assets, blog_data, comments_data} from '../assets/assets'; //details of each blog(blog_data), and comments(comments_data)
import Moment from 'moment';  //used to format date-time
import {useNavigate} from 'react-router-dom';
import Loader from '../components/Loader';

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import {useAppContext} from '../context/AppContext';
import toast from 'react-hot-toast';

const Blog = () => {

  //{id} approach: You only know the id and must find/load the blog first.
  const {id}=useParams(); //collect item id from parameter for single content

  const {axios} = useAppContext()

  const [data, setData]=useState(null); //content data
  const [comments, setComments]=useState([]); //comments data

  // in comment-form there are two input-field 'name, text-area', so when data filled by onChange we stored by this state-variable
  const [name, setName]=useState(''); //name input-field
  const [content, setContent]=useState('');  //comment text-area input-filed

  // content data fetch
  const fetchBlogData= async()=>{ 
    try {
      const {data}= await axios.get(`/api/blog/${id}`);
      data.success ? setData(data.blog) : toast.error(data.message)
    } catch (error) {
      toast.error(error.message)
    }
  }

  //comment data fetch
  const fetchComments= async()=>{
    try {
      const {data}= await axios.post(`/api/blog/comments`, {blogId:id});
      if(data.success) {
        setComments(data.comments)
      } else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  //function for Add-comment
  const addComment= async(e)=>{
    e.preventDefault();
    try {
      const {data}= await axios.post(`/api/blog/add-comment`, {blog: id, name, content});
      if (data.success){
        toast.success(data.message);
        setName('');
        setContent('');
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    fetchBlogData(); //call blog-fetch function
    fetchComments(); //call comment-fetch function
  },[])
  
  const navigate=useNavigate(); //it used on Author name: Bikram Roy, when it clicked it open a page of my details

  <Navbar/>
  
  //if content found in details that details page show otherwise loding page show
  return data ?  (
    <div className='relative'>
      {/* background set */}
      <img src={assets.gradientBackground} alt="" className='absolute -top-50 -z-1 opacity-50'/> 

      <Navbar/>

      {/* we import blog_data from assets and put it into 'data' set variable and iterate all of its keys */}

      {/* title, sub-title, author name */}
      <div className='text-center mt-20 text-gray-600'>
        <p className='text-primary py-4 font-medium'>Published on {Moment(data.createdAt).format('MMMM Qo YYYY')}</p>
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800'>{data.title}</h1>
        <h2 className='my-5 max-w-lg truncate mx-auto' dangerouslySetInnerHTML={{__html:data.subTitle}}></h2>
        <button onClick={()=>navigate(`/blog/${id}/author`)} className='inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary cursor-pointer'>Bikram Roy</button>
      </div>

      {/* image, description, comments */}
      <div className='mx-5 max-w-5xl md:mx-auto my-10 mt-6'>

        {/* image */}
        <img src={data.image} alt="" className='rounded-3xl mb-5'/>

        {/* description */}
        <div className='rich-text max-w-3xl mx-auto' dangerouslySetInnerHTML={{__html:data.description}}></div> {/* className='rich-text' is defined into index.css file */}

        {/* comments */}
        <div className='mt-14 mb-10 max-w-3xl mx-auto'> 
          <p className='font-semibold mb-4'>Comments ({comments.length})</p> {/* no. of comments */}

          <div className='flex flex-col gap-4'>
            {comments.map((item, index)=>(
              <div key={index} className='relative bg-primary/2 border border-primary/5 max-w-xl p-4 rounded text-gray-600'>
                <div className='flex items-center gap-2 mb-2'>
                  <img src={assets.user_icon} alt="" className='w-6'/>
                  <p className='font-medium'>{item.name}</p>
                </div>
                  <p className='text-sm max-w-md ml-8'>{item.content}</p>
                  <div className='absolute right-4 bottom-3 flex items-center gap-2 text-xs'>{Moment(item.createdAt).fromNow()}</div> {/* fromNow() record dates from current date  i.e. '1 day ago' or '2 months ago' */}
              </div>
            ))}
          </div>
        </div>

        {/* add comment section */}
        <div className='max-w-3xl mx-auto'>
            <p className='font-semibold mb-4'>Add your comment</p>
            <form onSubmit={addComment} className='flex flex-col items-start gap-4 max-w-lg'>
              <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder='Name' required className='w-full p-2 border border-gray-300 rounded outline-none'/>

              <textarea onChange={(e)=>setContent(e.target.value)} value={content}  placeholder='Comment' required className='w-full p-2 border border-gray-300 rounded outline-none h-48'></textarea>

              <button type='submit' className='bg-primary text-white rounded p-2 px-8 hover:scale-105 transition-all cursor-pointer'>Submit</button>
            </form>
        </div>

        {/* social media icon */}
        <div className='my-24 max-w-3xl mx-auto'>
          <p className='font-semibold my-4'>Share this article on social media</p>
          <div className='flex'>
            <img src={assets.facebook_icon} width={50} alt="" />
            <img src={assets.twitter_icon} width={50} alt="" />
            <img src={assets.googleplus_icon} width={50} alt="" />
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  ) 
  :
    // if id not found or wrong then go to loader page
    <Loader/>

}

export default Blog