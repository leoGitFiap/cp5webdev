import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './routes/Home';
import Bicicletas from './routes/Bicicletas';
import Sobre from './routes/Sobre';
import Contato from './routes/Contato';
import Footer from './components/Footer';

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