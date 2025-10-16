# inQuick - Stay Relevant

## Frontend

1. under root folder
        npm create vite@latest
        cd client
        npm i
        npm run dev

2. inquick/client/src
        clear App.jsx, index.css, and other css files

3. /client/src/index.css
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
        *{
            font-family: "Outfit", sans-serif;
        }
        ::-webkit-scrollbar{  //hidden the scroll bar
            display: none;
        }
        @theme{  //primary color
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

4. in client/ terminal
        npm install tailwindcss @tailwindcss/vite

5. /client/vite.config.js
        import tailwindcss from '@tailwindcss/vite'
        export default defineConfig({
        plugins: [react(), tailwindcss(),],
        })

    /client/src/index.css
        @import "tailwindcss";

6. in client/ terminal
        npm i react-router-dom  //for navigate user from one page to another

7. client/src/main.jsx
        import { createRoot } from 'react-dom/client'
        import './index.css'
        import App from './App.jsx'

        import {BrowserRouter} from 'react-router-dom'; //import BrowserRouter

        createRoot(document.getElementById('root')).render(
        <BrowserRouter> //set BrowserRouter
            <App />
        </BrowserRouter>
        )

8. ## Setup assets.js file (to easily access pre-defined data) (unless Database not created)
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



8. under client/src we create two folder 'components' and 'pages'
        client/src/ components
            client/src/ components
                            |- Navbar.jsx
                            |- Header.jsx
                            |- Footer.jsx
                            |- BlogList.jsx
                            |- BlogCard.jsx
                            |- Loader.jsx
                            |- Newsletter.jsx
                            
            client/src/  pages
                            |- Home.jsx
                            |- Blog.jsx

9. client/src/App.jsx      //Route setup for frontend
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
-------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------
pages- Home.jsx
components- Navbar.jsx, Header.jsx, BlogList.jsx, 
            BlogCard.jsx, Newsletter.jsx, Footer.jsx

## navbar   //create a navbar
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
            <div>

                {/* logo */}
                <img onClick={()=> navigate("/")} src={assets.inQuick} alt="logo" />

                {/* Admin Login */}
                <button onClick={()=> navigate("/admin")} >
                    Author Login
                    <img src={assets.arrow} alt="arrow" />
                </button>
            </div>
        )
        }
        export default Navbar

----------------------------------------------------------------------------------------------------------------
## Hero section
12. client/src/pages/Home.ejs  (updated)
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
            <div >
                <div>

                    {/* ai feature ad */}
                    <div >
                        <p>New AI-generated content is live now</p>
                        <img src={assets.star_icon} alt="" />
                    </div>

                    {/* welcome message- tagline */}
                    <h1>
                        Tech moves fast, <br />
                        stay relevant with <span>inQuick.</span> 
                    </h1>

                    {/* description */}
                    <p> 
                        <span>This is your space to catch up, to explore what’s new, and to stay sharp in a world where tech never slows down.</span> 
                        <span> Whether it’s a quick update or a deep dive, <span>inQuick</span> keeps you connected, informed, and always relevant.</span>
                    </p> 

                    {/* search bar */}
                    <form>
                        <input type="text" placeholder='Search for Content' required />
                        <button type='submit'>Search</button>
                    </form>

                </div>

                {/* background gradient image */}
                <img src={assets.gradientBackground} alt="" className='absolute -top-50 -z-1 opacity-50'/>
            </div>
        )
        }
        export default Header

----------------------------------------------------------------------------------------------------------------
## content section

14. client/src/pages/Home.ejs  (updated)
        import React from 'react'
        import Header from '../components/Header'
        import BlogList from '../components/BlogList'
        const Home = () => {
        return (
            <>
            <Header/>
            <BlogList />  //new
            </>
        )
        }
        export default Home

### note-    npm i motion    (for animation)

15. client/src/component/ BlogCard.jsx  (it is used as a component that will placed into BlogList)
        import React from 'react'
        import {useNavigate} from 'react-router-dom';

        // we create this component as a card to display all content data into 'BlogList.jsx' component
        const BlogCard = ({blog}) => {
            const {title, description, category, image, _id}=blog;
            const navigate=useNavigate();

        return (
            // when user click on content card, they navigate to details view of the crad
            <div onClick={()=>navigate(`/blog/${_id}`)} >
                <img src={image} alt="" />
                <span>{category}</span>
                <div>
                    <h5>{title}</h5>

                    {/* we take 80 characters */}
                    {/* ""dangerouslySetInnerHTML"" is used to remove the html tags thats are present in paragraph */}
                    <p  dangerouslySetInnerHTML={{"__html": description.slice(0,80)}}></p> 
                </div>
            </div>
        )
        }
        export default BlogCard

16. client/src/components/ BlogList.jsx

        import React, {useState} from 'react'
        import { motion } from "motion/react" //npm package to animate the underline effect when switching categories.
        import {blogCategories, blog_data} from '../assets/assets'; //blogCategories- have all of 4category of content and blog_data - have details blog
        import BlogCard from './BlogCard'; //import BlogCard component

        const BlogList = () => {
            // state for active item from menu
            const [menu, setMenu]=useState("All");

        return (
            <div>

                {/* content menu --------------------------------------------- */}
                <div >
                    {/* by using map() we iterate all-over the array and item argument store each iterated element and setMenu re-render the clicked menu */}
                    {blogCategories.map((item)=>(
                        <div key={item} >
                            <button onClick={()=> setMenu(item)} className={` cursor-pointer text-gray-600 ${menu===item && 'text-white px-4 pt-1'}`}>
                                {item}

                                {/* when select a menu then bg change */}
                                {menu===item && (
                                    <motion.div layoutId='underline' transition={{type: 'spring', stiffness: 500, damping: 30}}></motion.div>
                                )}
                            </button>
                        </div>
                    ))}
                </div>

                {/* content cards ------------------------------------------ */}
                {/* This code filters blog_data to include all blogs if menu is "All" or only those matching the selected category, then maps the filtered array to render a BlogCard for each blog, using its _id as a unique key. */}
                <div>
                    {blog_data.filter((blog)=>menu==="All" ? true : blog.category===menu).map((blog)=><BlogCard key={blog._id} blog={blog}/>)}
                </div>

            </div>
        )
        }
        export default BlogList


