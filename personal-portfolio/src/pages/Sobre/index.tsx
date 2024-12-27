import tobi from '../../assets/images/tobi.jpg';
import './sobre.css';

function Sobre() {
  return (
    <main className="main-container">
      <div className='sobre-container'>
        <h1>Engenheiro de Software</h1>
        <article>
          Olá! Sou Alexandre Munaier, 
          nascido em 2002 e natural de Belo Horizonte. 
          Atualmente, sou estudante de Engenharia de Software na PUC Minas, 
          onde tenho me dedicado a desenvolver habilidades em programação e construção de soluções tecnológicas. 
          Estou em busca de oportunidades para aplicar e expandir meu conhecimento na área de desenvolvimento de software, 
          especialmente em projetos que envolvem inovação e aprendizado constante.
        </article>
        <button>Entre em contato</button>
      </div>
      <div className='foto-container'>
        <img src={ tobi } alt="foto de corpo" />
      </div>
    </main>
  )
}

export default Sobre;
