import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Cards from '../../components/cards';
import ScrollArrow from '../../components/ScrollArrow';
import prj from '../../data/projetos';
import './projetos.css';

function Projetos() {
  const [isInView, setIsInView] = useState(false);
  const projetos = prj;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsInView(entry.isIntersecting);
      });
    }, { threshold: 0.5 });

    const element = document.getElementById('projetos');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <motion.section
      id='projetos'
      className='projetos-container'
      initial={{ opacity: 0, y: 0 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
      transition={{ duration: 2 }}
    >
      <h1>Projetos</h1>
      <div className='cards'>
        {projetos.map(projeto => (
          <Cards
            key={projeto.title}
            title={projeto.title}
            tipo={projeto.tipo}
            image={projeto.image}
            description={projeto.description}
            details={projeto.details}
            siteLink={projeto.siteLink}
            repoLink={projeto.repoLink}
          />
        ))}
      </div>
      <ScrollArrow targetId='contatos'/>
    </motion.section>
  );
}

export default Projetos;
