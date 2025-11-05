import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Sobre from './pages/sobre/Sobre';
import Produto from './pages/produto/Produto';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />

      <div className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/produto" element={<Produto />} />
        </Routes>
      </div>

      
    </BrowserRouter>
    </>
  );
}

export default App;
