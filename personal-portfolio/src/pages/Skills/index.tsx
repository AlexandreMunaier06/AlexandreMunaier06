import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import react from '../../assets/images/react.png';
import js from '../../assets/images/js.png';
import ts from '../../assets/images/ts.png';
import java from '../../assets/images/java.png';
import spring from '../../assets/images/spring.png';
import git from '../../assets/images/git.png';
import node from '../../assets/images/node.png';
import python from '../../assets/images/python.png';
import './skills.css';
import ScrollArrow from '../../components/ScrollArrow';

function Skills() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsInView(entry.isIntersecting); 
      });
    }, { threshold: 0.5 });

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 0 }}
      transition={{ duration: 2 }}
      id='skills'
      className="skills-section"
    >
      <h1>Habilidades Técnicas</h1>
      <ul className='skills'>
        <li><img src={react} alt="react icon" />React</li>
        <li><img src={js} alt="JavaScript icon" />JavaScript</li>
        <li><img src={ts} alt="TypeScript icon" />TypeScript</li>
        <li><img src={java} alt="Java icon" />Java</li>
        <li><img src={spring} alt="Spring icon" />Spring</li>
        <li><img src={git} alt="Git icon" />Git</li>
        <li><img src={node} alt="NodeJs icon" />Node Js</li>
        <li><img src={python} alt="Python icon" />Python</li>
      </ul>
      <ScrollArrow targetId='projetos'/>
    </motion.section>
  )
}

export default Skills;
