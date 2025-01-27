import { useEffect, useState } from "react";
import './buttonToTop.css';

function ButtonToTop() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    isVisible &&
      (<button
        onClick={scrollToTop}
        className="topButton">
          ↑
      </button>)
  )
}

export default ButtonToTop;