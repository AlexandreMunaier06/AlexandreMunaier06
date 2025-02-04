import eu from '../../assets/images/eu2.webp';
import './sobre.css';

function Sobre() {
  return (
    <main id='sobre' className="main-container">
      <div className='sobre-container'>
        <div className='teste'>
          <h1>Engenheiro de Software</h1>
          <article>
            Olá! Sou o Alexandre Munaier, 
            nascido em 2002 e natural de Belo Horizonte. 
            Atualmente, sou estudante de Engenharia de Software na PUC Minas, 
            onde tenho me dedicado a desenvolver habilidades em programação e construção de soluções tecnológicas. 
            Estou em busca de oportunidades para aplicar e expandir meu conhecimento na área de desenvolvimento de software, 
            especialmente em projetos que envolvem inovação e aprendizado constante.
          </article>
          <button>Entre em contato</button>
        </div>
        <img src={ eu } alt="selfie minha" />
      </div>
    </main>
  )
}

export default Sobre;
