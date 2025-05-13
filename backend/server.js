const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Simulação de "banco de dados" com bicicletas
let bicicletas = [
  {
    id: 1,
    modelo: "Speed Pro",
    descricao: "Bicicleta leve para velocidade.",
    preco: 2500,
    imagem: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    modelo: "Mountain Max",
    descricao: "Para trilhas e terrenos difíceis.",
    preco: 3200,
    imagem: "https://via.placeholder.com/150"
  }
];

// Rota para listar todas as bicicletas
app.get('/bicicletas', (req, res) => {
  res.json(bicicletas);
});

// Rota para adicionar nova bicicleta
app.post('/bicicletas', (req, res) => {
  const nova = { id: Date.now(), ...req.body };
  bicicletas.push(nova);
  res.status(201).json(nova);
});

// Rota para editar bicicleta
app.put('/bicicletas/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = bicicletas.findIndex(b => b.id === id);
  if (index !== -1) {
    bicicletas[index] = { ...bicicletas[index], ...req.body };
    res.json(bicicletas[index]);
  } else {
    res.status(404).json({ error: 'Bicicleta não encontrada' });
  }
});

// Rota para deletar bicicleta
app.delete('/bicicletas/:id', (req, res) => {
  const id = Number(req.params.id);
  bicicletas = bicicletas.filter(b => b.id !== id);
  res.status(204).send();
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
