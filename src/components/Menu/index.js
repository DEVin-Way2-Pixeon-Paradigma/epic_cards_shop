import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/Cart';

function Menu() {

  const {cart} = useContext(CartContext)
 
  return (
    <nav className='menu'>
      {cart.length} no carrinho
      <h1 className='menu-title'>Epic Cards Shop</h1>
      <ul className='menu-list'>
        <li><Link to="/" className='menu-list-item'>Home</Link></li>
        <li><Link to="/cart" className='menu-list-item' >Cart</Link></li>
        <li><Link to="/lista_desejos" className='menu-list-item'>Lista de desejos</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;