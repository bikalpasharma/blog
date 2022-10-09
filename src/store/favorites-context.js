import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFav: (favBlog) => {},
    removeFav: (blogId) => {},
    isFav: (blogId) => {}
});

export function FavoritesContextProvider(props) {
    const [fav, setFav] = useState([]);
    function addFavHandler(favBlog) {
        setFav((prev) => {
            return prev.concat(favBlog);
        });
    }
    function removeFavHandler(blogId) {
        setFav((prev) => {
            return prev.filter(blog => blog.id !== blogId);
        });
    }
    function isItemFavHandler(blogId) {
        return fav.some(blog => blog.id === blogId);
    }
    const context = {
        favorites: fav,
        totalFavorites: fav.length,
        addFav: addFavHandler,
        removeFav: removeFavHandler,
        isFav: isItemFavHandler
    };
    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;