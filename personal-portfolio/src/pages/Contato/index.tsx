import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import linkedin from '../../assets/images/linkedin.png';
import github from '../../assets/images/github.png';
import gmail from '../../assets/images/gmail.png';
import './contato.css';

function Contato() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsInView(entry.isIntersecting);
      });
    }, { threshold: 0.5 });

    const element = document.getElementById('contatos');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <motion.section
      id="contatos"
      className="contato-container"
      initial={{ opacity: 0, y: 0 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
      transition={{ duration: 2 }}
    >
      <h1>Contatos</h1>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/alexandremunaier/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="linkedin icon" />
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://gmail.com/" target="_blank" rel="noopener noreferrer">
            <img src={gmail} alt="gmail icon" />
            alexandremunaier027@gmail.com
          </a>
        </li>
        <li>
          <a href="https://github.com/AlexandreMunaier06" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github icon" />
            GitHub
          </a>
        </li>
      </ul>
    </motion.section>
  );
}

export default Contato;
