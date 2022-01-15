import React, { useContext } from 'react';
import { FavoritesContext } from '../../contexts/Favorites';

function About() {

  const { favorites } = useContext(FavoritesContext)
  return <ol>
    {favorites.map(favorite => (
      <li>{favorite}</li>
    ))}
  </ol>;
}

export default About;