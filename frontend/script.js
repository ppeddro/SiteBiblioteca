  function abrirModal() {
    document.getElementById('modalLogin').style.display = 'flex';
  }

  function fecharModal() {
    document.getElementById('modalLogin').style.display = 'none';
  }

  let todosOsLivros = []; // Guardar todos os livros

async function carregarLivros() {
  try {
    const resposta = await fetch('http://localhost:3000/api/books');
    const livros = await resposta.json();
    todosOsLivros = livros; // Guardar todos os livros para usar na busca
    exibirLivros(livros);
  } catch (erro) {
    console.error('Erro ao carregar livros:', erro);
  }
}

function exibirLivros(lista) {
  const container = document.getElementById('livros-container');
  container.innerHTML = ''; // Limpa antes de exibir

  lista.forEach(livro => {
    const card = document.createElement('div');
    card.classList.add('livro-card');

    card.innerHTML = `
      <img src="${livro.imagem}" alt="${livro.titulo}">
      <div class="livro-info">
        <h2>${livro.titulo}</h2>
        <p>${livro.autor}</p>
      </div>
    `;

    container.appendChild(card);
  });
}

// Escuta o campo de busca
document.querySelector('.search-input').addEventListener('input', function () {
  const termo = this.value.toLowerCase();

  const livrosFiltrados = todosOsLivros.filter(livro =>
    livro.titulo.toLowerCase().includes(termo) ||
    livro.autor.toLowerCase().includes(termo)
  );

  exibirLivros(livrosFiltrados);
});

