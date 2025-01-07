import react from '../../assets/images/react.png';
import js from '../../assets/images/js.png';
import ts from '../../assets/images/ts.png';
import java from '../../assets/images/java.png';
import spring from '../../assets/images/spring.png';
import git from '../../assets/images/git.png';
import node from '../../assets/images/node.png';
import python from '../../assets/images/python.png';
import './skills.css';

function Skills() {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <h1>Skills</h1>
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
      </div>
    </section>
  )
}

export default Skills;
