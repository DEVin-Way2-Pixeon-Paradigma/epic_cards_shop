import { useEffect, useState, useRef, useContext } from 'react';

import { Link, useParams } from 'react-router-dom';

import Card from '../../components/Card';

import { CartContext } from '../../contexts/Cart';

function Cards() {

  const {addItem} = useContext(CartContext)
  
  const params = useParams();

  const inputRef = useRef(null)
  const [cards, setCards] = useState([])

  //Query params 
  useEffect(() => {

    async function handleGetCard() {
      const response = await fetch(
        `http://localhost:3333/cards?race=${params.category}`
      )
      const data = await response.json()
      setCards(data)
    }

    console.log('entrei')

    handleGetCard();
  }, [params.category])

  return (
    <div>

  
      <Link to="/about">Ir para página sobre</Link>
      <h1>Total de cards: {cards.length}</h1>
      <div className='container'>
        {
          cards.map((card) =>
            <div>
              <Card
                key={card.id}
                name={card.name}
                image={card.card_images[0].image_url_small}
                type={card.type}
              />
              <button
                onClick={() => {
                  addItem(card)
                }}>Adicionar</button>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default Cards;
