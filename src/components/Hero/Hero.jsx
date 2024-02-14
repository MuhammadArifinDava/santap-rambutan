import React from 'react';
import { motion } from 'framer-motion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Hero.scss';
import logoImg from '../img/logo.png';
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <Card className="Hero" style={{ backgroundColor: '#F75D59' }}>
      <Card.Body style={{ marginTop: '25px', marginLeft: '25px' }} className='heros'>
        <Row>
          <Col md={8}>
            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Card.Title className='title'>SANTAP RAMBUTAN</Card.Title>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <Card.Text className='text'>
                SANTAP RAMBUTAN sebagai distributor Rambutan adalah salah satu pusat Rambutan di Samarinda.  <br />
                <div>
                  <TypeAnimation
                    sequence={[
                      "Menyediakan Buah rambutan asli dan fresh❤️",
                      800,
                      "Menyediakan Aneka olahan Minuman bercita rasa Rambutan❤️",
                      800,
                      "Menyediakan Aneka olahan Dessert bercita rasa Rambutan❤️",
                      800,
                    ]}
                    wrapper="span"
                    speed={70}
                    cursor={true}
                    style={{
                      color: "white"
                    }}
                    repeat={Infinity}
                  />
                </div>
              </Card.Text>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}>
              <Button variant="primary" className='button'>BELI SEKARANG</Button>
            </motion.div>
          </Col>
          <Col md={3}>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
              <Card.Img src={logoImg} className='image' />
            </motion.div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Hero;
