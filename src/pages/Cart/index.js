import { useContext } from 'react';
import { CartContext } from '../../contexts/Cart';
import { MdDelete } from "react-icons/md";
import { Table, THeader, TBody, CartPhoto, Row, RowItem, Button } from './styles';

import Container from '../../components/Container';

import {useNavigate} from 'react-router-dom'

function Cart() {

  const history = useNavigate()

  const { cart, removeItem } = useContext(CartContext)

  function handleRedirect() {
    history('/checkout')
  }

  return (
    <Container>
     <Button onClick={handleRedirect}>Finalizar compra</Button>
    <Table>
      <THeader>
        <th>#</th>
        <th>Nome</th>
        <th>Preço</th>
        <th>Deletar</th>
      </THeader>
      <TBody>
        {cart.map(item =>
          <Row>
            <RowItem>
              <CartPhoto
                src={item.card_images[0].image_url_small}
                alt="Foto da carta"
              />
            </RowItem>
            <RowItem>{item.name}</RowItem>
            <RowItem>{
              new Intl.NumberFormat(
                'pt-BR',
                { style: 'currency', currency: 'BRL' }
              ).format(item.card_prices[0].cardmarket_price)
            }
            </RowItem>
            <RowItem>
              <MdDelete
                size={30}
                color="#EC6D08"
                onClick={() => removeItem(item.idCard)}
              />
            </RowItem>
          </Row>
        )}
      </TBody>
    </Table>
    </Container>
  );
}

export default Cart;