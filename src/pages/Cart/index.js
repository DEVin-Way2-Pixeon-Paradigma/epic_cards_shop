import {useContext} from 'react';
import { CartContext } from '../../contexts/Cart';

function Cart() {

  const {cart} = useContext(CartContext)

  return (
    <div>
     {cart.map(item => <div>{item.name} - {item.card_prices[0].cardmarket_price}</div>)}
    </div>
  );
}

export default Cart;