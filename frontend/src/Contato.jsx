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
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold text-center text-primary mb-10">Entre em Contato</h2>
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="nome">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Digite seu nome"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.email}
              onChange={handleChange}
              placeholder="Digite seu e-mail"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="mensagem">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              className="w-full p-3 border border-gray-300 rounded-lg h-40 focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.mensagem}
              onChange={handleChange}
              placeholder="Escreva sua mensagem"
            ></textarea>
          </div>
          <button
            className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            onClick={handleSubmit}
          >
            Enviar Mensagem
          </button>
          {status && <p className="mt-4 text-success text-center font-medium">{status}</p>}
        </div>
      </div>
    </div>
  );
}

export default Contato;