import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cards from './pages/Cards';
import About from './pages/About';
import Cart from './pages/Cart';

import Menu from './components/Menu';

import { CartProvider } from './contexts/Cart'
// http://locahost:3000/cards/dinosauro
// http://locahost:3000/cards/fada
// http://locahost:3000/cards/dragao

function App() {
  return (
    <>
      <CartProvider>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards/:category" element={<Cards />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </>
  )
}

export default App;
