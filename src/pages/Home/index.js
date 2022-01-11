import { useEffect, useState, useRef } from 'react';

import {Link} from 'react-router-dom';

import Card from '../../components/Card';

function Home() {

  const inputRef = useRef(null)
  const [cards, setCards] = useState([])

  //Query params 
  useEffect(() => {

    async function handleGetCard() {
      const response = await fetch('http://localhost:3333/cards?_limit=18')
      const data = await response.json()
      setCards(data)
    }

    handleGetCard();
  }, [])

  return (
    <div>
      <input placeholder='Pesquisa'   ref={inputRef}/>

      <Link to="/about">Ir para página sobre</Link>
      <h1>Total de cards: {cards.length}</h1>
      <div className='container'>
        {
          cards.map((card) =>
            <Card
              key={card.id}
              name={card.name}
              image={card.card_images[0].image_url_small}
              type={card.type}
            />
          )
        }
      </div>
    </div>
  );
}

export default Home;
