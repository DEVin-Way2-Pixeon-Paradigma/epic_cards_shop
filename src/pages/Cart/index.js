import {useContext} from 'react';
import { CartContext } from '../../contexts/Cart';

function Cart() {
  
  const cart = useContext(CartContext)

  return (
    <div>
     {cart.name}
    </div>
  );
}

export default Cart;