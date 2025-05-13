const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const porta = 3000;

// Middleware para processar JSON e habilitar CORS
app.use(bodyParser.json());
app.use(cors());

// Array em memória para armazenar bicicletas (substituir por banco de dados em produção)
let bicicletas = [
  {
    id: uuidv4(),
    modelo: 'Mountain Bike Pro',
    imagem: 'https://images.tcdn.com.br/img/img_prod/613037/bicicleta_eletrica_eze_duo_609_1_ffaec27955199c448eac8d15bc9d9d9b_20250303164054.png',
    descricao: 'Bicicleta de montanha com suspensão dupla.',
    preco: '2500.00',
  },
  {
    id: uuidv4(),
    modelo: 'Bicicleta de Estrada Speed',
    imagem: 'https://images.tcdn.com.br/img/img_prod/613037/bicicleta_eletrica_autopropelida_eze_n2o_843_1_26c605e9b52c646c074f82db53d1fb3d_20250303164055.png',
    descricao: 'Bicicleta de estrada para alta performance.',
    preco: '3200.00',
  },
];

// GET: Obter todas as bicicletas
app.get('/api/bicicletas', (req, res) => {
  res.json(bicicletas);
});

// POST: Adicionar uma nova bicicleta
app.post('/api/bicicletas', (req, res) => {
  const novaBicicleta = {
    id: uuidv4(),
    modelo: req.body.modelo,
    imagem: req.body.imagem,
    descricao: req.body.descricao,
    preco: req.body.preco,
  };
  bicicletas.push(novaBicicleta);
  res.status(201).json(novaBicicleta);
});

// PUT: Atualizar uma bicicleta existente
app.put('/api/bicicletas/:id', (req, res) => {
  const id = req.params.id;
  const index = bicicletas.findIndex(b => b.id === id);
  if (index === -1) {
    return res.status(404).json({ erro: 'Bicicleta não encontrada' });
  }
  bicicletas[index] = {
    id,
    modelo: req.body.modelo,
    imagem: req.body.imagem,
    descricao: req.body.descricao,
    preco: req.body.preco,
  };
  res.json(bicicletas[index]);
});

// DELETE: Remover uma bicicleta
app.delete('/api/bicicletas/:id', (req, res) => {
  const id = req.params.id;
  const index = bicicletas.findIndex(b => b.id === id);
  if (index === -1) {
    return res.status(404).json({ erro: 'Bicicleta não encontrada' });
  }
  bicicletas = bicicletas.filter(b => b.id !== id);
  res.status(204).send();
});

// Iniciar o servidor
app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});