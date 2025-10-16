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
import 'quill/dist/quill.snow.css'

import {Toaster} from 'react-hot-toast';
import {useAppContext} from './context/AppContext'

function App() {
  const {token}= useAppContext();

  return (
    <>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/blog/:id/author" element={<Author />} />

        {/* route setup for admin- with parent-child path*/}
        {/* when we go to the '/admin' path the 'Layout' page will be display first */}
        <Route path="/admin" element={token ? <Layout/> : <Login/>}> {/* parent path */} {/*if true, then go-to <Layout/> page otherwise <Login/> */}
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