import Cards from '../../components/cards';
import prj from '../../data/projetos';
import './projetos.css';

function Projetos() {
  const projetos = prj;

  return (
    <section className='projetos-container'>
      <div className='projetos'>
        <h1>Projetos</h1>
        <div className='cards'>
          {projetos.map(projeto => (
            <Cards
              title={projeto.title}
              image={projeto.image}
              description={projeto.description}
              details={projeto.details}
              siteLink={projeto.siteLink}
              repoLink={projeto.repoLink}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projetos;
