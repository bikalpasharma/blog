import React from 'react';
import  { useNavigate }  from 'react-router-dom';
import Form from '../components/Form';

function NewBlog() {
  const navigate = useNavigate();
  function addBlogHandler(blogData)
  {
    fetch(
      'https://blog-438ec-default-rtdb.firebaseio.com/blogs.json',
    {
      method: 'POST',
      body: JSON.stringify(blogData),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    .then(() => {
        navigate('/',{ replace: true});
    }
    );
  }
  return (
    <div>
      <Form onAddBlog={addBlogHandler}/>
    </div>
  )
}

export default NewBlog