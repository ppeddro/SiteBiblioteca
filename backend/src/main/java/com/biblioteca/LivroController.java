package com.biblioteca;

import java.util.List;

public class LivroController {
    public void adicionar(String titulo, String autor) {
        DatabaseLivros.adicionarLivro(titulo, autor);
    }

    public List<Livro> listar() {
        return DatabaseLivros.listarLivros();
    }

    public void emprestar(int id) {
        DatabaseLivros.emprestarLivro(id);
    }

    public void devolver(int id) {
        DatabaseLivros.devolverLivro(id);
    }

    public void remover(int id) {
        DatabaseLivros.removerLivro(id);
    }

    public Livro buscar(int id) {
        return DatabaseLivros.buscarPorId(id);
    }
}
