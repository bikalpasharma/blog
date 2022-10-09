import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FavoritesContext from '../../store/favorites-context';
import classes from './Navbar.module.css'

function Navbar() {
    const favCtx = useContext(FavoritesContext);
  return (
    <div className={classes.header}>
        <div className={classes.logo}>
            <Link to ="/">Blog By Buzz</Link>
        </div>
        <nav>
            <ul>
                <li>
                    <Link to ="/">Home</Link>
                </li>
                <li>
                    <Link to ="/add-blog">Add New</Link>
                </li>
                <li>
                    <Link to ="/favorites">Favorites <span className={classes.badge}>{favCtx.totalFavorites}</span></Link>
                </li>
                <li>
                    <Link to ="#">Login</Link>
                </li>

            </ul>
        </nav>
    </div>
  )
}

export default Navbar