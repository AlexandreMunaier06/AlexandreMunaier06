import './contato.css';
import linkedin from '../../assets/images/linkedin.png';
import github from '../../assets/images/github.png';
import gmail from '../../assets/images/gmail.png';

function Contato() {
  return (
    <section id="contato" className='contato-container'>
      <div className="contato">
        <h1>Contato</h1>
        <ul>
          <li>
              <a href="https://www.linkedin.com/in/alexandremunaier/" target='_blank'>
                <img src={linkedin} alt="linkedin icon" />
                LinkedIn
              </a>
          </li>
          <li>
            <a href="https://gmail.com/" target='_blank'>
              <img src={gmail} alt="gmail icon" />
              alexandremunaier027@gmail.com
            </a>
          </li>
          <li>
            <a href="https://github.com/AlexandreMunaier06" target='_blank'>
              <img src={github} alt="github icon" />
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contato;