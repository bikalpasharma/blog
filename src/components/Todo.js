import { useContext } from 'react'
import React from 'react'
// import DeleteModel from './DeleteModel';
// import Back from './Back'
import './Style.css'
import FavoritesContext from '../store/favorites-context';

function Todo(props) {
  const favCtx = useContext(FavoritesContext);
  const itemIsFav = favCtx.isFav(props.id);

//   const[modal,setmodal] = useState(false);
  // const[delmodal,setdelmodal] = useState(false);
  function favClick (){
    if (itemIsFav){
      favCtx.removeFav(props.id)
    }
    else{
      favCtx.addFav({
        id:props.id,
        title:props.title,
        desc: props.desc,
        image:props.image
      });
    }

  } 
  // function deleteClick (){
  //   setdelmodal(true);
  // }   
  return (
    <li className='todo-main' key={props.key}>
      <img src={props.desc} alt="not found" className='image'/>
        <h2>{props.title}</h2>
        <p>{props.image}</p>
        <button className="viewBtn" onClick={favClick}>{itemIsFav ? 'Remove From' : 'Add To' } Favorite</button>
        {/* <button className="deleteBtn" onClick={deleteClick}>Delete</button> */}
        
        {/* {delmodal && <DeleteModel onCancel={backClick} onConfirm={backClick}/>}
        {delmodal && <Back onClick={backClick}/>} */}
        {/* {delmodal && <DeleteModel/>}
        {delmodal && <Back/>} */}
       
    </li>
  )
}

export default Todo