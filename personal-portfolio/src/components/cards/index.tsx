import './cards.css';
import tobi from '../../assets/images/tobi.jpg';

type CardProps = {
  title: string,
  image: string,
  description: string,
  details: string,
  siteLink: string,
  repoLink: string,
}

function Cards(props: CardProps) {

  const handleModal = (props: CardProps) => {
    
  }

  return (
    <div className='container-cards'>
      <div className='card'>
        <p>{props.title}</p>
        <img src={props.image} alt="print do projeto" />
        <article>
          {props.description}
        </article>
        <button onClick={() => handleModal(props)}>Ver mais</button>
      </div>
    </div>
  )
}

export default Cards;
