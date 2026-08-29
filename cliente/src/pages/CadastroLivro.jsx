import { useState } from "react"
import styles from "./CadastroLivro.module.css"

export function CadastroLivro() {
  const [titulo, setTitulo] = useState("")
  const [autor, setAutor] = useState("")
  const [categoria, setCategoria] = useState("")
  const [quantidade, setQuantidade] = useState("")

  function cadastrarLivro() {
    const livro = {
      titulo,
      autor,
      categoria,
      quantidade
    }

    console.log(livro)
  }

  return (
    <main className={styles.cadastroLivro}>
      <div className={styles.cadastroContainer}>
        <h1>Cadastrar Livro</h1>

        <div className={styles.campo}>
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            id="titulo"
            placeholder="Digite o título do livro"
            value={titulo}
            onChange={(event) => setTitulo(event.target.value)}
          />
        </div>

        <div className={styles.campo}>
          <label htmlFor="autor">Autor</label>
          <input
            type="text"
            id="autor"
            placeholder="Digite o nome do autor"
            value={autor}
            onChange={(event) => setAutor(event.target.value)}
          />
        </div>

        <div className={styles.campo}>
          <label htmlFor="categoria">Categoria</label>

          <select
            id="categoria"
            value={categoria}
            onChange={(event) => setCategoria(event.target.value)}
          >
            <option value="">Selecione uma categoria</option>
            <option value="Romance">Romance</option>
            <option value="Fantasia">Fantasia</option>
            <option value="Ficção Científica">Ficção Científica</option>
            <option value="Terror">Terror</option>
            <option value="Suspense">Suspense</option>
            <option value="Biografia">Biografia</option>
            <option value="Tecnologia">Tecnologia</option>
          </select>
        </div>

        <div className={styles.campo}>
          <label htmlFor="quantidade">Quantidade</label>
          <input
            type="number"
            id="quantidade"
            min="1"
            placeholder="Digite a quantidade"
            value={quantidade}
            onChange={(event) => setQuantidade(event.target.value)}
          />
        </div>

        <button
          type="button"
          className={styles.botao}
          onClick={cadastrarLivro}
        >
          Cadastrar Livro
        </button>
      </div>
    </main>
  )
}