import './App.css'
import ButtonToTop from './components/ButtonToTop'
import Contato from './pages/Contato'
import Header from './pages/Header'
import Projetos from './pages/Projetos'
import Skills from './pages/Skills'
import Sobre from './pages/Sobre'

function App() {
  return (
    <>
      <div className="background">
        <div></div>
        <div></div>
      </div>
      <Header />
      <Sobre />
      <Skills />
      <Projetos />
      <Contato />
      <ButtonToTop />
    </>
  )
}

export default App
