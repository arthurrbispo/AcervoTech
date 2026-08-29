import { Home } from './pages/Home'
import { CadastroLivro } from "./pages/CadastroLivro"
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import './App.css'
import { useState } from 'react'

function App() {

  const [pagina, setPagina] = useState("home")

  return (
    <>
    <Header setPagina={setPagina}/>

    {pagina === "home" && <Home />}
    {pagina === "cadastro" && <CadastroLivro />}
    {pagina === "livros" && <VerificarLivro />}

    <Footer />
    </>
  )
}

export default App
