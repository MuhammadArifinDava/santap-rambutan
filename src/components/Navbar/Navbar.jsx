import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import logoImg from '../img/logo.png';
import './navbar.scss';

const Navbars = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Membersihkan event listener saat komponen dibongkar
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      className={`napbar ${isScrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        width: '100%',
        top: 0,
        left: 0,
        zIndex: 9999,
        background: isScrolled
          ? 'linear-gradient(to right, rgba(255, 71, 71, 0.8), rgba(255, 157, 86, 0.8), rgba(255, 71, 71, 0.8))'
          : 'linear-gradient(to right, #FF4747, #FF9D56, #FF4747)',
        transition: 'background-color 0.3s ease-in-out',
      }}
    >
      <Container>
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2.5, delay: 0.3 }} className='title'>
        <Navbar.Brand href="#Navbar">
          <Image src={logoImg} className="logo" alt="Logo" fluid />
        </Navbar.Brand>
        </motion.div>
        <Nav className="me-auto">
      <motion.div initial={{ opacity: 0, x: -130 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }} className='title'>
          <Nav.Link href="#Navbar" className="linkd">
            HOME
          </Nav.Link>
        </motion.div>
      <motion.div initial={{ opacity: 0, x: -130 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }} className='title'>
          <Nav.Link href="#Menu" className="linkd">
            BEST SELLER
          </Nav.Link>
        </motion.div>
      <motion.div initial={{ opacity: 0, x: 130 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }} className='title'>
          <Nav.Link href="#Menus" className="linkd">
            MENU
          </Nav.Link>
        </motion.div>
      <motion.div initial={{ opacity: 0, x: 130 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }} className='title'>
          <Nav.Link href="#About" className="linkd">
            TENTANG KAMI
          </Nav.Link>
        </motion.div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navbars;
