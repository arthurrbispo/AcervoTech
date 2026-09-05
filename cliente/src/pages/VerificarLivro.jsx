import { useEffect, useState } from "react"
import { api } from "../services/api"
import styles from "./VerificarLivro.module.css"

export function VerificarLivro() {
  const [livros, setLivros] = useState([])
  const [categoria, setCategoria] = useState("")
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState("")

  useEffect(() => {
    buscarLivros()
  }, [])

  function buscarLivros() {
    setCarregando(true)
    setErro("")

    let requisicao

    if (categoria === "") {
      requisicao = api.get("/livros")
    } else {
      requisicao = api.get(
        `/livros/categoria/${categoria}`
      )
    }

    requisicao
      .then((response) => {
        setLivros(response.data)
      })
      .catch((erro) => {
        console.error("Erro ao buscar livros:", erro)
        setErro("Não foi possível carregar os livros.")
      })
      .finally(() => {
        setCarregando(false)
      })
  }

  return (
    <main className={styles.verificarLivro}>
      <div className={styles.container}>

        <div className={styles.cabecalho}>
          <div>
            <h1>Verificar Livros</h1>
            <p>Consulte os livros disponíveis no acervo.</p>
          </div>
        </div>

        <div className={styles.filtro}>
          <div className={styles.campo}>
            <label htmlFor="categoria">
              Categoria
            </label>

            <select
              id="categoria"
              value={categoria}
              onChange={(event) => setCategoria(event.target.value)}
            >
              <option value="">Todas as categorias</option>
              <option value="Romance">Romance</option>
              <option value="Fantasia">Fantasia</option>
              <option value="Terror">Terror</option>
              <option value="Suspense">Suspense</option>
              <option value="Biografia">Biografia</option>
              <option value="Tecnologia">Tecnologia</option>
            </select>
          </div>

          <button
            type="button"
            className={styles.botaoBuscar}
            onClick={buscarLivros}
          >
            Buscar
          </button>
        </div>

        {carregando && (
          <p className={styles.mensagem}>
            Carregando livros...
          </p>
        )}

        {erro && (
          <p className={styles.erro}>
            {erro}
          </p>
        )}

        {!carregando && !erro && livros.length === 0 && (
          <p className={styles.mensagem}>
            Nenhum livro encontrado.
          </p>
        )}

        {!carregando && !erro && livros.length > 0 && (
          <div className={styles.listaLivros}>
            {livros.map((livro) => (
              <article
                key={livro.id}
                className={styles.cardLivro}
              >
                <div className={styles.cardTopo}>
                  <h2>{livro.titulo}</h2>

                  <span className={styles.categoria}>
                    {livro.categoria}
                  </span>
                </div>

                <p>
                  <strong>Autor:</strong> {livro.autor}
                </p>

                <p>
                  <strong>Ano de Publicação:</strong> {livro.anoPublicacao}
                </p>

                <p>
                  <strong>Quantidade:</strong> {livro.quantidade}
                </p>
              </article>
            ))}
          </div>
        )}

      </div>
    </main>
  )
}