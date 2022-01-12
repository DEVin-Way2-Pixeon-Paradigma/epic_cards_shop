import React from 'react';
import { Link } from 'react-router-dom';

const TYPES = [
  "Aqua",
  "Beast-Warrior",
  "Cyberse",
  "Dinosaur",
  "Dragon",
  "Fairy",
  "Fish",
  "Insect",
  "Machine",
  "Plant",
  "Rock",
  "Warrior",
  "Spellcaster"
];

function Home() {
  return (
    <div className='container-app'>
      {TYPES.map((type) =>
        <div className='category-item' key={type}>
          <Link to={`/cards/${type}`}>{type}</Link>
        </div>
        )
        }
    </div>

  );
}

export default Home;