// This code sets up a 'React Context API '— a system for sharing global data (like user info, theme, or auth state) across components without having to pass props manually at every level.

import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'; //new
import toast from 'react-hot-toast';

axios.defaults.baseURL= import.meta.env.VITE_BASE_URL; //base url for making the api call into this axios package

const AppContext = createContext(); // Creates a context object named AppContext.  This object will hold shared global data.

export const AppProvider=({children})=>{

    //to stublish connection between pages/components we do not need to write navigate hook for each pages, instead we write it here and use it form context
    const navigate=useNavigate(); 

    const [token, setToken]=useState(null); //for user authentication
    const [blogs, setBlogs]=useState([]); //for all blogs data
    const [input, setInput]=useState('');  //for filter the blogs

    //fetch all blogs data  (new part)
    const fetchBlogs= async()=>{
        try {
            const {data} = await axios.get('/api/blog/all');
            data.success ? setBlogs(data.blogs) : toast.error(data.message)
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
    }; //value is an object that holds all the shared state or functions you want accessible throughout your app

    return(  //You return the Context Provider component.
        //The value prop is what will be shared with all children components.
        //  <AppContext.Provider> is like a container that passes data down to all its child components without manually sending it via props.
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}


//whenever we have to use the data fron context, we will call the 'useAppContext' function
//This is a custom hook that makes it easy to use your context.
export const useAppContext=()=>{ 
    return useContext(AppContext); 
}

