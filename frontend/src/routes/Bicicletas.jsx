import axios from 'axios';
import { useState, useEffect } from 'react';

function Bicicletas() {
  const [bicicletas, setBicicletas] = useState([]);
  const [novaBicicleta, setNovaBicicleta] = useState({ modelo: '', imagem: '', descricao: '', preco: '' });
  const [editandoBicicleta, setEditandoBicicleta] = useState(null);

  const buscarBicicletas = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/bicicletas');
      setBicicletas(response.data);
    } catch (error) {
      console.error('Erro ao buscar bicicletas:', error);
    }
  };

  const adicionarBicicleta = async () => {
    try {
      await axios.post('http://localhost:3000/api/bicicletas', novaBicicleta);
      setNovaBicicleta({ modelo: '', imagem: '', descricao: '', preco: '' });
      buscarBicicletas();
    } catch (error) {
      console.error('Erro ao adicionar bicicleta:', error);
    }
  };

  const atualizarBicicleta = async () => {
    if (!editandoBicicleta || !editandoBicicleta.id) return;
    try {
      await axios.put(`http://localhost:3000/api/bicicletas/${editandoBicicleta.id}`, editandoBicicleta);
      setEditandoBicicleta(null);
      buscarBicicletas();
    } catch (error) {
      console.error('Erro ao atualizar bicicleta:', error);
    }
  };

  const deletarBicicleta = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/bicicletas/${id}`);
      buscarBicicletas();
    } catch (error) {
      console.error('Erro ao deletar bicicleta:', error);
    }
  };

  useEffect(() => {
    buscarBicicletas();
  }, []);

  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold text-center text-primary mb-12">Nossas Bicicletas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {bicicletas.map((bicicleta) => (
          <div key={bicicleta.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition">
            <img src={bicicleta.imagem} alt={bicicleta.modelo} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{bicicleta.modelo}</h3>
              <p className="mt-2 text-gray-600">{bicicleta.descricao}</p>
              <p className="mt-3 text-lg font-bold text-primary">R${bicicleta.preco}</p>
              <div className="mt-4 flex space-x-3">
                <button
                  onClick={() => deletarBicicleta(bicicleta.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                >
                  Deletar
                </button>
                <button
                  onClick={() => setEditandoBicicleta(bicicleta)}
                  className="bg-secondary text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-400 transition"
                >
                  Editar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-lg mx-auto mt-16 bg-white shadow-lg rounded-lg p-8">
        <h3 className="text-2xl font-bold text-primary mb-6">
          {editandoBicicleta ? 'Editar Bicicleta' : 'Adicionar Bicicleta'}
        </h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Modelo"
            className="w-full p  p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={editandoBicicleta ? editandoBicicleta.modelo : novaBicicleta.modelo}
            onChange={(e) =>
              editandoBicicleta
                ? setEditandoBicicleta({ ...editandoBicicleta, modelo: e.target.value })
                : setNovaBicicleta({ ...novaBicicleta, modelo: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="URL da Imagem"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={editandoBicicleta ? editandoBicicleta.imagem : novaBicicleta.imagem}
            onChange={(e) =>
              editandoBicicleta
                ? setEditandoBicicleta({ ...editandoBicicleta, imagem: e.target.value })
                : setNovaBicicleta({ ...novaBicicleta, imagem: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Descrição"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={editandoBicicleta ? editandoBicicleta.descricao : novaBicicleta.descricao}
            onChange={(e) =>
              editandoBicicleta
                ? setEditandoBicicleta({ ...editandoBicicleta, descricao: e.target.value })
                : setNovaBicicleta({ ...novaBicicleta, descricao: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Preço"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={editandoBicicleta ? editandoBicicleta.preco : novaBicicleta.preco}
            onChange={(e) =>
              editandoBicicleta
                ? setEditandoBicicleta({ ...editandoBicicleta, preco: e.target.value })
                : setNovaBicicleta({ ...novaBicicleta, preco: e.target.value })
            }
          />
          <button
            onClick={editandoBicicleta ? atualizarBicicleta : adicionarBicicleta}
            className="w-full bg-primary text-black px-6 py-3 rounded-lg hover:bg-blue-700 hover:text-white transition"
          >
            {editandoBicicleta ? 'Atualizar' : 'Adicionar'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bicicletas;