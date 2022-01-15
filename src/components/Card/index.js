import React, { useContext } from 'react';
import { FaCartPlus, FaHeart } from 'react-icons/fa';

import { CartContext } from '../../contexts/Cart';
import { FavoritesContext } from '../../contexts/Favorites';

function Card({ data }) {

  const {addItem} = useContext(CartContext)
  const {addFavorite} = useContext(FavoritesContext)

  return (
    <div className='item-card'>
      <img
        src={data.card_images[0].image_url_small}
        alt="Foto da carta"
        className='item-card-photo'
      />
      <span className="item-card-name">{data.name}</span>
      <span>{data.type}</span>

      <div className='footer-card'>
        <FaCartPlus
          onClick={() => {
            addItem(data)
          }} />

        <FaHeart  onClick={() => {
          addFavorite(data.name)
        }}/>
      </div>
    </div>
  );
}

export default Card;