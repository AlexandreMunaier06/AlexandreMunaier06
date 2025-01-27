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
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header;
