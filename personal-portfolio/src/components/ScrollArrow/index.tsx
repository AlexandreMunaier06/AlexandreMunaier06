import './scrollArrow.css';

interface ScrollArrowProps {
  targetId: string;
}

function ScrollArrow({targetId}: ScrollArrowProps) {

  const handleScroll = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="arrow-container" onClick={handleScroll}>
      <div className="arrow"></div>
    </div>
  )
}

export default ScrollArrow;
