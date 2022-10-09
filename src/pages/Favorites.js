import React, { useContext } from 'react'
import BlogList from '../components/BlogList';
import FavoritesContext from '../store/favorites-context'
import classes from './pageStyle.module.css'

function Favorites() {
  const favCtx = useContext(FavoritesContext);
  let content;

  if(favCtx.totalFavorites === 0 ){
    content= <p className={classes.pfav}>No Favorites yet.....</p>
  }
  return (
    <div>
     <h2 className={classes.headtop}>FAVORITE BLOGS</h2>
     {
      content
     }
     <BlogList blogs = {favCtx.favorites}/>
    </div>
  )
}

export default Favorites