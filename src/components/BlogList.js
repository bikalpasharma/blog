import Todo from "./Todo";
import './Style.css'
import React from 'react'

function BlogList(props) {
  return (
    <ul className="allblogs">
    
            {props.blogs.map((blog) => (
              <Todo 
              key = {blog.key} 
              id = {blog.id}
              image = {blog.image}
              title = {blog.title}
              desc = {blog.desc}

              /> 
            ))}
    
    </ul>
  )
}

export default BlogList