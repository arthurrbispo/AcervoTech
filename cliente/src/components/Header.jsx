import { Link } from "react-router-dom"
import styles from "./Header.module.css"

export function Header() {
  return (
    <header className={styles.header}>
      <h2 className={styles.logo}>AcervoTech</h2>

      <nav className={styles.nav}>
        <Link to="/">Início</Link>
        <Link to="/cadastro">Cadastrar Livros</Link>
        <Link to="/livros">Verificar Livros</Link>
      </nav>
    </header>
  )
}