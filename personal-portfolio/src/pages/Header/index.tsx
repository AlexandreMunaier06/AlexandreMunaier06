// import tobi from '../../assets/images/tobi.jpg';
import './header.css';

function Header() {

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <>
      <header>
        <h3 onClick={handleScroll}>Alexandre Munaier</h3>
        <ul className='navegacao'>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contatos">Contato</a></li>
        </ul>
      </header>
    </>
  )
}

export default Header;
