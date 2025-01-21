// import tobi from '../../assets/images/tobi.jpg';
import './header.css';

function Header() {
  return (
    <>
      <header>
        <div className='header-container'>
          {/* <img className='foto-perfil' src={ tobi } alt="foto de perfil" /> */}
          <h3>Alexandre Munaier</h3>
          <ul className='navegacao'>
            <li>Sobre</li>
            <li>Skills</li>
            <li>Projetos</li>
            <li>Contato</li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header;
