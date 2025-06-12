const express = require('express');
const cors = require('cors');
const fs = require('fs');
const BinaryTree = require('./binaryTree');

const app = express();
const port = 3000;

app.use(cors());

// Carregar livros
const livros = JSON.parse(fs.readFileSync('./books.json'));

// Criar árvore binária
const tree = new BinaryTree();
livros.forEach(livro => {
    tree.insert(livro.titulo, livro);  // Usando título como chave
});

// Rota para pegar livros ordenados
app.get('/api/books', (req, res) => {
    const livrosOrdenados = tree.inOrder();
    res.json(livrosOrdenados);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
