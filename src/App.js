import { useEffect, useState, useRef } from 'react';
import './App.css';
import Card from './Components/Card';

function App() {

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
      <h1>Total de cards: {cards.length}</h1>
      <div className='container'>
        {
          cards.map((card) =>
            <Card
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

export default App;
