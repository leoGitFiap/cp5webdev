import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Bicicletas from './Bicicletas';
import Sobre from './Sobre';
import Contato from './Contato';
import Footer from './Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bicicletas" element={<Bicicletas />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;