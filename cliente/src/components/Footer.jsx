import styles from "./Footer.module.css"

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <h3>AcervoTech</h3>
        <p>Biblioteca digital para cadastro e consulta de livros.</p>
      </div>

      <p className={styles.copy}>
        © 2026 AcervoTech
      </p>
    </footer>
  )
}