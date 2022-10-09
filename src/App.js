import React from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom';
import AllBlogs from './pages/AllBlogs';
import Favorites from './pages/Favorites';
import NewBlog from './pages/NewBlog';
import Layout from './components/layout/Layout'
function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllBlogs/>}/>
        <Route path='/add-blog' element={<NewBlog/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
    </Layout>
  )
}

export default App