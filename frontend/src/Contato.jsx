import { useState } from 'react';

function Contato() {
  const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    console.log('Formulário enviado:', formData);
    setStatus('Mensagem enviada com sucesso!');
    setFormData({ nome: '', email: '', mensagem: '' });
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Entre em Contato</h2>
      <div className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="nome">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            className="w-full p-2 border rounded"
            value={formData.nome}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="email">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="mensagem">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            className="w-full p-2 border rounded h-32"
            value={formData.mensagem}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Enviar Mensagem
        </button>
        {status && <p className="mt-4 text-green-500">{status}</p>}
      </div>
    </div>
  );
}

export default Contato;