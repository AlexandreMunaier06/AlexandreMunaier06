import { useState } from 'react';
import './cards.css';
import Modal from '../modal';
import html from '../../assets/images/html.png';
import css from '../../assets/images/css-3.png';
import js from '../../assets/images/js.png';

type CardProps = {
  title: string,
  tipo: string,
  image: string,
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
          <img src={html} alt="HTML icon" />
          <img src={css} alt="CSS icon" />
          <img src={js} alt="JavaScript icon" />
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
