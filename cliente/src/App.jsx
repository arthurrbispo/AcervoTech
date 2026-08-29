import { Routes, Route } from "react-router-dom"

import { Home } from "./pages/Home"
import { CadastroLivro } from "./pages/CadastroLivro"
import { VerificarLivro } from "./pages/VerificarLivro"

import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

import "./App.css"

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<CadastroLivro />} />
        <Route path="/livros" element={<VerificarLivro />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App