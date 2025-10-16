# inQuick - Stay Relevant

--------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------
# number 1                                   ## Frontend

1.  under root(project) folder
    npm create vite@latest
    cd client
    npm i
    npm run dev

2.  inquick/client/src
    clear App.jsx, index.css, and other css files

3.  /client/src/index.css
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
    \*{
    font-family: "Outfit", sans-serif;
    }
    ::-webkit-scrollbar{ //hidden the scroll bar
    display: none;
    }
    @theme{ //primary color
    --color-primary: #5044E5;
    }

        // some designed css, we just need to give a class-name: rich-text
        .rich-text { font-size: 15px;  }
        .rich-text p { margin-bottom: 16px; color: #292929; }
        .rich-text h1 { font-size: 36px; font-weight: 700; color: #252525 !important; margin: 32px 0; }
        .rich-text h2 { font-size: 22px; font-weight: 700; color: #252525 !important; margin: 24px 0; }
        .rich-text h3 { font-size: 18px; font-weight: 600; color: #333333 !important; margin: 20px 0; }
        .rich-text h4 { font-size: 16px; font-weight: 500; color: #444444 !important; margin: 16px 0; }
        .rich-text h5 { font-size: 14px; font-weight: 400; color: #555555 !important; margin: 12px 0; }
        .rich-text h6 { font-size: 12px; font-weight: 400; color: #666666 !important; margin: 8px 0; }
        .rich-text strong { font-weight: 700; }
        .rich-text ol { margin-left: 30px; list-style-type: decimal; }
        .rich-text ul { margin-left: 30px; list-style-type: disc; }
        .rich-text li { margin-bottom: 8px; }
        .rich-text a { color: #007AFF }

4.  in client/ terminal
    npm install tailwindcss @tailwindcss/vite

5.  /client/vite.config.js
    import tailwindcss from '@tailwindcss/vite'
    export default defineConfig({
    plugins: [react(), tailwindcss(),],
    })

    /client/src/index.css
    @import "tailwindcss";

6.  in client/ terminal
    npm i react-router-dom //for navigate user from one page to another

7.  client/src/main.jsx
    import { createRoot } from 'react-dom/client'
    import './index.css'
    import App from './App.jsx'

        import {BrowserRouter} from 'react-router-dom'; //import BrowserRouter

        createRoot(document.getElementById('root')).render(
        <BrowserRouter> //set BrowserRouter
            <App />
        </BrowserRouter>
        )

8.  ## Setup assets.js file (to easily access pre-defined data) (unless Database not created)

    under client/src/Assets, there are all required images are stored, we import those images into assets.js file
    and also defined the required data into this file

        client/src/Assets/assets.js
        import blog_pic_1 from './blog_pic_1.png';
        import blog_pic_2 from './blog_pic_2.png';
        export const assets = { //all images
        blog_pic_1,
        blog_pic_2
        }

        export const blogCategories = ['All', 'Tech Updates', 'Academic Concepts', 'Tech Tutorials', 'Roadmaps & Guidance']  // all content category

        export const blog_data = [  // each content details
            {
                "_id": "6805ee7dd8f584af5da78d37",
                "title": "A detailed step by step guide to manage your lifestyle",
                "description": "<h1>A Simple Step-by-Step Guide to Managing Your Lifestyle</h1><p>If you're looking to improve your health, With steady effort, a well-managed life becomes a natural way of living.</p>",
                "category": "Tech Updates",
                "image": blog_pic_1,
                "createdAt": "2025-04-21T07:06:37.508Z",
                "updatedAt": "2025-04-24T08:26:29.750Z",
                "__v": 0,
                "isPublished": true,
                "subTitle": "A Simple Step-by-Step Guide to Managing Your Lifestyle"
            },
            .
            .
            .
        ]

        export const comments_data = [  // all comments
            {
                "_id": "6811ed9e7836a82ba747cb25",
                "blog": blog_data[0],
                "name": "Michael Scott",
                "content": "This is my new comment",
                "isApproved": false,
                "createdAt": "2025-04-30T09:30:06.918Z",
                "updatedAt": "2025-04-30T09:30:06.918Z",
                "__v": 0
            },
            .
            .
            .
        ]

        export const dashboard_data = {
            "blogs": 10,
            "comments": 5,
            "drafts": 0,
            "recentBlogs": blog_data.slice(0, 5),
        }

        export const footer_data = [  // footer data
            {
                title: "Quick Links",
                links: ["Home", "Best Sellers", "Offers & Deals", "Contact Us", "FAQs"]
            },
            .
            .
            .
        ]

9.  under client/src we create two folder 'components' and 'pages'
    client/src/ components
    client/src/ components
    |- Navbar.jsx
    |- Header.jsx

            client/src/  pages
                            |- Home.jsx
                            |- Blog.jsx

10. client/src/App.jsx
    import { useState } from "react";
    import { Routes, Route } from "react-router-dom";

        import Home from './pages/Home';
        import Blog from './pages/Blog';
        import Author from './pages/Author';

        import Navbar from './components/Navbar'
        import Footer from './components/Footer'

        function App() {
        return (
            <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog/:id" element={<Blog />} />
                <Route path="/blog/:id/author" element={<Author />} />
            </Routes>
            <Footer/>
            </>
        );
        }
        export default App;

# Home Page ----------

---

---

pages- Home.jsx
components- Navbar.jsx, Header.jsx, BlogList.jsx, BlogCard.jsx, Newsletter.jsx, Footer.jsx,

## navbar

10. client/src/pages/Home.ejs
    import React from 'react'
    import Navbar from '../components/Navbar'
    const Home = () => {
    return (
    <>
    <Navbar/>
    </>
    )
    }
    export default Home

11. client/src/components/ Navbar.jsx
    import React from 'react'
    import {assets} from '../assets/assets';
    import {useNavigate} from 'react-router-dom';

        const Navbar = () => {
        //for click feature in logo and login button
        const navigate = useNavigate();

        return (
            <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 cursor-pointer '>

                {/* logo */}
                <img onClick={()=> navigate("/")} src={assets.inQuick} alt="logo" className='w-32 sm:w-44'/>

                {/* Admin Login */}
                <button onClick={()=> navigate("/admin")} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'>
                    Author Login
                    <img src={assets.arrow} alt="arrow"  className='w-3'/>
                </button>
            </div>
        )
        }
        export default Navbar

---

## Hero section

12. client/src/pages/Home.ejs (updated)
    import React from 'react'
    import Header from '../components/Header'
    const Home = () => {
    return (
    <>
    <Header/>
    </>
    )
    }
    export default Home

13. client/src/components/ Header.jsx
    import React from 'react'
    import {assets} from '../assets/assets';

        const Header = () => {
        return (
            <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
                <div className='text-center mt-20 mb-8'>

                    {/* ai feature ad */}
                    <div className='inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary'>
                        <p>New AI-generated content is live now</p>
                        <img src={assets.star_icon} alt="" className='w-2.5'/>
                    </div>

                    {/* welcome message- tagline */}
                    <h1 className='text-4xl sm:text-6xl font-semibold sm:leading-16 text-gray-700 mt-4'>
                        Tech moves fast, <br />
                        stay relevant with <span className='text-primary text-5xl sm:text-7xl'>inQuick.</span>
                    </h1>

                    {/* description */}
                    <p className='my-6 sm:my-8 max-w-4xl m-auto text-lg  text-gray-500 '>
                        <span className='hidden sm:block'>This is your space to catch up, to explore what’s new, and to stay sharp in a world where tech never slows down.</span>
                        <span className='my-6 sm:my-8 max-w-2xl m-auto text-lg text-gray-700'> Whether it’s a quick update or a deep dive, <span className='text-primary text-xl'>inQuick</span> keeps you connected, informed, and always relevant.</span>
                    </p>

                    {/* search bar */}
                    <form className='flex justify-between my-12 max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden'>
                        <input type="text" placeholder='Search for Content' required className='w-full pl-4 outline-none'/>
                        <button className='bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer' type='submit'>Search</button>
                    </form>

                </div>

                {/* background gradient image */}
                <img src={assets.gradientBackground} alt="" className='absolute -top-50 -z-1 opacity-50'/>
            </div>
        )
        }
        export default Header

---

## content section

14. client/src/pages/Home.ejs (updated)
    import React from 'react'
    import Header from '../components/Header'
    import BlogList from '../components/BlogList'
    const Home = () => {
    return (
    <>
    <Header/>
    <BlogList />
    </>
    )
    }
    export default Home

### note- npm i motion (for animation)

15. client/src/component/ BlogCard.jsx (it is used as a component that will placed into BlogList)
    import React from 'react'
    import {useNavigate} from 'react-router-dom';

        // we create this component as a card to display all content data into 'BlogList.jsx' component
        const BlogCard = ({blog}) => {
            const {title, description, category, image, _id}=blog;
            const navigate=useNavigate();

        return (
            // when user click on content card, they navigate to details view of the crad
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

16. client/src/components/ BlogList.jsx

        import React, {useState} from 'react'
        import { motion } from "motion/react" //npm package
        import {blogCategories, blog_data} from '../assets/assets'; //blogCategories- have all of 4category of content and blog_data - have details blog
        import BlogCard from './BlogCard'; //import BlogCard component

        const BlogList = () => {
            // state for active item from menu
            const [menu, setMenu]=useState("All");

        return (
            <div>

                {/* content menu --------------------------------------------- */}
                <div className='flex flex-wrap md:flex-nowrap justify-center gap-x-8 gap-y-3  sm:gap-12 my-10 relative'>
                    {/* by using map() we iterate all-over the array and item argument store each iterated element and setMenu re-render the clicked menu */}
                    {blogCategories.map((item)=>(
                        <div key={item} className='relative'>
                            <button onClick={()=> setMenu(item)} className={` cursor-pointer text-gray-600 ${menu===item && 'text-white px-4 pt-1'}`}>
                                {item}

                                {/* when select a menu then bg change */}
                                {menu===item && (
                                    <motion.div layoutId='underline' transition={{type: 'spring', stiffness: 500, damping: 30}} className='absolute left-0 right-0 top-0 h-7.5 -z-1 bg-primary rounded-full'></motion.div>
                                )}

                            </button>
                        </div>
                    ))}
                </div>

                {/* content cards ------------------------------------------ */}
                {/* This code filters blog_data to include all blogs if menu is "All" or only those matching the selected category, then maps the filtered array to render a BlogCard for each blog, using its _id as a unique key. */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40'>
                    {blog_data.filter((blog)=>menu==="All" ? true : blog.category===menu).map((blog)=><BlogCard key={blog._id} blog={blog}/>)}
                </div>

            </div>
        )
        }
        export default BlogList

---

## news subscription section & footer section

17. client/src/pages/Home.ejs (updated)
    import React from 'react'
    import Header from '../components/Header'
    import BlogList from '../components/BlogList'
    import Newsletter from '../components/Newsletter'
    const Home = () => {
    return (
    <>
    <Header/>
    <BlogList />
    <Newsletter />
    </>
    )
    }
    export default Home

18. client/src/components/ Newsletter.jsx (for subscription)
    import React from 'react'
    const Newsletter = () => {
    return (
    <div className='flex flex-col items-center justify-center text-center space-y-2 my-32'>
    <h1 className='md:text-4xl text-2xl font-semibold'>Never Miss a Content!</h1>
    <p className='md:text-lg mt-3 text-gray-500/70 pb-8'>Subscribe to get the latest tech updates, new tutorials, and exclusive news.</p>
    <form className='flex items-center justify-between max-w-2xl w-full md:h-13 h-12'>
    <input className='border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500' type="text"  placeholder='Enter your Email Id for updates'/>
    <button type='submit' className='md:px-12 px-8 h-full text-white bg-primary/80 hover:bg-primary transition-all cursor-pointer rounded-md rounded-l-none'>Subscribe</button>
    </form>
    </div>
    )
    }
    export default Newsletter

19. client/src/components/ Footer.jsx
    import React from "react";
    import {assets, footer_data} from "../assets/assets";
    import {useNavigate} from 'react-router-dom';

        const Footer = () => {
            const navigate = useNavigate();
        return (
            <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/300 text-gray-500">

                {/* Logo & Description */}
                <div className="">
                    <img onClick={()=> navigate("/")} src={assets.inQuick} alt="logo" className='w-32 sm:w-44'/>
                <p className="max-w-[700px] mt-6">
                        inQuick is your go-to platform for staying ahead in the fast-paced world of technology. We bring you the latest tech updates, insightful guides, and practical knowledge—from web development and AI to cybersecurity and data science—so you can learn, grow, and stay relevant in an ever-evolving digital landscape.
                </p>
                </div>

                {/* Quick links */}
                <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                {footer_data.map((section, index)=>(
                    <div key={index}>
                        <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">{section.title}</h3>
                        <ul className="text-sm space-y-1">
                            {section.links.map((link, i)=>(
                                <li key={i}>
                                    <a href="#" className="hover:underline transition">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                </div>
            </div>

            <div className="py-4 text-center text-sm md:text-base text-gray-500/80">
                Copyright 2025 © inQuick. By Bikram Roy – All Rights Reserved.
            </div>
            </div>
        );
        };
        export default Footer;

# Blog Page ----------

---

pages- Blog.jsx
components- Loader.jsx

### npm i moment --(for convert standard time span into a user-frinedly time-date format)

20. client/src/pages/Blog.ejs (we implemet in page directly and just for loding part use a component)
    import React, {useState, useEffect} from 'react'
    import {useParams} from 'react-router-dom';
    import {assets, blog_data, comments_data} from '../assets/assets'; //details of each blog(blog_data), and comments(comments_data)
    import Moment from 'moment'; //used to format date-time
    import {useNavigate} from 'react-router-dom';
    import Loader from '../components/Loader';

        const Blog = () => {
        //{id} approach: You only know the id and must find/load the blog first.
        const {id}=useParams(); //collect item id from parameter for single content
        const [data, setData]=useState(null); //content data
        const [comments, setComments]=useState([]); //comments data

        // in comment-form there are two input-field 'name, text-area', so when data filled by onChange we stored by this state-variable
        const [name, setName]=useState(''); //name input-field
        const [content, setContent]=useState('');  //comment text-area input-filed


        // content data fetch
        const fetchBlogData= async()=>{
            const data = blog_data.find((item)=>(item._id===id)); //blog_data -is array from '../assets/assets' where each content store
            setData(data);
        }

        //comment data fetch
        const fetchComments= async()=>{
            setComments(comments_data);
        }

        //function for Add-comment
        const addComment= async(e)=>{
            e.preventDefault();
        }

        useEffect(()=>{
            fetchBlogData(); //call blog-fetch function
            fetchComments(); //call comment-fetch function
        },[])

        const navigate=useNavigate(); //it used on Author name: Bikram Roy, when it clicked it open a page of my details

        //if content found in details that details page show otherwise loding page show
        return data ?  (
            <div className='relative'>

            {/* background set */}
            <img src={assets.gradientBackground} alt="" className='absolute -top-50 -z-1 opacity-50'/>

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
                    <form onSubmit={()=> addComment(

                    )} className='flex flex-col items-start gap-4 max-w-lg'>
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
            </div>
        )
        :
            // if id not found or wrong then go to loader page
            <div>
            <Loader/>
            </div>
        }
        export default Blog

21. client/src/components/ Loader.jsx (page load then not-found if wrong id)
    import React, { useState, useEffect } from 'react';

        const Loader = () => {
        const [showError, setShowError] = useState(false);

        useEffect(() => {
            //initially useState(false) so, it show: Loading
            // then useState(true) so, it show: Page not found
            const timer = setTimeout(() => {
            setShowError(true);
            }, 3000);
            return () => clearTimeout(timer); // cleanup timer
        }, []);

        return (
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
        );
        };
        export default Loader;

22. client/src/pages/Author.ejs (when click on the "Author name" of the details of content)

        import React from 'react';

        const Author = () => {
        return (
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
        );
        };

export default Author;

# admin dashboard section -------------------------------------------------------------------------------------------------------

---

22. under client/src/pages we create a folder 'admin' where a admin-related pages will be stored
    under client/src/pages/admin -we create multiple pages
    i. client/src/pages/admin/ layout.jsx (where we a left-side bar that used to navigate all 4-admin pages)
    ii. client/src/pages/admin/ Dashboard.jsx (dashboard page)
    iii. client/src/pages/admin/ ListBlog.jsx (all blogs are show here)
    iv. client/src/pages/admin/ AddBlog.jsx (to ad a new blog)
    v. client/src/pages/admin/ Comment.jsx (to control user comment)

23. under client/src/components we create a folder 'admin' where a admin-related components will be stored
    under client/src/components/admin -we create multiple components
    i. client/src/components/admin

24. client/src/App.jsx
    import { useState } from "react";
    import { Routes, Route } from "react-router-dom";

        import Home from './pages/Home';
        import Blog from './pages/Blog';
        import Author from './pages/Author';
        import Layout from './pages/admin/Layout';
        import AddBlog from './pages/admin/AddBlog';
        import Comments from './pages/admin/Comments';
        import Dashboard from './pages/admin/Dashboard';
        import ListBlog from './pages/admin/ListBlog';

        function App() {
        return (
            <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog/:id" element={<Blog />} />
                <Route path="/blog/:id/author" element={<Author />} />

                {/* route setup for admin- with parent-child path*/}
                {/* when we go to the '/admin' path the 'Layout' page will be display first */}

                <Route path="/admin" element={<Layout/>}> {/* parent path */}

                    {/* child paths */}
                    <Route index element={<Dashboard/>}/> {/* this is index path so when
                    /admin open, with "Layout" this child pages also show */}
                    <Route path="AddBlog" element={<AddBlog/>}/> {/* '/admin/AddBlog'  */}
                    <Route path="ListBlog" element={<ListBlog/>}/>
                    <Route path="Comments" element={<Comments/>}/>
                </Route>

            </Routes>
            </>
        );
        }
        export default App;

25. client/src/components/admin /Sidebar.jsx (for the Sidebar of Layout page)
    import React from 'react'
    import {NavLink} from 'react-router-dom'
    import {assets} from "../../assets/assets";

        const Sidebar = () => {
            return (
                <div className='flex flex-col border-r border-gray-200 min-h-full pt-6'>

                <NavLink end={true} to='/admin' className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer
                ${isActive && "bg-primary/10 border-r-4 border-primary"}`}>
                    {/* here we create the Menu/sidebar of admin panel */}
                    <img src={assets.home_icon} alt="" className='min-w-4 w-5'/>
                    <p className='hidden md:inline-block'>Dashboard</p>
                </NavLink>
                {/* Notes: i. end={true} → Ensures this link is only active exactly at /admin so, Without end- any path (like: /admin/Comments) also count as active.
                ii. isActive is by default by React Router’s <NavLink>
                iii. here '/admin' directed to 'dashboard' due to in App.js */}

                <NavLink to='/admin/AddBlog' className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer
                ${isActive && "bg-primary/10 border-r-4 border-primary"}`}>
                    {/* here we create the Menu/sidebar of admin panel */}
                    <img src={assets.add_icon} alt="" className='min-w-4 w-5'/>
                    <p className='hidden md:inline-block'>Add Content</p>
                </NavLink>

                <NavLink to='/admin/ListBlog' className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer
                ${isActive && "bg-primary/10 border-r-4 border-primary"}`}>
                    {/* here we create the Menu/sidebar of admin panel */}
                    <img src={assets.list_icon} alt="" className='min-w-4 w-5'/>
                    <p className='hidden md:inline-block'>Manage Content</p>
                </NavLink>

                <NavLink to='/admin/Comments' className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer
                ${isActive && "bg-primary/10 border-r-4 border-primary"}`}>
                    {/* here we create the Menu/sidebar of admin panel */}
                    <img src={assets.comment_icon} alt="" className='min-w-4 w-5'/>
                    <p className='hidden md:inline-block'>Manage Comments</p>
                </NavLink>

                </div>
            )
        }
        export default Sidebar

26. client/src/pages/admin/ Layout.jsx  (sidebar)

        // sidebar
        import React from 'react'
        import Navbar from '../../components/Navbar';
        import Footer from '../../components/Footer';
        import {assets} from '../../assets/assets';
        import {useNavigate, Outlet} from 'react-router-dom';

        import Sidebar from '../../components/admin/Sidebar';

        const Layout = () => {
            const Navigate=useNavigate();
            const logout=()=>{
                Navigate('/');
            }

            return (
                <>

                {/* navbar for admin */}
                <div  className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32'>
                    <img src={assets.inQuick} alt="" className='w-32 sm:w-40 cursor-pointer'
                    onClick={()=>Navigate('/')} />
                    <button onClick={logout} className='text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer'>Logout</button>
                </div>
                <div className='border-b-2 border-gray-300/70'></div>

                {/* side manu with its options and show pages */}
                <div className='flex h-[calc(100vh-70px)]'> {/* here 'flex' used to make sidebar-option with option-panel side-by-side */}
                    <Sidebar />
                    <Outlet />  {/* it by default added the index child '/Dashboard' & for other i.e. '/admin/Comments' */}
                    {/* The Outlet component used with React Router to render child routes within a parent route, here parent is '/admin'-Layout and child are
                    '/AddBlog', '/Comments', '/ListBlog', '/Dashboard' */}

                </div>

                </>
            )
        }
        export default Layout

---

### login

27. client/src/App.jsx
    import { useState } from "react";
    import { Routes, Route } from "react-router-dom";

        import Home from './pages/Home';
        import Blog from './pages/Blog';
        import Author from './pages/Author';
        import Layout from './pages/admin/Layout';
        import AddBlog from './pages/admin/AddBlog';
        import Comments from './pages/admin/Comments';
        import Dashboard from './pages/admin/Dashboard';
        import ListBlog from './pages/admin/ListBlog';
        import Login from './components/admin/Login'

        function App() {
            return (
                <>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog/:id" element={<Blog />} />
                    <Route path="/blog/:id/author" element={<Author />} />

                    {/* route setup for admin- with parent-child path*/}
                    {/* when we go to the '/admin' path the 'Layout' page will be display first */}
                    <Route path="/admin" element={true ? <Layout/> : <Login/>}> {/* parent path */} {/*if true, then go-to <Layout/> page otherwise <Login/> */}
                    {/* child paths */}
                    <Route index element={<Dashboard/>}/> {/* this is index path so when
                    /admin open, with "Layout" this child pages also show */}
                    <Route path="AddBlog" element={<AddBlog/>}/> {/* '/admin/AddBlog'  */}
                    <Route path="ListBlog" element={<ListBlog/>}/>
                    <Route path="Comments" element={<Comments/>}/>
                    </Route>

                </Routes>
                </>
            );
        }
        export default App;

28. client/src/components/admin /Login.jsx (for the login)
    import React, {useState} from 'react'

        const Login = () => {
            // state variable to store the Data
            const [email, setEmail]=useState('');
            const [password, setPassword]=useState('');

            const handleSubmit= async(e)=>{
                e.preventDefault();
            }

            return (
                <div className='flex items-center justify-center h-screen'>
                <div className='w-full max-w-sm p-6 max-md:m-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg'>
                    <div className='flex flex-col items-center justify-center'>

                    {/* title & desc */}
                    <div className='w-full py-6 text-center'>
                        <h1 className='text-3xl font-bold'> <span className='text-primary'>Admin</span> Login</h1>
                        <p className='font-light'>Enter your credentials to access the admin panel</p>
                    </div>

                    {/* login form */}
                    <form onSubmit={handleSubmit} className='mt-6 w-full sm:max-w-md text-gray-600'>
                        <div className='flex flex-col'>
                        <label>Email</label>
                        <input
                            onChange={(e)=> setEmail(e.target.value)} value={email}
                            type="email" required placeholder='Your email id'
                            className='border-b-2 border-gray-300 p-2 outline-none mb-6'
                        />
                        </div>

                        <div className='flex flex-col'>
                        <label>Password</label>
                        <input
                            onChange={(e)=> setPassword(e.target.value)} value={password}
                            type="password" required placeholder='Yourpassword'
                            className='border-b-2 border-gray-300 p-2 outline-none mb-6'
                        />
                        </div>

                        <button type='submit' className='w-full py-3 font-medium bg-primary text-white rounded cursor-pointer hover:bg-primary/90 transition-all'>Login</button>
                    </form>

                    </div>
                </div>
                </div>
            )
        }
        export default Login

---

### admin Dashboard, ListBlog page

29. client/src/components/admin/ BlogTableItem.jsx (common table template used in all 4pages)
    import React from 'react'
    import {assets} from '../../assets/assets'; 

        const BlogTableItem = ({blog, fetchBlogs, index}) => {
                const {title, createdAt}= blog;
                const BlogDate= new Date(createdAt);

            return (
                <>
                <tr className='border border-gray-300'>
                    <th className='px-2 py-4'>{index}</th>
                    <td className='px-2 py-4'>{title}</td>
                    <td className='px-2 py-4 max-sm:hidden'>{BlogDate.toDateString()}</td>
                    <td className='px-2 py-4 max-sm:hidden'>
                        <p className={`${blog.isPublished ? "text-green-600" : "text-orange-700"}`}>{blog.isPublished ? 'Published' : 'Unpublished'}</p>
                    </td>
                    <td className='flex px-2 py-4 text-xs gap-3'>
                        {/* option to switch between publish and unpublish */}
                        <button className='border px-2 py-0.5 mt-1 rounded cursor-pointer'>{blog.isPublished ? 'Unpublish' : 'Publish'}</button>

                        <img src={assets.cross_icon} alt="" className='w-8 hover:scale-110 transition-all cursor-pointer'/>  {/* to delete */}
                    </td>
                </tr>
                </>
            )
        }

        export default BlogTableItem

30. client/src/pages/admin/ Dashboard.jsx
    import React, {useState, useEffect} from 'react'
    import {assets, dashboard_data} from '../../assets/assets';
    import BlogTableItem from '../../components/admin/BlogTableItem';

        const Dashboard = () => {

            // due to no Database, we manually set the values of dashboard now for temporarally
            const [dashboardData, setDashboardData]=useState({
                blogs:0,
                comments:0,
                drafts:0,
                recentBlogs:[],
            })

            //fetch dashboard data
            const fetchDashboard= async()=>{
                setDashboardData(dashboard_data); //dashboard_data hold all manual temprral data, from assets file
            }

            // useEffect work when the state variable loaded each time (if no condition implied. When you need to set state based on some external data (API, local data, async fetch) → put it inside useEffect. )
            useEffect(()=>{ //call fetchDashboard() each time state variable update
                fetchDashboard();
            },[])


            return (
                <>

                <div className='flex-1 p-4 md:p-10 bg-blue-50/50'>

                    {/* overall summary */}
                    <div className='flex flex-wrap gap-4'>
                    <div  className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow hover:scale-105 duration-300 transition-all'>
                        <img src={assets.dashboard_icon_1} alt="" />
                        <div>
                        <p className='text-xl font-semibold text-gray-600'>{dashboardData.blogs}</p>
                        <p className='text-gray-400 font-light'>Contents</p>
                        </div>
                    </div>

                    <div  className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow hover:scale-105 duration-300 transition-all'>
                        <img src={assets.dashboard_icon_2} alt="" />
                        <div>
                        <p className='text-xl font-semibold text-gray-600'>{dashboardData.comments}</p>
                        <p className='text-gray-400 font-light'>Comments</p>
                        </div>
                    </div>

                    <div  className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow hover:scale-105 duration-300 transition-all'>
                        <img src={assets.dashboard_icon_3} alt="" />
                        <div>
                        <p className='text-xl font-semibold text-gray-600'>{dashboardData.drafts}</p>
                        <p className='text-gray-400 font-light'>Drafts</p>
                        </div>
                    </div>
                    </div>

                    {/* latest contents */}
                    <div>
                    <div className='flex items-center gap-3 m-4 text-gray-600'>
                        <img src={assets.dashboard_icon_4} alt="" />
                        <p>Latest Blogs</p>
                    </div>
                    <div className='relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
                        <table className='w-full text-sm text-gray-500'>
                        <thead className='text-xs text-gray-600 text-left uppercase'>
                            <tr>
                            <th scope='col' className='px-2 py-4 xl:px-6'>#</th>
                            <th scope='col' className='px-2 py-4'>Title</th>
                            <th scope='col' className='px-2 py-4 max-sm:hidden'>Date</th>
                            <th scope='col' className='px-2 py-4 max-sm:hidden'>Status</th>
                            <th scope='col' className='px-2 py-4'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dashboardData.recentBlogs.map((blog, index)=>{
                            return <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchDashboard} index={index+1}/>
                            })}
                            {/* blog={blog} Passes the entire blog object to BlogTableItem, so it can display the title, date, status, etc */}
                            {/* fetchBlogs={fetchDashboard}Passes the dashboard fetching function so BlogTableItem can refresh the dashboard if a blog is updated/deleted. */}
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>

                </>
            )
        }
        export default Dashboard

31. client/src/pages/admin/ ListBlog.jsx

### we re-use client/src/components/admin/ BlogTableItem.jsx

        import React, {useState, useEffect} from 'react'
        import {blog_data} from '../../assets/assets';
        import BlogTableItem from '../../components/admin/BlogTableItem';


        const ListBlog = () => {
            const [blogs, setBlogs]= useState([]);

            const fetchBlogs= async()=>{
                setBlogs(blog_data);
            }
            useEffect(()=>{
                fetchBlogs(); //call it
            },[])

            return (
                <>
                <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50'>
                    <h1>All Contents</h1>
                    <div className='relative mt-4 h-4/5 max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
                    <table className='w-full text-sm text-gray-500'>
                        <thead className='text-xs text-gray-600 text-left uppercase'>
                        <tr>
                            <th scope='col' className='px-2 py-4 xl:px-6'>#</th>
                            <th scope='col' className='px-2 py-4'>Title</th>
                            <th scope='col' className='px-2 py-4 max-sm:hidden'>Date</th>
                            <th scope='col' className='px-2 py-4 max-sm:hidden'>Status</th>
                            <th scope='col' className='px-2 py-4'>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {blogs.map((blog, index)=>{
                            return <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchBlogs} index={index+1}/>
                        })}
                        {/* blogs.map(), here blogs is blogs-state variable */}
                        </tbody>
                    </table>
                    </div>
                </div>
                </>
            )
        }
        export default ListBlog

---

### admin comment section

32. client/src/components/admin/ CommentTableItem.jsx

        import React from 'react'
        import {assets} from '../../assets/assets';

        const CommentTableItem = ({comment, fetchComments}) => {
                const{blog, createdAt, _id}= comment;
                const BlogDate= new Date(createdAt);

            return (
                <>
                <tr className='border-y border-gray-300'>
                    <td className='px-6 py-4'>
                        <b className='font-medium text-gray-600'>Content</b> : {blog.title}
                        <br />
                        <br />
                        <b className='font-medium text-gray-600'>Name</b> : {comment.name}
                        <br />
                        <br />
                        <b className='font-medium text-gray-600'>Comment</b> : {comment.content}
                    </td>
                    <td className='px-6 py-4 max-sm:hidden'>
                        {BlogDate.toLocaleDateString()}
                    </td>
                    <td className='px-6 py-4'>
                        <div className='inline-flex items-center gap-4'>
                            {!comment.isApproved
                            ? <img src={assets.tick_icon} alt="" className='w-5 hover:scale-110 duration-300 transition-all cursor-pointer'/>
                            : <p className='text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1'>Approved</p> }
                            <img src={assets.bin_icon} alt="" className='w-5 hover:scale-110 duration-300 transition-all cursor-pointer'/>
                        </div>
                    </td>
                </tr>
                </>
            )
        }

        export default CommentTableItem

33. client/src/pages/admin/ Comments.jsx
    import React, {useState, useEffect} from 'react'
    import {blog_data, comments_data} from '../../assets/assets';
    import CommentTableItem from '../../components/admin/CommentTableItem';

        const Comments = () => {
            const [comments, setComments]=useState([]);
            const [filter, setFilter]=useState('Not Approved');

            const fetchComments= async()=>{
                setComments(comments_data);
            }
            useEffect(()=>{
                fetchComments();
            },[])

            return (
                <>
                <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50'>
                    <div className='flex justify-between items-center max-w-3xl'>
                    <h1>Comments</h1>
                    <div className='flex gap-4'>
                        <button onClick={()=>setFilter('Approved')} className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-xs  ${filter==='Approved' ? 'text-white bg-primary' : 'text-gray-700'}`}>Approved</button>

                        <button onClick={()=>setFilter('Not Approved')} className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-xs  ${filter==='Not Approved' ? 'text-white bg-black' : 'text-gray-700'}`}>Not Approved</button>
                    </div>
                    </div>

                    <div className='relative h-4/5 max-w-3xl overflow-x-auto mt-4 bg-white shadow rounded-lg scrollbar-hide'>
                    <table className='w-full text-sm text-gray-500'>
                    <thead className='text-xs text-gray-700 text-left uppercase'>
                        <tr>
                        <th scope='col' className='px-6 py-3'>Content Title & Comment</th>
                        <th scope='col' className='px-6 py-3 max-sm:hidden'>Date</th>
                        <th scope='col' className='px-6 py-3'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comments.filter((comment)=>{
                        if(filter === "Approved") return comment.isApproved === true;
                        return comment.isApproved === false;
                        }).map((comment, index)=><CommentTableItem key={comment._id} comment={comment} index={index+1} fetchComments={fetchComments}  /> )}
                    </tbody>
                    </table>
                    </div>
                </div>
                </>
            )
        }

        export default Comments

---

### admin add Blog section

#### npm i quill, package need to Ms-word like text writing template

34. client/src/ App.jsx
    Add this line: import 'quill/dist/quill.snow.css'

35. client/src/pages/admin/ AddBlog.jsx
    import React, {useState, useEffect, useRef} from 'react'
    import {assets, blogCategories} from '../../assets/assets';
    import CommentTableItem from '../../components/admin/CommentTableItem';
    import Quill from 'quill';

        const AddBlog = () => {
            const editorRef=useRef(null);
            const quillRef=useRef(null);

            const [image, setImage]=useState(false);
            const [title, setTitle]=useState('');
            const [subTitle, setSubTitle]=useState('');
            const [category, setCategory]=useState('Tech Updates');
            const [isPublished, setIsPublished]=useState(false);

            const onSubmitHandler= async(e)=>{
                e.preventDefault();
            }

            const generateContent= async()=>{

            }

            useEffect(()=>{
                //initiate quill only once
                if(!quillRef.current && editorRef.current){
                quillRef.current= new Quill(editorRef.current, {theme: 'snow'})
                }
            },[])


            return (
                <>
                <form onSubmit={onSubmitHandler} className='flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll'>
                    <div className='bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded'>
                    <p>Upload thumbnail</p>
                    <label htmlFor="image">
                        <img src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" className='mt-2 h-16 rounded cursor-pointer' />
                        <input onChange={(e)=> setImage(e.target.files[0])} type="file" id='image' hidden required/>
                        {/* URL.createObjectURL(image) is a JavaScript method used to create a temporary URL that points to a file */}
                    </label>

                    <p className='mt-4'>Content Title</p>
                    <input onChange={(e=>setTitle(e.target.value))} value={title} type="text" placeholder='Type here' required className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded'/>

                    <p className='mt-4'>Content Sub-title</p>
                    <input onChange={(e=>setSubTitle(e.target.value))} value={subTitle} type="text" placeholder='Type here' required className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded'/>

                    <p className='mt-4'>Content Description</p>
                    <div className='max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative'>
                        <div ref={editorRef}></div> {/* Quill */}
                        <button onClick={generateContent} type='button' className='absolute bottom-1 right-2 ml-2 text-xs text-white bg-black/70 px-4 py-1.5 rounded hover:underline cursor-pointer'>Generate With AI</button>
                    </div>
                    {/* npm i quill, check documentation for boilerplate code */}

                    <p className='mt-4'>Content Category</p>
                    <select onChange={(e)=> setCategory(e.target.value)} name="category" className='mt-2 px-3 py-2 border text-gray-500 border-gray-300 outline-none rounded'>
                        <option value="">Select Category</option>
                        {blogCategories.map((item, index)=>{
                        return <option key={index} value={item}>{item}</option>
                        })}
                    </select>

                    <div className='flex gap-2 mt-4'>
                        <p>Publish Now</p>
                        <input onChange={(e)=> setIsPublished(e.target.checked)} type="checkbox" checked={isPublished} className='scale-125 cursor-pointer'/>
                    </div>

                    <button type='submit' className='mt-8 w-40 h-10 bg-primary text-white rounded cursor-pointer text-sm'>Add Content</button>

                    </div>
                </form>
                </>
            )
        }
        export default AddBlog






--------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------

# number 2                                  ## Backend


#### under main project we create a folder 'server' for our Backend task, and create a file under '/server' -> server.js

1. basic setup

then in terminal: npm init -y
then,  npm i express mongoose cors dotenv jsonwebtoken multer nodemon
then, in package.json we change   "type": "commonjs" to   "type": "module"

and,   "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "start": "nodemon server.js"
        },

        changed to 

        "scripts": {
            "server": "nodemon server.js",
            "start": "node server.js"
        },
then, in vs terminal: npm run server

2. Create Backend server

        import express from 'express';
        import 'dotenv/config';
        import cors from 'cors';
        const app=express();

        //middlewares
        app.use(cors()); //Allows requests from different origins (frontend ↔ backend).
        app.use(express.json()); //Parses incoming JSON request bodies into req.body.

        // home route
        app.get('/', (req, res)=>{
            res.send(`home route, API working well`);
        })

        const PORT= process.env.PORT || 3000;
        app.listen(PORT, ()=>{
            console.log(`App listen port ${PORT}`);
        })

        export default app;

3. Connect backend with mongoDB

    create a new database in atlas
    username & password: inquick

    then after create, goto 'network access' in atlas and delete current IP-address
    and create new one by 'allow access from anywhere'

    /server/.env
        PORT=3000
        MONGODB_URI="mongodb+srv://inquick:inquick@cluster0.ojo9ypg.mongodb.net"

    now, under server create folder 'config' and under this create file 'db.js'
        /server /config
        /server/config /db.js

    in, /server/config/db.js
            import mongoose from 'mongoose';

            const connectDB=async()=>{
                try {
                    mongoose.connection.on('connected', ()=> console.log("Database connected"))
                        // mongoose.connection, This is the connection object that represents your MongoDB connection in Mongoose.
                        // .on() is a method used to listen for events.
                        // 'connected' is one of the built-in Mongoose events that fires when the database connection is successfully established.
                        // () => console.log("Database connected") This is a callback function. It runs automatically when the 'connected' event occurs.
                    
                    await mongoose.connect(`${process.env.MONGODB_URI}/inquick`);
                } catch (error) {
                    console.log(error.message);
                }
            }
            export default connectDB;

    update the, /server/server.js
                    import express from 'express';
                    import 'dotenv/config';
                    import cors from 'cors';
                    import connectDB from './configs/db.js';   (--- new part -----)

                    const app=express();

                    //connect the backend server with MongoDb
                    await connectDB();   (---- new part -----)

                    //middlewares
                    app.use(cors()); //Allows requests from different origins (frontend ↔ backend).
                    app.use(express.json()); //Parses incoming JSON request bodies into req.body.

                    // home route
                    app.get('/', (req, res)=>{
                        res.send(`home route, API working well`);
                    })

                    const PORT= process.env.PORT || 3000;
                    app.listen(PORT, ()=>{
                        console.log(`App listen port ${PORT}`);
                    })

                    export default app;

4. under '/server' folder, create new folder 'controllers', 'routes', 'models',
    'middleware'

5. create admin login api (no database required for the admin login)

    /server/ .env
    # admin credentials
    ADMIN_EMAIL="admin@gmail.com"
    ADMIN_PASSWORD="admin"
    JWT_SECRET="secret"


i.  /server/comtrollers/ adminController.js
        import jwt from 'jsonwebtoken'; //create and verify JSON Web Tokens (JWTs) — a common way to handle secure authentication.

        export const adminLogin= async(req, res)=>{
            try {
                const {email, password}=req.body;
                if(email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD){
                    return res.json({success:false, message:"Invalid Credentials"});
                }
                const token= jwt.sign({email}, process.env.JWT_SECRET);
                res.json({success:true, token});
            } catch (error) {
                res.json({success:false, message:error.message});
            }
        }

ii. /server/routes /adminRouters.js
        import express from 'express';
        import {adminLogin} from '../controllers/adminController';

        const adminRouter= express.Router();
        adminRouter.post("/login", adminLogin);
        export default adminRouter;

iii. /server/ server.js (only new part)
        import adminRouter from './routes/adminRoutes';
        //login route
        app.use('/api/admin', adminRouter);



6. create api to publish blog post

i.  /server/models/ Blog.js
        import mongoose from 'mongoose';

        //schema create
        const blogSchema= new mongoose.Schema({
            title:{type:String,required:true},
            subTitle:{type:String},
            description:{type:String,required:true},
            category:{type:String,required:true},
            image:{type:String,required:true},
            isPublished:{type:Boolean, required:true},
        },{timestamps:true});

        // model create
        const Blog=mongoose.model('blog', blogSchema);

        export default Blog;

next, we upload the image in imageKit.com
in dashboard -> developer options -> and copy public key, private key, url endpoint.

and in /server/ .env (add new part)
            # imagekit
            IMAGEKIT_PUBLIC_KEY= 'public_65825lzdb2CtkML72oqhgYrMBLc='
            IMAGEKIT_PRIVATE_KEY= 'private_RmGoAaAENvsncDxfMYgo3u5ZDfs='
            IMAGEKIT_URL_ENDPOINT= 'https://ik.imagekit.io/bikram11'

then, go 'https://imagekit.io/docs' for documentation and select nodejs
that redirect to a github page and follow the process
     install it in server backend terminal : npm install @imagekit/nodejs

ii.   then, /server/configs/ imageKit.js
                import ImageKit from "imagekit";

                const imagekit = new ImageKit({
                publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
                privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
                urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
                });

                export default imagekit;

iii.        /server/controllers/ blogController.js     (addBlog)
                import fs from 'fs'; //file system
                import imagekit from '../configs/imageKit.js';
                import Blog from '../models/Blog.js';

                export const addBlog= async(req, res)=>{
                    try {
                        const { title, subTitle, description, category, isPublished}= JSON.parse(req.body.blog);// JSON.parse: This converts that JSON string into a normal JavaScript object.
                        const imageFile= req.file; //thumblin image

                        //check all feild are present
                        if(!title || !description || !category || !imageFile){
                            return res.json({success:false, message:"Missing required field"});
                        }
                        //if all field are filled then we store the data, but we also have to upload the image also, so first we have to upload the image to cloud imageKit

                        const fileBuffer= fs.readFileSync(imageFile.path);

                        //upload image to imageKit
                        const response= await imagekit.upload({
                            file: fileBuffer,
                            fileName: imageFile.originalname,
                            folder: "/blogs"
                        });

                        //optimized through imagekit url transformation
                        const optimiedImageUrl= imagekit.baseURL({
                            path: response.filePath,
                            transformation:[
                                {quality: 'auto'}, //auto compression
                                {formath: 'webp'}, // convert to modern format
                                {width: '1280'}, // width resizing
                            ]
                        });
                        const image=optimiedImageUrl;

                        await Blog.create({title, subTitle, description, category, image, isPublished});
                        res.json({success:true, message:"blog added successfully"});

                    } catch (error) {
                        res.json({success:false, message:error.message});
                    }
                }

iv.         /server/middleware/ multer.js
                ### note: multer used to purse the image comes from frontend
                import multer from 'multer';
                const upload=multer({storage: multer.diskStorage({})});
                export default upload;

v.          /server/middleware/ auth.js
                ### authentication middleware
                import jwt from 'jsonwebtoken';

                const auth=(req, res, next)=>{
                    const token= req.headers.authorization;
                    try {
                        jwt.verify(token, process.env.JWT_SECRET);
                        next();
                    } catch (error) {
                        res.json({success: false, message: "invalid token"})
                    }
                }
                export default auth ;

vi.         /server/routes / blogRouters.js
                import express from 'express';
                import {addBlog} from '../controllers/blogController.js';
                import upload from '../middleware/multer.js';
                import auth from '../middleware/auth.js';

                const blogRouter= express.Router();
                blogRouter.post('/add', upload.single('image'), auth, addBlog); // upload.single() means only one image

                export default blogRouter;


vii.        /server/ server.js (only new part)
                import blogRouter from './routes/blogRoutes.js';

                //add blog & image store in imageKit
                app.use('/api/blog', blogRouter);


7. create api for- list, details, delete, toggle isActive

i.      /server/controllers/ blogController.js  (new part only) -- addBlog part is in prev
            import fs from "fs";
            import imagekit from "../configs/imageKit.js";
            import Blog from "../models/Blog.js";

            // list all blogs
            export const getAllBlogs= async(req, res)=>{
                try {
                    const blogs= await Blog.find({isPublished: true});
                    res.json({success:true, blogs});
                } catch (error) {
                    res.json({ success: false, message: error.message });
                }
            }

            // individual blog data
            export const getBlogById= async(req, res)=>{
                try {
                    const {blogId}=req.params;
                    const blog= await Blog.findById(blogId);
                    if(!blog){
                    return res.json({success: false, message:"blog not found"});
                    }else{
                    res.json({success:true, blog});
                    }
                } catch (error) {
                    res.json({ success: false, message: error.message });
                }
            }

            // delete any blog
            export const deleteBlogById= async(req, res)=>{
                try {
                    const {id}=req.body;
                    await Blog.findByIdAndDelete(id);

                    //delete all comments associated with this blog
                    await Comment.deleteMany({blog: id});

                    res.json({success:true, message:"blog deleted successfully"});

                } catch (error) {
                    res.json({ success: false, message: error.message });
                }
            }

            // toggle publish:  unpublish <--> publish
            export const togglePublish= async(req, res)=>{
                try {
                    const {id}=req.body;
                    const blog= await Blog.findById(id);
                    blog.isPublished = !blog.isPublished;
                    await blog.save();
                    res.json({success:true, message:"blog status updated"});

                } catch (error) {
                    res.json({ success: false, message: error.message });
                }
            }


ii.     /server/routes / Routers.js
            import express from 'express';
            import {addBlog, getAllBlogs, getBlogById, deleteBlogById, togglePublish} from '../controllers/blogController.js';
            import upload from '../middleware/multer.js';
            import auth from '../middleware/auth.js';

            const blogRouter= express.Router();
            blogRouter.post('/add', upload.single('image'), auth, addBlog); // upload.single() means only one image

            blogRouter.get("/all", getAllBlogs);
            blogRouter.get("/:blogId", getBlogById);
            blogRouter.post("/delete", auth, deleteBlogById); //'auth' middleware allow only admin to delete
            blogRouter.post("/toggle-publish", auth, togglePublish);

            export default blogRouter;




iii.    /server/ server.js (complete file)
            
            import express from 'express';
            import 'dotenv/config';
            import cors from 'cors';
            import connectDB from './configs/db.js';
            import adminRouter from './routes/adminRoutes.js';
            import blogRouter from './routes/blogRoutes.js';

            const app=express();

            //connect the backend server with MongoDb
            await connectDB();

            //middlewares
            app.use(cors()); //Allows requests from different origins (frontend ↔ backend).
            app.use(express.json()); //Parses incoming JSON request bodies into req.body.

            // home route
            app.get('/', (req, res)=>{
                res.send(`home route, API working well`);
            })

            //login route
            app.use('/api/admin', adminRouter);

            //add blog & image store in imageKit, list all blogs, individual blog, individual blog, toggle blog
            app.use('/api/blog', blogRouter);


            const PORT= process.env.PORT || 3000;
            app.listen(PORT, ()=>{
                console.log(`App listen port ${PORT}`);
            })

            export default app;


8. create api to add comments

i.      /server/models/ Comment.js
            import mongoose from 'mongoose';

            //schema create
            const commentSchema= new mongoose.Schema({
                blog:{
                    type:mongoose.Schema.Types.ObjectId, //type= object id
                    ref: 'blog',
                    required:true
                },
                name:{
                    type:String,
                    required:true
                },
                content:{
                    type:String,
                    required:true
                },
                isApproved:{
                    type:Boolean,
                    default: false
                }
            },{timestamps:true});

            // model create
            const Comment=mongoose.model('comment', commentSchema);

            export default Comment;

ii.      /server/controllers/ blogController.js  (new part only)

            import Comment from '../models/Comment.js';
            // add comments
            export const addComment= async(req, res)=>{
            try {
                const {blog, name, content}=req.body;
                await Comment.create({blog, name, content});
                res.json({ success: true, message: "comment added for review" });
            } catch (error) {
                res.json({ success: false, message: error.message });
            }
            }

            // comment data for individual content
            export const getBlogComments= async(req, res)=>{
            try {
                const {blogId}=req.body;
                const comments= await Comment.find({blog: blogId, isApproved: true}).sort({createdAt: -1});
                res.json({ success: true, comments });
            } catch (error) {
                res.json({ success: false, message: error.message });
            }
            }


iii.     /server/routes / blogRouters.js  (new part only)
            import {addComment, getBlogComments} from '../controllers/blogController.js';

            //router for comment data
            blogRouter.post("/add-comment", addComment);
            blogRouter.get("/comments", getBlogComments);

iv.    /server/ server.js ---- no changed



9. create api for admin dashboard data

i.      /server/controllers/ adminController.js  (new part only)

            import Blog from '../models/Blog.js';
            import Comment from '../models/Comment.js';

            //  blog list for admin, whether isPublished is true or false
            export const getAllBlogsAdmin= async(req, res)=>{
                try {
                    const blogs= (await Blog.find({})).toSorted({createdAt: -1}); //return all blogs
                    res.json({success:true, blogs});
                } catch (error) {
                    res.json({success:false, message:error.message});
                }
            }

            // show comments with approved or not-approved status to admin
            export const getAllComments= async(req, res)=>{
                try {
                    const comments= (await Comment.find({}).populate("blog")).toSorted({createdAt: -1});
                    res.json({success:true, comments});
                } catch (error) {
                    res.json({success:false, message:error.message});
                }
            }

            // dashboard data- blogs data, comments data, draft blog list, recent blogs
            export const getDashboard= async(req, res)=>{
                try {
                    //recent blogs
                    const recentBlogs= (await Blog.find({})).sort({createdAt: -1}).limit(5);

                    const blogs= await Blog.countDocuments(); //total blogs
                    const comments= await Comment.countDocuments(); //total comments
                    const drafts= await Blog.countDocuments({isPublished: false}); //total drafts

                    const dashboardData={
                        blogs, comments, drafts, recentBlogs
                    }
                    res.json({success:true, dashboardData});
                } catch (error) {
                    res.json({success:false, message:error.message});
                }
            }

            // api- to admin can delete comment by id
            export const deleteCommentById= async(req, res)=>{
                try {
                    const {id}=req.body;
                    await Comment.findByIdAndDelete(id);
                    res.json({success:true, message: "comment deleted successfully"});
                } catch (error) {
                    res.json({success:false, message:error.message});
                }
            }

            // api- to admin can approve the comments
            export const approveCommentById= async(req, res)=>{
                try {
                    const {id}=req.body;
                    await Comment.findByIdAndUpdate(id, {isApproved: true});
                    res.json({success:true, message: "comment approve status updated"});
                } catch (error) {
                    res.json({success:false, message:error.message});
                }
            }

ii.     /server/routes / adminRouters.js  (new part only)

            import express from 'express';
            import {adminLogin, getAllComments, getAllBlogsAdmin, deleteCommentById, approveCommentById, getDashboard} from '../controllers/adminController.js';
            import auth from '../middleware/auth.js';

            const adminRouter= express.Router();

            adminRouter.post("/login", adminLogin);
            adminRouter.get("/comments", auth, getAllComments);
            adminRouter.get("/blogs", auth, getAllBlogsAdmin);
            adminRouter.post("/delete-comment", auth, deleteCommentById);
            adminRouter.post("/approve-comment", auth, approveCommentById);
            adminRouter.get("/dashboard", auth, getDashboard);

            export default adminRouter;


iii.    /server/ server.js ---- no changed








--------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------

# number 3                             ## Connect Backend with Frontend


1.  under /client we create a file ->  .env  ,  (to store backend url)

    /client/  .env  
        VITE_BASE_URL= http://localhost:3000

2.  under '/client/src'  we create a folder 'context', where we define all global state that will be share with all the
    components

    // This code sets up a 'React Context API '— a system for sharing global data (like user info, theme, or auth state) across components without having to pass props manually at every level.

    /client/src/context/  AppContext.jsx
        import { createContext, useContext } from 'react';

        const AppContext = createContext(); 

        export const AppProvider=({children})=>{
            const value={}; 

            return(  
                <AppContext.Provider value={value}>
                    {children}
                </AppContext.Provider>
            )
        }

        export const useAppContext=()=>{
            return useContext(AppContext); 
        }

3. in different component we have to make the API call from getting the data form backend and database .
    and for making the API call we need backend url (present in .env). for this project, for the API call we
    use a package called Axios : npm i axios

    React (Frontend)  ⇄  Express/Node (Backend)  ⇄  MongoDB (Database)
        ↑
      Axios (API calls)

    - Frontend (React) → sends an API request (using Axios)
    - Backend (Express + Node.js) → receives the request, processes it
    - Database (MongoDB) → stores or retrieves data
    - Response → goes back the same way (MongoDB → Backend → Frontend)

    /client/src/context/ AppContext.jsx  (update with axios setup)

        import { createContext, useContext } from 'react';
        import axios from 'axios';
        import {useNavigate, useState} from 'react-router-dom'; //new

        axios.defaults.baseURL= import.meta.env.VITE_BASE_URL;  new part-- //base url for making the api call into this axios package

        const AppContext = createContext(); new part--// Creates a context object named AppContext.  This object will hold shared global data.

        new part-->
        export const AppProvider=({children})=>{

            //to stublish connection between pages/components we do not need to write navigate hook for each pages, instead we write it here and use it form context
            const navigate=useNavigate(); 

            const [token, setToken]=useState(null); //for user authentication
            const [blogs, setBlogs]=useState([]); //for all blogs data
            const [input, setInput]=useState([]);  //for filter the blogs
            
            const value={
                axios, 
                navigate, 
                token, setToken,
                blogs, setBlogs,
                input, setInput
            };

            return( 
                <AppContext.Provider value={value}>
                    {children}
                </AppContext.Provider>
            )
        }

        export const useAppContext=()=>{function
            return useContext(AppContext);
        }


4.  /client/src/ main.jsx  (update)
        add the AppProvider() to allow the App-context to access from all components

        import { createRoot } from 'react-dom/client'
        import './index.css'
        import App from './App.jsx'

        import {BrowserRouter} from 'react-router-dom';
        import {AppProvider} from './context/AppContext.jsx';

        createRoot(document.getElementById('root')).render(
        <BrowserRouter>
            <AppProvider>
                <App />
            </AppProvider>
        </BrowserRouter>
        )

5. function to get all blogs data from the database  &  login functionality

    for notification: npm i react-hot-toast

    then, /client/src/ App.js  (add new part only)
        import {Toaster} from 'react-hot-toast';
        function App() {
        return (
            <>
            <Toaster/>
            <Routes>
            .
            .
            .

    /client/src/context/ AppContext.jsx  (updated)

        import { createContext, useContext, useEffect, useState } from 'react';
        import axios from 'axios';
        import {useNavigate} from 'react-router-dom'
        import toast from 'react-hot-toast';

        axios.defaults.baseURL= import.meta.env.VITE_BASE_URL

        const AppContext = createContext()

        export const AppProvider=({children})=>
            const navigate=useNavigate(); 

            const [token, setToken]=useState(null); //for user authentication
            const [blogs, setBlogs]=useState([]); //for all blogs data
            const [input, setInput]=useState([]);  //for filter the blogs

            //fetch all blogs data  (new part)
            const fetchBlogs= async()=>{
                try {
                    const {data}= await axios.get('/api/blogs/all');
                    data.success ? setBlogs(data.blog) : toast.error(data.message)
                } catch (error) {
                    toast.error(error.message)
                }
            }
            useEffect(() => {
                fetchBlogs();

                //functionality for user authentication, check availability in the browser local storage, if available - it will add this token in the axios header. so this token added in all the api call whenever the token is avilable.
                const token= localStorage.getItem('token');
                if(token){
                    setToken(token);
                    axios.defaults.headers.common['Authorization']= `${token}`;
                }
            }, [])
            
            const value={
                axios, 
                navigate, 
                token, setToken,
                blogs, setBlogs,
                input, setInput,
                fetchBlogs,
            }

            return(
                <AppContext.Provider value={value}>
                    {children}
                </AppContext.Provider>
            )
        }

        export const useAppContext=()=>
            return useContext(AppContext
        }


        /client/src/components/ Navbar.jsx

            import React from 'react'
            import {assets} from '../assets/assets';

            import {useAppContext} from '../context/AppContext';

            const Navbar = () => {
            
            //now we use app-context (new part)
            const {navigate, token}= useAppContext();

            return (
                <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 cursor-pointer '>

                    {/* logo */}
                    <img onClick={()=> navigate("/")} src={assets.inQuick} alt="logo" className='w-32 sm:w-44'/>

                    {/* Admin Login */}
                    <button onClick={()=> navigate("/admin")} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-4 sm:px-10 py-1.5 sm:py-2.5'>
                        {token ? 'Dashboard' : 'Admin Login'}   //new part
                        <img src={assets.arrow} alt="arrow"  className='w-3'/>
                    </button>

                </div>
            )
            }
            export default Navbar

        
        /client/src/components/admin/ Login.jsx  (update)

            import React, {useState} from 'react'
            import {useAppContext} from '../../context/AppContext';
            import toast from 'react-hot-toast';

            const Login = () => {

                const {axios, setToken}= useAppContext()

                // state variable to store the Data
                const [email, setEmail]=useState('');
                const [password, setPassword]=useState('');

                const handleSubmit= async(e)=>{   (updated part)
                    e.preventDefault();
                    try {
                    const {data}= await axios.post('/api/admin/login', {email, password});
                    if(data.success){
                        setToken(data.token);
                        localStorage.setItem('token', data.token);
                        axios.defaults.headers.common['Authorization']=data.token;
                    }else{
                        toast.error(data.message);
                    }
                    } catch (error) {
                    toast.error(error.message)
                    }
                }

                return (
                    <div className='flex items-center justify-center h-screen'>
                    <div className='w-full max-w-sm p-6 max-md:m-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg'>
                        <div className='flex flex-col items-center justify-center'>

                        {/* title & desc */}
                        <div className='w-full py-6 text-center'>
                            <h1 className='text-3xl font-bold'> <span className='text-primary'>Admin</span> Login</h1>
                            <p className='font-light'>Enter your credentials to access the admin panel</p>
                        </div>

                        {/* login form */}
                        <form onSubmit={handleSubmit} className='mt-6 w-full sm:max-w-md text-gray-600'>
                            <div className='flex flex-col'>
                            <label>Email</label>
                            <input
                                onChange={(e)=> setEmail(e.target.value)} 
                                value={email}
                                type="email" 
                                required 
                                placeholder='Your email id'
                                className='border-b-2 border-gray-300 p-2 outline-none mb-6'
                            />
                            </div>

                            <div className='flex flex-col'>
                            <label>Password</label>
                            <input 
                                onChange={(e)=> setPassword(e.target.value)} 
                                value={password}
                                type="password" 
                                required 
                                placeholder='Yourpassword'
                                className='border-b-2 border-gray-300 p-2 outline-none mb-6'
                            />
                            </div>

                            <button type='submit' className='w-full py-3 font-medium bg-primary text-white rounded cursor-pointer hover:bg-primary/90 transition-all'>Login</button>
                        </form>

                        </div>
                    </div>
                    </div>
                )
            }

            export default Login
 


6. api for home-page's all blogs

    /client/src/component/ BlogList.jsx  (updated)

        import React, {useState} from 'react'
        import { motion } from "motion/react"
        import {blogCategories, blog_data} from '../assets/assets'; 
        import BlogCard from './BlogCard'; 

        import {useAppContext} from '../context/AppContext';

        const BlogList = () => {
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
                <div className='flex flex-wrap md:flex-nowrap justify-center gap-x-8 gap-y-3  sm:gap-12 my-10 relative'>
                    {blogCategories.map((item)=>(
                        <div key={item} className='relative'>
                            <button onClick={()=> setMenu(item)} className={` cursor-pointer font-medium text-gray-600 ${menu===item && 'text-white px-4 pt-1'}`}>
                                {item}
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
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40'>
                    {filteredBlogs().filter((blog)=>menu==="All" ? true : blog.category===menu).map((blog)=><BlogCard key={blog._id} blog={blog}/>)}
                </div>
            </div>
        )
        }
        export default BlogList



7. /client/src/component/ Header.jsx  (updated)

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



8. show blog data from db

/client/src/pages/ Blog.jsx

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
      const {data}= await axios.post(`/api/blog/comments`, {blogId: id});
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




9. /client/src/pages/admin/ AddBlog.jsx

import React, {useState, useEffect, useRef} from 'react'
import {assets, blogCategories} from '../../assets/assets';
import CommentTableItem from '../../components/admin/CommentTableItem';
import Quill from 'quill';

import {useAppContext} from '../../context/AppContext';
import toast from 'react-hot-toast';

const AddBlog = () => {

  const {axios}=useAppContext();
  const [isAdding, setIsAdding]=useState(false);

  const editorRef=useRef(null);
  const quillRef=useRef(null);

  const [image, setImage]=useState(false);
  const [title, setTitle]=useState('');
  const [subTitle, setSubTitle]=useState('');
  const [category, setCategory]=useState('Tech Updates');
  const [isPublished, setIsPublished]=useState(false);

  const generateContent= async()=>{

  }

  const onSubmitHandler= async(e)=>{
    try {
      e.preventDefault();
      setIsAdding(true);

      const blog={
        title, subTitle, 
        description: quillRef.current.root.innerHTML,
        category, isPublished
      }

      const formData= new FormData();
      formData.append('blog', JSON.stringify(blog))
      formData.append('image', image)

      const {data} = await axios.post(`/api/blog/add`, formData);

      if(data.success){
        toast.success(data.message);
        setImage(false);
        setTitle('');
        quillRef.current.root.innerHTML=''
        setCategory('All')
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }finally{
      setIsAdding(false)
    }
  }


  useEffect(()=>{
    //initiate quill only once
    if(!quillRef.current && editorRef.current){
      quillRef.current= new Quill(editorRef.current, {theme: 'snow'})
    }
  },[])


  return (
    <>
      <form onSubmit={onSubmitHandler} className='flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll'>
        <div className='bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded'>
          <p>Upload thumbnail</p>
          <label htmlFor="image">
            <img src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" className='mt-2 h-16 rounded cursor-pointer' />
            <input onChange={(e)=> setImage(e.target.files[0])} type="file" id='image' hidden required/>
            {/* URL.createObjectURL(image) is a JavaScript method used to create a temporary URL that points to a file */}
          </label>

          <p className='mt-4'>Content Title</p>
          <input onChange={(e=>setTitle(e.target.value))} value={title} type="text" placeholder='Type here' required className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded'/>

          <p className='mt-4'>Content Sub-title</p>
          <input onChange={(e=>setSubTitle(e.target.value))} value={subTitle} type="text" placeholder='Type here' required className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded'/>

          <p className='mt-4'>Content Description</p>
          <div className='max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative'>
            <div ref={editorRef}></div> {/* Quill */}
            <button onClick={generateContent} type='button' className='absolute bottom-1 right-2 ml-2 text-xs text-white bg-black/70 px-4 py-1.5 rounded hover:underline cursor-pointer'>Generate With AI</button>
          </div>
          {/* npm i quill, check documentation for boilerplate code */}

          <p className='mt-4'>Content Category</p>
          <select onChange={(e)=> setCategory(e.target.value)} name="category" className='mt-2 px-3 py-2 border text-gray-500 border-gray-300 outline-none rounded'>
            <option value="">Select Category</option>
            {blogCategories.map((item, index)=>{
              return <option key={index} value={item}>{item}</option>
            })}
          </select>

          <div className='flex gap-2 mt-4'>
            <p>Publish Now</p>
            <input onChange={(e)=> setIsPublished(e.target.checked)} type="checkbox" checked={isPublished} className='scale-125 cursor-pointer'/>
          </div>

          <button disabled={isAdding} type='submit' className='mt-8 w-40 h-10 bg-primary text-white rounded cursor-pointer text-sm'>
            {isAdding ? 'Adding....' : 'Add Content'}
          </button>

        </div>
      </form>
    </>
  )
}

export default AddBlog




10. /client/src/pages/admin/ ListBlog.jsx
import React, {useState, useEffect} from 'react'
import {blog_data} from '../../assets/assets';
import BlogTableItem from '../../components/admin/BlogTableItem';

import {useAppContext} from '../../context/AppContext';
import toast from 'react-hot-toast';

const ListBlog = () => {
  const [blogs, setBlogs]= useState([]);
  const {axios}= useAppContext();

  const fetchBlogs= async()=>{
    try {
      const {data}= await axios.get('/api/admin/blogs');
      if(data.success){
        setBlogs(data.blogs)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  useEffect(()=>{
    fetchBlogs(); //call it
  },[])

  return (
    <>
      <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50'>
        <h1>All Contents</h1>
        <div className='relative mt-4 h-4/5 max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
          <table className='w-full text-sm text-gray-500'>
            <thead className='text-xs text-gray-600 text-left uppercase'>
              <tr>
                <th scope='col' className='px-2 py-4 xl:px-6'>#</th>
                <th scope='col' className='px-2 py-4'>Title</th>
                <th scope='col' className='px-2 py-4 max-sm:hidden'>Date</th>
                <th scope='col' className='px-2 py-4 max-sm:hidden'>Status</th>
                <th scope='col' className='px-2 py-4'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, index)=>{
                return <BlogTableItem key={blog._id} blog={blog} 
                fetchBlogs={fetchBlogs} index={index+1}/>
              })}
              {/* blogs.map(), here blogs is blogs-state variable */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ListBlog



11. /client/src/components/admin/  BlogTableItem.jsx

import React from 'react'
import {assets} from '../../assets/assets';

import {useAppContext} from '../../context/AppContext';
import toast from 'react-hot-toast';

const BlogTableItem = ({blog, fetchBlogs, index}) => {
    const {title, createdAt}= blog;
    const BlogDate= new Date(createdAt);

    const {axios}= useAppContext();

    const deleteBlog = async () => {
      const confirm = window.confirm('Are you sure you want to delete the blog?')
      if(!confirm) return ;
      try {
        const {data}= await axios.post(`/api/blog/delete`, {id: blog._id});
        if(data.success){
          toast.success(data.message)
          await fetchBlogs()
        }else{
          toast.error(data.message)
        }
      } catch (error) {
        toast.error(error.message)
      }
    }

    const togglePublish= async()=>{
      try {
        const {data}= await axios.post(`/api/blog/toggle-publish`, {id: blog._id});
        if(data.success){
          toast.success(data.message)
          await fetchBlogs()
        }else{
          toast.error(data.message)
        }
      } catch (error) {
        toast.error(error.message)
      }
      
    }

  return (
    <>
      <tr className='border border-gray-300'>
        <th className='px-2 py-4'>{index}</th>
        <td className='px-2 py-4'>{title}</td>
        <td className='px-2 py-4 max-sm:hidden'>{BlogDate.toDateString()}</td>
        <td className='px-2 py-4 max-sm:hidden'>
            <p className={`${blog.isPublished ? "text-green-600" : "text-orange-700"}`}>{blog.isPublished ? 'Published' : 'Unpublished'}</p>
            {/* here, isPublished status defined into assets file */}
        </td>
        <td className='flex px-2 py-4 text-xs gap-3'>
            {/* option to switch between publish and unpublish */}
            <button onClick={togglePublish} className='border px-2 py-0.5 mt-1 rounded cursor-pointer'>{blog.isPublished ? 'Unpublish' : 'Publish'}</button>

            <img onClick={deleteBlog} src={assets.cross_icon} alt="" className='w-8 hover:scale-110 transition-all cursor-pointer'/>  {/* to delete */}
        </td>
      </tr>
    </>
  )
}

export default BlogTableItem




12. /client/src/pages/admin/ Dashboard.jsx
import React, {useState, useEffect} from 'react'
import {assets, dashboard_data} from '../../assets/assets';
import BlogTableItem from '../../components/admin/BlogTableItem';

import {useAppContext} from '../../context/AppContext';
import toast from 'react-hot-toast';


const Dashboard = () => {

  // due to no Database, we manually set the values of initial dashboardData
  const [dashboardData, setDashboardData]=useState({
    blogs:0,
    comments:0,
    drafts:0,
    recentBlogs:[],
  })

  const {axios}=useAppContext();

  //fetch dashboard data
  const fetchDashboard= async()=>{
    try {
      const {data}= await axios.get(`/api/admin/dashboard`);
      data.success ? setDashboardData(data.dashboardData) : toast.error(data.message)
    } catch (error) {
      toast.error(error.message)
    }
  }

  // useEffect work when the state variable loaded each time (if no condition implied. When you need to set state based on some external data (API, local data, async fetch) → put it inside useEffect. )
  useEffect(()=>{ //call fetchDashboard() each time state variable update
    fetchDashboard();
  },[])


  return (
    <>
      <div className='flex-1 p-4 md:p-10 bg-blue-50/50'>

        {/* overall summary */}
        <div className='flex flex-wrap gap-4'>
          <div  className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow hover:scale-105 duration-300 transition-all'>
            <img src={assets.dashboard_icon_1} alt="" />
            <div>
              <p className='text-xl font-semibold text-gray-600'>{dashboardData.blogs}</p>
              <p className='text-gray-400 font-light'>Contents</p>
            </div>
          </div>

          <div  className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow hover:scale-105 duration-300 transition-all'>
            <img src={assets.dashboard_icon_2} alt="" />
            <div>
              <p className='text-xl font-semibold text-gray-600'>{dashboardData.comments}</p>
              <p className='text-gray-400 font-light'>Comments</p>
            </div>
          </div>

          <div  className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow hover:scale-105 duration-300 transition-all'>
            <img src={assets.dashboard_icon_3} alt="" />
            <div>
              <p className='text-xl font-semibold text-gray-600'>{dashboardData.drafts}</p>
              <p className='text-gray-400 font-light'>Drafts</p>
            </div>
          </div>
        </div>

        {/* latest contents */}
        <div>
          <div className='flex items-center gap-3 m-4 text-gray-600'>
            <img src={assets.dashboard_icon_4} alt="" />
            <p>Latest Blogs</p>
          </div>
          <div className='relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
            <table className='w-full text-sm text-gray-500'>
              <thead className='text-xs text-gray-600 text-left uppercase'>
                <tr>
                  <th scope='col' className='px-2 py-4 xl:px-6'>#</th>
                  <th scope='col' className='px-2 py-4'>Title</th>
                  <th scope='col' className='px-2 py-4 max-sm:hidden'>Date</th>
                  <th scope='col' className='px-2 py-4 max-sm:hidden'>Status</th>
                  <th scope='col' className='px-2 py-4'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {dashboardData.recentBlogs.map((blog, index)=>{
                  return <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchDashboard} index={index+1}/>
                })}
                {/* blog={blog} Passes the entire blog object(blog obj. means blog_data from assets) to BlogTableItem, so it can display the title, date, status, etc */}
                {/* fetchBlogs={fetchDashboard}Passes the dashboard fetching function so BlogTableItem can refresh the dashboard if a blog is updated/deleted. */}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </>
  )
}

export default Dashboard



13. /client/src/pages/admin/ Comments.jsx
import React, {useState, useEffect} from 'react'
import {blog_data, comments_data} from '../../assets/assets';
import CommentTableItem from '../../components/admin/CommentTableItem';

import {useAppContext} from '../../context/AppContext';
import toast from 'react-hot-toast';

const Comments = () => {
  const [comments, setComments]=useState([]);
  const [filter, setFilter]=useState('Not Approved');

  const {axios}=useAppContext();

  const fetchComments= async()=>{
    try {
      const {data}= await axios.get('/api/admin/comments')
      data.success ? setComments(data.comments) : toast.error(data.message)
    } catch (error) {
      toast.error(error.message)
    }
  }
  useEffect(()=>{
    fetchComments();
  },[])

  return (
    <>
      <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50'>
        <div className='flex justify-between items-center max-w-3xl'>
          <h1>Comments</h1>
          <div className='flex gap-4'>
            <button onClick={()=>setFilter('Approved')} className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-xs  ${filter==='Approved' ? 'text-white bg-primary' : 'text-gray-700'}`}>Approved</button>

            <button onClick={()=>setFilter('Not Approved')} className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-xs  ${filter==='Not Approved' ? 'text-white bg-black' : 'text-gray-700'}`}>Not Approved</button>
          </div>
        </div>

        <div className='relative h-4/5 max-w-3xl overflow-x-auto mt-4 bg-white shadow rounded-lg scrollbar-hide'>
        <table className='w-full text-sm text-gray-500'>
          <thead className='text-xs text-gray-700 text-left uppercase'>
            <tr>
              <th scope='col' className='px-6 py-3'>Content Title & Comment</th>
              <th scope='col' className='px-6 py-3 max-sm:hidden'>Date</th>
              <th scope='col' className='px-6 py-3'>Action</th>
            </tr>
          </thead>
          <tbody>
            {comments.filter((comment)=>{
              if(filter === "Approved") return comment.isApproved === true;
              return comment.isApproved === false;
            }).map((comment, index)=><CommentTableItem key={comment._id} comment={comment} index={index+1} fetchComments={fetchComments}  /> )}
          </tbody>
        </table>
        </div>
      </div>
    </>
  )
}

export default Comments



14. /client/src/components/admin/  CommentTableItem.jsx

import React from 'react'
import {assets} from '../../assets/assets';

import {useAppContext} from '../../context/AppContext';
import toast from 'react-hot-toast';

const CommentTableItem = ({comment, fetchComments}) => {
    const{blog, createdAt, _id}= comment;
    const BlogDate= new Date(createdAt);

    const {axios} = useAppContext();

    const approveComment= async () => {
      try {
        const {data}= await axios.post('/api/admin/approve-comment', {id:_id})
        if(data.success){
          toast.success(data.message);
          fetchComments();
        }else{
          toast.error(data.message)
        }
      } catch (error) {
        toast.error(error.message)
      }
    }

    const deleteComment= async () => {
      try {
        const confirm= window.confirm('Are you sure you want to delete this comment? ')
        if(!confirm) return;

        const {data}= await axios.post('/api/admin/delete-comment', {id:_id})
        if(data.success){
          toast.success(data.message);
          fetchComments();
        }else{
          toast.error(data.message)
        }
      } catch (error) {
        toast.error(error.message)
      }
    }

  return (
    <>
      <tr className='border-y border-gray-300'>
        <td className='px-6 py-4'>
            <b className='font-medium text-gray-600'>Content</b> : {blog.title}
            <br />
            <br />
            <b className='font-medium text-gray-600'>Name</b> : {comment.name}
            <br />
            <br />
            <b className='font-medium text-gray-600'>Comment</b> : {comment.content}
        </td>
        <td className='px-6 py-4 max-sm:hidden'>
            {BlogDate.toLocaleDateString()}
        </td>
        <td className='px-6 py-4'>
            <div className='inline-flex items-center gap-4'>
                {!comment.isApproved 
                ? <img onClick={approveComment} src={assets.tick_icon} alt="" className='w-5 hover:scale-110 duration-300 transition-all cursor-pointer'/> 
                : <p className='text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1'>Approved</p> }
                <img onClick={deleteComment} src={assets.bin_icon} alt="" className='w-5 hover:scale-110 duration-300 transition-all cursor-pointer'/>
            </div>
        </td>
      </tr>
    </>
  )
}

export default CommentTableItem



15. /client/src/pages/admin/  Layout.jsx

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




-------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------

### part 4                 Generate Blog content using AI

1.      /server/ .env
            # google gemini
            GEMINI_API_KEY="AIzaSyAiD4RegT47iDI3f-sCAg3E4nQDi0QU3Y8"

        then, in terminal: npm install @google/genai

2. /server/config/  gemini.js
        import { GoogleGenAI } from "@google/genai";

        // The client gets the API key from the environment variable `GEMINI_API_KEY`.
        const ai = new GoogleGenAI({apiKey:process.env.GEMINI_API_KEY});

        async function main(prompt) {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });
        return response.text
        }

        export default main;

3. /server/controllers/ blogController.js  (only new part)

        import main from '../configs/gemini.js';
        // genai
        export const generateContent=async(req, res)=>{
        try {
            const {prompt}=req.body;
            const content = await main(prompt + 'Generate a blog content for this topic mention in title and subtitle in simple artical text format')
            res.json({success:true, content})
        } catch (error) {
            res.json({success:false, message:error.message})
        }
        }

4. /server/routes/ blogRoutes.js  (only new part)

        import {generateContent} from '../controllers/blogController.js'
        //route for genai
        blogRouter.post("/generate", auth, generateContent);

for parse we import in client:  npm i marked

5. /client/src/pages/admin AddBlog.js
        .
        .
        import {parse} from 'marked';
        .
        .
        const AddBlog = () => {
        .
        .
        const [loading, setLoading]=useState(false);
        .
        .
        const generateContent= async()=>{
            if(!title) return toast.error('Please enter a title')
            try {
            setLoading(true);
            const {data}  = await axios.post('/api/blog/generate', {prompt: title})
            if(data.success){
                quillRef.current.root.innerHTML=parse(data.content)
            }else{
                toast.error(data.message)
            }
            } catch (error) {
            toast.error(error.message)
         
            }finally{
            setLoading(false)
            }
        }

        const onSubmitHandler= async(e)=>{
        .
        .
        .

        return (
            <>
            <form onSubmit={onSubmitHandler} className='flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll'>
                .
                .
                .
                <p className='mt-4'>Content Description</p>
                <div className='max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative'>
                    <div ref={editorRef}></div> {/* Quill */}
                    {loading && (
                    <div className='absolute right-0 top-0 bottom-0 left-0 flex items-center justify-center bg-black/10 mt-2'>
                        <div className='w-8 h-8 rounded-full border-2 border-t-white animate-spin'></div>
                    </div>
                    )} 
                    <button disabled={loading} onClick={generateContent} type='button' className='absolute bottom-1 right-2 ml-2 text-xs text-white bg-black/70 px-4 py-1.5 rounded hover:underline cursor-pointer'>Generate With AI</button>
                </div>
                .
                .
                .
                </div>
            </form>
            </>
        )
        }
        export default AddBlog


