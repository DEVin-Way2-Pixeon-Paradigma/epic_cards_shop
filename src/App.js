
import './App.css';
import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Cards from './pages/Cards';
import About from './pages/About';

function App() {
   return (
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/cards" element={<Cards />} />
       <Route path="/about" element={<About />} />
     </Routes>
   )
}

export default App;
