import tobi from '../../assets/images/tobi.jpg';
import './header.css';

function Header() {
  return (
    <header className='header-container'>
      <img className='foto-perfil' src={ tobi } alt="foto de perfil" />
      <ul className='navegacao'>
        <li>Sobre</li>
        <li>Especialidades</li>
        <li>Projetos</li>
      </ul>
      <button className='contato-button'>Contato</button>
    </header>
  )
}

export default Header;
