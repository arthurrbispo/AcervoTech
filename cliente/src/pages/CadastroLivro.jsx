import { useState } from "react"
import { api } from "../services/api"
import styles from "./CadastroLivro.module.css"

export function CadastroLivro() {
  const [titulo, setTitulo] = useState("")
  const [autor, setAutor] = useState("")
  const [categoria, setCategoria] = useState("")
  const [anoPublicacao, setAnoPublicacao] = useState("")
  const [quantidade, setQuantidade] = useState("")

  const [mensagem, setMensagem] = useState("")
  const [erro, setErro] = useState("")

  function cadastrarLivro() {
    const livro = {
      titulo,
      autor,
      categoria,
      anoPublicacao: Number(anoPublicacao),
      quantidade: Number(quantidade)
    }

    setMensagem("")
    setErro("")

    api
      .post("/livros", livro)
      .then((response) => {
        console.log("Livro cadastrado:", response.data)

        setMensagem("Livro cadastrado com sucesso!")

        setTitulo("")
        setAutor("")
        setCategoria("")
        setAnoPublicacao("")
        setQuantidade("")
      })
      .catch((erro) => {
        console.error("Erro ao cadastrar livro:", erro)

        setErro("Não foi possível cadastrar o livro.")
      })
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
            <option value="Terror">Terror</option>
            <option value="Suspense">Suspense</option>
            <option value="Biografia">Biografia</option>
            <option value="Tecnologia">Tecnologia</option>
          </select>
        </div>

        <div className={styles.campo}>
          <label htmlFor="anoPublicacao">Ano de Publicação</label>

          <input
            type="number"
            id="anoPublicacao"
            placeholder="Digite o ano de publicação"
            value={anoPublicacao}
            onChange={(event) => setAnoPublicacao(event.target.value)}
          />
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

        {mensagem && (
          <p className={styles.sucesso}>
            {mensagem}
          </p>
        )}

        {erro && (
          <p className={styles.erro}>
            {erro}
          </p>
        )}
      </div>
    </main>
  )
}