import { createContext, useState } from "react";

export const FavoritesContext = createContext([]);

export function FavoritesProvider({children}) {

  const [favorites, setFavorites] = useState([])

  function handleAddFavorite(name) {
    setFavorites([...favorites, name])
  }
  
  return (
    <FavoritesContext.Provider value={{
      favorites: favorites,
      addFavorite: handleAddFavorite
    }}>
      {children}
    </FavoritesContext.Provider>
  )
}
