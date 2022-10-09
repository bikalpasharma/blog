import React, { useState, useEffect } from 'react'
import BlogList from '../components/BlogList';
import classes from './pageStyle.module.css'

function AllBlogs() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedBlog,setLoadedBlog] = useState([]);
  
  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://blog-438ec-default-rtdb.firebaseio.com/blogs.json',
    )
    .then(response => {
      return response.json();
    })
    .then(data => {
      const blogs = [];

      for (const key in data) {
        const blog = {
          id:key,
          ...data[key]
        };
        blogs.push(blog)
      }
      setIsLoading(false);
      setLoadedBlog(blogs);
    });
  }, []);
  
  if(isLoading){
    return (
      <div>
        <h1 className={classes.headtop}>Loading...</h1>
      </div>
    )
  }
  return (
    <div>
      <h2 className={classes.headtop}>ALL BLOGS</h2>
      <div className={classes.blogitems}>
        <BlogList blogs={loadedBlog}/>
          {/* {
            blogs.map(blog => {
              return (
                <Todo key={blog.id} title={blog.title} desc={blog.desc} img={blog.img} />
              )
            })
          }  */}
      
    </div>
    </div >
  )
}

export default AllBlogs