----------------------------------------------------------------------------------------------------------------
## news subscription section & footer section

17. client/src/pages/Home.ejs  (updated)
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

18. client/src/components/ Newsletter.jsx    (for subscription)
        import React from 'react'
        const Newsletter = () => {
        return (
            <div>
                <h1>Never Miss a Content!</h1>
                <p>Subscribe to get the latest tech updates, new tutorials, and exclusive news.</p>
                <form>
                    <input type="text"  placeholder='Enter your Email Id for updates'/>
                    <button type='submit' >Subscribe</button>
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
            <div>
            <div>
                
                {/* Logo & Description */}
                <div>
                    <img onClick={()=> navigate("/")} src={assets.inQuick} alt="logo" />
                <p>
                        inQuick is your go-to platform for staying ahead in the fast-paced world of technology. We bring you the latest tech updates, insightful guides, and practical knowledge—from web development and AI to cybersecurity and data science—so you can learn, grow, and stay relevant in an ever-evolving digital landscape.
                </p>
                </div>

                {/* Quick links */}
                <div>
                {footer_data.map((section, index)=>(
                    <div key={index}>
                        <h3>{section.title}</h3>
                        <ul>
                            {section.links.map((link, i)=>(
                                <li key={i}>
                                    <a href="#">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                </div>
            </div>

            <div>
                Copyright 2025 © inQuick. By Bikram Roy – All Rights Reserved.
            </div>
            </div>
        );
        };
        export default Footer;


# Blog Page ----------
-------------------------------------------------------------------------------------------
pages- Blog.jsx
components- 

### npm i moment --(for convert standard time span into a user-frinedly time-date format)

20. client/src/pages/Blog.ejs  (we implemet in page directly and just for loding part use a component)
        import React, {useState, useEffect} from 'react'
        import {useParams} from 'react-router-dom';
        import {assets, blog_data, comments_data} from '../assets/assets'; //details of each blog(blog_data), and comments(comments_data)
        import Moment from 'moment';  //used to format date-time
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
                setComments(comments_data);  //comment_data is pre-defined data that present in 'assets'
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
                <div>

                {/* background set */}
                <img src={assets.gradientBackground} alt="" /> 

                {/* we import blog_data from assets and put it into 'data' set variable and iterate all of its keys */}

                {/* title, sub-title, author name */}
                <div>
                    <p>Published on {Moment(data.createdAt).format('MMMM Qo YYYY')}</p>
                    <h1>{data.title}</h1>
                    <h2 dangerouslySetInnerHTML={{__html:data.subTitle}}></h2>
                    <button onClick={()=>navigate(`/blog/${id}/author`)} >Bikram Roy</button>
                </div>

                {/* image, description, comments */}
                <div>

                    {/* image */}
                    <img src={data.image} alt="" />

                    {/* description */}
                    <div dangerouslySetInnerHTML={{__html:data.description}}></div>

                    {/* comments */}
                    <div> 
                    <p>Comments ({comments.length})</p> {/* no. of comments */}

                    <div>
                        {comments.map((item, index)=>(
                        <div key={index}>
                            <div>
                            <img src={assets.user_icon} alt="" />
                            <p>{item.name}</p>
                            </div>
                            <p>{item.content}</p>
                            <div>{Moment(item.createdAt).fromNow()}</div> {/* fromNow() record dates from current date  i.e. '1 day ago' or '2 months ago' */}
                        </div>
                        ))}
                    </div>
                    </div>

                    {/* add comment section */}
                    <div>
                        <p>Add your comment</p>
                        <form onSubmit={addComment}>
                        <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder='Name' required/>

                        <textarea onChange={(e)=>setContent(e.target.value)} value={content}  placeholder='Comment' required></textarea>

                        <button type='submit'>Submit</button>
                        </form>
                    </div>

                    {/* social media icon */}
                    <div>
                    <p>Share this article on social media</p>
                    <div>
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

21. client/src/components/ Loader.jsx  (page load then not-found if wrong id)
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
            <div>
                {/* init state have useState(false), so first it show 'loading...' then 'page-not-found' */}
            {showError ? (
                <div>Page Not Found...</div>
            ) : (
                <>
                <div></div>
                <div>Loading...</div>
                </>
            )}
            </div>
        );
        };
        export default Loader;

21. client/src/pages/Author.ejs  (when click on the "Author name" of the details of content)

        import React from 'react';

        const Author = () => {
        return (
            <div>
            
            <div>
                <p> Author Details</p>
            </div>

            {/* Name */}
            <h1>Bikram Roy</h1>

            {/* Qualification */}
            <p>
                MCA (First-Class First), BSc CS (CGPA: 8.589)
            </p>

            {/* Links */}
            <div>
                <a href="https://www.linkedin.com/in/roybikram1411/" target="_blank">LinkedIn</a>
                <a href="https://bikramroy.onrender.com/" target="_blank">Website</a>
            </div>
            </div>
        );
        };

export default Author;






























