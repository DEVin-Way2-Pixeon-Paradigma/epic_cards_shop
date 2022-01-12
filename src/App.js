
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cards from './pages/Cards';
import About from './pages/About';
import Menu from './components/Menu';

// http://locahost:3000/cards/dinosauro
// http://locahost:3000/cards/fada
// http://locahost:3000/cards/dragao

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards/:category" element={<Cards />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App;
