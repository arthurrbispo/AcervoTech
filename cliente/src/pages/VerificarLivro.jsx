import { useEffect, useState } from "react"
import { api } from "../services/api"
import styles from "./VerificarLivro.module.css"

export function VerificarLivro() {
  const [livros, setLivros] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState("")

  useEffect(() => {
    buscarLivros()
  }, [])

  function buscarLivros() {
    api
      .get("/livros")
      .then((response) => {
        console.log("Resposta da API:", response.data)

        setLivros(response.data)
      })
      .catch((erro) => {
        console.error("Erro no GET:", erro)
        setErro("Erro ao buscar os livros.")
      })
      .finally(() => {
        setCarregando(false)
      })
  }

  return (
    <main className={styles.verificarLivros}>
      <h1>Livros cadastrados</h1>

      {carregando && <p>Carregando...</p>}

      {erro && <p>{erro}</p>}

      {!carregando && livros.length === 0 && (
        <p>Nenhum livro encontrado.</p>
      )}

      <div className={styles.listaLivros}>
        {livros.map((livro) => (
          <div className={styles.cardLivro} key={livro.id}>
            <h2>{livro.titulo}</h2>

            <p>
              <strong>Autor:</strong> {livro.autor}
            </p>

            <p>
              <strong>Categoria:</strong> {livro.categoria}
            </p>

            <p>
              <strong>Quantidade:</strong> {livro.quantidade}
            </p>
          </div>
        ))}
      </div>
    </main>
  )
}