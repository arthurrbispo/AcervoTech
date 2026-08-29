import { Link } from "react-router-dom"
import styles from "./Home.module.css"

export function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.conteudo}>
          <h1>Bem-vindo ao AcervoTech</h1>

          <p>
            Gerencie sua biblioteca de forma simples, rápida e organizada.
          </p>

          <div className={styles.botoes}>
            <Link to="/cadastro">
              Cadastrar Livro
            </Link>

            <Link to="/livros">
              Verificar Livros
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.sobre}>
        <h2>Sobre o AcervoTech</h2>

        <p>
          Uma biblioteca digital para cadastro e consulta de livros.
        </p>
      </section>
    </main>
  )
}