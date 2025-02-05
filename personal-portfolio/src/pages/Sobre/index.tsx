import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import eu from '../../assets/images/eu2.webp';
import ScrollArrow from '../../components/ScrollArrow';
import './sobre.css';

function Sobre() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsInView(entry.isIntersecting); 
      });
    }, { threshold: 0.5 });

    const element = document.getElementById('sobre');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 0 }}
      transition={{ duration: 2 }}
      id="sobre"
      className="main-container"
    >
      <div>
        <h1>Engenheiro de Software</h1>
        <article>
          Olá! Sou o Alexandre Munaier, 
          nascido em 2002 e natural de Belo Horizonte. 
          Atualmente, sou estudante de Engenharia de Software na PUC Minas, 
          onde tenho me dedicado a desenvolver habilidades em programação e construção de soluções tecnológicas. 
          Estou em busca de oportunidades para aplicar e expandir meu conhecimento na área de desenvolvimento de software, 
          especialmente em projetos que envolvem inovação e aprendizado constante.
        </article>
        <a href="/AlexandreMunaier06/curriculo.pdf" download="Curriculo_Alexandre_Munaier.pdf">
          <button className='button-curriculo'>Baixar currículo</button>
        </a>
      </div>
      <img src={ eu } alt="selfie minha" />
      <ScrollArrow targetId='skills'/>
    </motion.main>
  )
}

export default Sobre;
