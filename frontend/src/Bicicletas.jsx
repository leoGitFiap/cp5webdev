import axios from 'axios';
import { useState, useEffect } from 'react';

function Bicicletas() {
  const [bicicletas, setBicicletas] = useState([]);
  const [novaBicicleta, setNovaBicicleta] = useState({ modelo: '', imagem: '', descricao: '', preco: '' });
  const [editandoBicicleta, setEditandoBicicleta] = useState(null);

  // Função para buscar bicicletas
  const buscarBicicletas = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/bicicletas');
      setBicicletas(response.data);
    } catch (error) {
      console.error('Erro ao buscar bicicletas:', error);
    }
  };

  // Função para adicionar bicicleta
  const adicionarBicicleta = async () => {
    try {
      await axios.post('http://localhost:3000/api/bicicletas', novaBicicleta);
      setNovaBicicleta({ modelo: '', imagem: '', descricao: '', preco: '' });
      buscarBicicletas(); // Atualiza a lista após a adição
    } catch (error) {
      console.error('Erro ao adicionar bicicleta:', error);
    }
  };

  // Função para atualizar bicicleta
  const atualizarBicicleta = async () => {
    if (!editandoBicicleta || !editandoBicicleta.id) return;
    try {
      await axios.put(`http://localhost:3000/api/bicicletas/${editandoBicicleta.id}`, editandoBicicleta);
      setEditandoBicicleta(null); // Limpa o estado de edição
      buscarBicicletas(); // Atualiza a lista após a edição
    } catch (error) {
      console.error('Erro ao atualizar bicicleta:', error);
    }
  };

  // Função para deletar bicicleta
  const deletarBicicleta = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/bicicletas/${id}`);
      buscarBicicletas(); // Atualiza a lista após a exclusão
    } catch (error) {
      console.error('Erro ao deletar bicicleta:', error);
    }
  };

  // Hook para buscar as bicicletas ao carregar o componente
  useEffect(() => {
    buscarBicicletas();
  }, []);

  return (
    <div>
      <h2>Bicicletas</h2>
      {/* Renderizar bicicletas */}
      <ul>
        {bicicletas.map((bicicleta) => (
          <li key={bicicleta.id}>
            <h3>{bicicleta.modelo}</h3>
            <img src={bicicleta.imagem} alt={bicicleta.modelo} />
            <p>{bicicleta.descricao}</p>
            <p>R${bicicleta.preco}</p>
            <button onClick={() => deletarBicicleta(bicicleta.id)}>Deletar</button>
            <button onClick={() => setEditandoBicicleta(bicicleta)}>Editar</button>
          </li>
        ))}
      </ul>

      {/* Formulário de adicionar ou editar bicicleta */}
      <h3>{editandoBicicleta ? 'Editar Bicicleta' : 'Adicionar Bicicleta'}</h3>
      <input
        type="text"
        placeholder="Modelo"
        value={editandoBicicleta ? editandoBicicleta.modelo : novaBicicleta.modelo}
        onChange={(e) =>
          editandoBicicleta
            ? setEditandoBicicleta({ ...editandoBicicleta, modelo: e.target.value })
            : setNovaBicicleta({ ...novaBicicleta, modelo: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Imagem"
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
        value={editandoBicicleta ? editandoBicicleta.preco : novaBicicleta.preco}
        onChange={(e) =>
          editandoBicicleta
            ? setEditandoBicicleta({ ...editandoBicicleta, preco: e.target.value })
            : setNovaBicicleta({ ...novaBicicleta, preco: e.target.value })
        }
      />
      <button onClick={editandoBicicleta ? atualizarBicicleta : adicionarBicicleta}>
        {editandoBicicleta ? 'Atualizar' : 'Adicionar'}
      </button>
    </div>
  );
}

export default Bicicletas;
