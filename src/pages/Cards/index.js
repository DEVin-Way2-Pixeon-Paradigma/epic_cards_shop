import { useEffect, useState, useRef, useContext } from 'react';

import { Link, useParams } from 'react-router-dom';

import Card from '../../components/Card';

import { CartContext } from '../../contexts/Cart';

function Cards() {

  const { addItem } = useContext(CartContext)

  const params = useParams();

  const inputRef = useRef(null)
  const [cards, setCards] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const handleGetMoreItens = async () => {

    const response = await fetch(
      `http://localhost:3333/cards?race=${params.category}&_limit=10&_page=${currentPage + 1}
      `
    )
    
    const data = await response.json()
    setCards([...cards, ...data])
    setCurrentPage(currentPage + 1)
  }


  //Query params 
  useEffect(() => {
    async function handleGetCard() {
      const response = await fetch(
        `http://localhost:3333/cards?race=${params.category}&_limit=10&_page=${currentPage}
        `
      )
      const data = await response.json()
      setCards(data)
    }
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
                }}>
                Adicionar
              </button>
            </div>
          )
        }
        <button onClick={handleGetMoreItens}>trazer mais</button>
      </div>
    </div>
  );
}

export default Cards;
