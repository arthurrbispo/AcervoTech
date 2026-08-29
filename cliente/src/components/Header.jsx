import styles from "./Header.module.css"

export function Header({ setPagina }) {
    return (
        <header className={styles.header}>
            <h2 className={styles.logo}>AcervoTech</h2>

            <nav className={styles.nav}>
                <a href="#" onClick={() => setPagina("home")} >Inicio</a>
                <a href="#" onClick={() => setPagina("cadastro")} >Cadastrar Livros</a>
                <a href="#" onClick={() => setPagina("livros")} >Verificar Livros</a>
            </nav>
        </header>
    )
}