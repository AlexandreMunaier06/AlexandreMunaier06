import { useState } from 'react';
import './cards.css';
import Modal from '../modal';

type CardProps = {
  title: string,
  tipo: string,
  image: string,
  stacks: string[],
  description: string,
  details: string,
  siteLink: string,
  repoLink: string,
}

function Cards(props: CardProps) {

  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='container-cards'>
      <div className='card'>
        <p>{props.title}</p>
        <img src={props.image} alt="print do projeto" />
        <article>
          {props.description}
        </article>
        <div className='stacks'>
          {props.stacks.map((stack, index) => (
            <img key={index} src={stack} alt={`Stack ${index}`} />
          ))}
        </div>
        <button onClick={toggleModal}>Ver mais</button>
        {isVisible && (
          <Modal 
            onClose={toggleModal} 
            title={props.title}
            tipo={props.tipo}
            image={props.image}
            details={props.details}
            siteLink={props.siteLink}
            repoLink={props.repoLink}
          />
        )}
      </div>
    </div>
  )
}

export default Cards;
