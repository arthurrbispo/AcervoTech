import styles from "./Home.module.css"

export function Home({ setPagina }) {
  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.conteudo}>
          <h1>Bem-vindo ao AcervoTech</h1>

          <p>
            Gerencie sua biblioteca de forma simples, rápida e organizada.
          </p>

          <div className={styles.botoes}>
            <button onClick={() => setPagina("cadastro")}>
              Cadastrar Livro
            </button>

            <button onClick={() => setPagina("livros")}>
              Verificar Livros
            </button>
          </div>
        </div>
      </section>

      <section className={styles.sobre}>
        <h2>Sobre o AcervoTech</h2>

        <p>
          O AcervoTech é uma biblioteca digital criada para facilitar
          o cadastro e a consulta de livros disponíveis no acervo.
        </p>
      </section>
    </main>
  )
}