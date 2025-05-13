package com.biblioteca;

public class App {
    public static void main(String[] args) {
        LivroController controller = new LivroController();

        controller.adicionar("Dom Casmurro", "Machado de Assis");
        controller.adicionar("O Hobbit", "J.R.R. Tolkien");

        System.out.println("Lista de Livros:");
        for (Livro l : controller.listar()) {
            System.out.println(l.getId() + " - " + l.getTitulo() + " (" + l.getAutor() + ")");
        }

        controller.emprestar(1);
        Livro livro = controller.buscar(1);
        System.out.println("Livro emprestado? " + !livro.isDisponivel());
    }
}
