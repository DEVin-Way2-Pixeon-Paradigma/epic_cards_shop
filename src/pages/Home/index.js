import React from 'react';

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
      
        {TYPES.map((type) => <div className='category-item'>{type}</div>)}
      
    </div>

  );
}

export default Home;