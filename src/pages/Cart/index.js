import { useContext } from 'react';
import { CartContext } from '../../contexts/Cart';

function Cart() {

  const { cart } = useContext(CartContext)

  return (
    <div>
      <table className='table-cart'>
        <thead>
          <th>#</th>
          <th>Nome</th>
          <th>Preço</th>
        </thead>
        <tbody>
          {cart.map(item =>
            <tr>
              <td>
                <img
                  src={item.card_images[0].image_url_small}
                  alt="Foto da carta"
                  className="table-image"
                />
              </td>
              <td>{item.name}</td>
              <td>{
                new Intl.NumberFormat(
                  'pt-BR',
                  { style: 'currency', currency: 'BRL' }
                ).format(item.card_prices[0].cardmarket_price)
              }</td>
            </tr>
          )}
        </tbody>
      </table>


    </div>
  );
}

export default Cart;