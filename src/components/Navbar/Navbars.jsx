import { useState, useEffect, useRef } from 'react';
import './Navbars.scss';

const Navbars = () => {
  const [isFixed, setIsFixed] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        setIsFixed(window.scrollY > navbarRef.current.offsetTop);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleOffcanvas = () => {
    document.querySelector('.offcanvasA').classList.toggle('open');
  };

  return (
    <nav ref={navbarRef} className={`navbar ${isFixed ? 'fixed-navbar' : ''}`}>
      <div className="container core">
        <div className="brand">Kemarin Coffee</div>
        <div className="menu-toggle" onClick={toggleOffcanvas}>
          ☰
        </div>
        <div className="offcanvasA">
          <div className="offcanvasA-header">
            <div className="offcanvasA-title">Kemarin Coffee</div>
            <div className="offcanvasA-close" onClick={toggleOffcanvas}>
              ×
            </div>
          </div>
          <div className="offcanvasA-body">
            <a id="home" className="links" href="#Hero">
              Home
            </a>
            <a id="link" className="links" href="#Menu">
              Menu
            </a>
            <div className="dropdown">
              <div className="dropdown-title">☕︎ ============= ☕︎</div>
              <div className="dropdown-content">
                <a id="action3" className="links" href="#About">
                  About
                </a>
                <a id="action4" className="links" href="#Intro">
                  Introduction
                </a>
                <div className="divider"></div>
                <a id="action5" className="links" href="#Contact">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbars;
