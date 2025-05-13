package com.biblioteca;

import java.util.ArrayList;
import java.util.List;

public class DatabaseLivros {
    private static List<Livro> livros = new ArrayList<>();
    private static int proximoId = 1;

    public static void adicionarLivro(String titulo, String autor) {
        livros.add(new Livro(proximoId++, titulo, autor));
    }

    public static List<Livro> listarLivros() {
        return livros;
    }

    public static Livro buscarPorId(int id) {
        return livros.stream().filter(l -> l.getId() == id).findFirst().orElse(null);
    }

    public static void removerLivro(int id) {
        livros.removeIf(l -> l.getId() == id);
    }

    public static void emprestarLivro(int id) {
        Livro l = buscarPorId(id);
        if (l != null && l.isDisponivel()) {
            l.setDisponivel(false);
        }
    }

    public static void devolverLivro(int id) {
        Livro l = buscarPorId(id);
        if (l != null && !l.isDisponivel()) {
            l.setDisponivel(true);
        }
    }
}
