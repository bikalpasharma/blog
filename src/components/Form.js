import React, {useRef} from 'react'
import classes from '../pages/pageStyle.module.css'

function Form(props) {
    const titleInputRef = useRef();
    const descInputRef = useRef();
    const imageInputRef = useRef();
    function submitHandler(event) {
      event.preventDefault();
  
      const enteredTitle = titleInputRef.current.value;
      const enteredDesc = descInputRef.current.value;
      const enteredImage = imageInputRef.current.value;
  
      const blogData = {
        title: enteredTitle,
        desc: enteredDesc,
        image: enteredImage
      };
  
      props.onAddBlog(blogData);
      
    }
  return (
    <div>
        <h2 className={classes.headtop}>ADD NEW BLOG</h2>
      <div className={classes.blogitems}>
        <form className={classes.form}  onSubmit={submitHandler}>
          <label htmlFor='title' className={classes.label}>BLOG TITLE</label>
          <input id="title" type="text" className={classes.formText} placeholder='Enter Blog Title' ref={titleInputRef}/>

          <label htmlFor='image' className={classes.label}>BLOG IMAGE URL</label>
          <input id='image' type="url" className={classes.formText} placeholder='Enter Image URL' ref={descInputRef}/>

          <label htmlFor='description' className={classes.label}>BLOG DESCRIPTION</label>
          <textarea id='description' required rows='4' className={classes.formTextarea} placeholder='Enter Blog Description' ref={imageInputRef}/>

          <button className={classes.btn}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Form