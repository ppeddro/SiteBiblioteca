class Node {
  constructor(chave, valor) {
    this.chave = chave;
    this.valor = valor;
    this.esquerda = null;
    this.direita = null;
  }
}

class BinaryTree {
  constructor() {
    this.raiz = null;
  }

  insert(chave, valor) {
    this.raiz = this._insert(this.raiz, chave, valor);
  }

  _insert(no, chave, valor) {
    if (no === null) {
      return new Node(chave, valor);
    }

    if (chave < no.chave) {
      no.esquerda = this._insert(no.esquerda, chave, valor);
    } else {
      no.direita = this._insert(no.direita, chave, valor);
    }

    return no;
  }

  inOrder() {
    const resultado = [];
    this._inOrder(this.raiz, resultado);
    return resultado;
  }

  _inOrder(no, resultado) {
    if (no !== null) {
      this._inOrder(no.esquerda, resultado);
      resultado.push(no.valor);
      this._inOrder(no.direita, resultado);
    }
  }
}

module.exports = BinaryTree;
