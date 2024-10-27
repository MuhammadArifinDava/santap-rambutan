import { useState, useEffect } from 'react';
import './Hero.scss';
import heroImageDesktop from '../../../public/img/hero3.png';
import heroImageMobile from '../../../public/img/hero4.png';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [textPosition, setTextPosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTextPosition({ x: -10, y: -10 });
  };

  const handleMouseMove = (e) => {
    if (isHovered) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      setTextPosition({ x: mouseX, y: mouseY });
      setCursorPosition({ x: mouseX, y: mouseY });
    }
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    let timeout;
    if (!isHovered) {
      timeout = setTimeout(() => {
        setTextPosition({ x: -10, y: -10 });
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [isHovered]);

  const backgroundImage = isMobile ? heroImageMobile : heroImageDesktop;

  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      onMouseMove={handleMouseMove}
    >
      <div className="hero-overlay"></div>
      <div
        className={`hero-text ${isHovered ? 'animate' : ''}`}
        style={{
          transform: `translate(${textPosition.x / 2.5}px, ${textPosition.y / 2.5}px)`
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h1>Kemarin Coffee</h1>
        <p>Kemarin, yang telah beranjak meninggalkan hari ini.</p>
      </div>
      {isHovered && (
        <div
          className="cursor"
          style={{ left: cursorPosition.x, top: cursorPosition.y }}
        ></div>
      )}
    </div>
  );
};

export default Hero;
