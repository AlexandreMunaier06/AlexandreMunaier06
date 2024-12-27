// import tobi from '../../assets/images/tobi.jpg';
import './header.css';

function Header() {
  return (
    <>
      <header className='header-container'>
        {/* <img className='foto-perfil' src={ tobi } alt="foto de perfil" /> */}
        <h3>Alexandre Munaier</h3>
        <ul className='navegacao'>
          <li>Sobre</li>
          <li>Especialidades</li>
          <li>Projetos</li>
        </ul>
        <button className='contato-button'>Contato</button>
      </header>
      <hr />
    </>
  )
}

export default Header;
