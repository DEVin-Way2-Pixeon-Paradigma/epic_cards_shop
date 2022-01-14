import { useEffect, useState, useContext } from 'react';

import { useParams } from 'react-router-dom';

import Card from '../../components/Card';

import { CartContext } from '../../contexts/Cart';

function Cards() {

  const { addItem } = useContext(CartContext)

  const params = useParams();

  const [currentPage, setCurrentPage] = useState(1);

  const [cards, setCards] = useState([])

  //Query params 
  useEffect(() => {
    async function handleGetCard() {
      const response = await fetch(
        `http://localhost:3333/cards?race=${params.category}&_page=${currentPage}&_limit=${15}`
      )
      const data = await response.json()
      setCards([...cards, ...data])
    }


    handleGetCard();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.category, currentPage])

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setCurrentPage((currentValue) => currentValue + 1);
      }
    })
    intersectionObserver.observe(document.querySelector('#sentinela'));
    return () => intersectionObserver.disconnect();
  }, []);
  
  return (
    <div>
      <h1>Total de cards: {cards.length}</h1>
      {currentPage}
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
        <p id="sentinela"></p>
      </div>
    </div>
  );
}

export default Cards;
