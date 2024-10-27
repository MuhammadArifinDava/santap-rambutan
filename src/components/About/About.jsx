// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import './About.scss';
import { useInView } from 'react-intersection-observer';

const About = () => {
  // eslint-disable-next-line no-unused-vars
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <Element name="About" className="about-container">
      <div className="bgtext-container">
        <p className="bgtext">
          Heart To Cup &nbsp; Enjoy Ur Coffee &nbsp; Heart To Cup &nbsp; Enjoy Ur Coffee &nbsp; Heart To Cup &nbsp; Enjoy
        </p>
      </div>
      <div className="content-container" ref={ref}>
        <motion.h1
          className="title"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8  }}
        >
          Our Story
        </motion.h1>
        <div className="content">
          <motion.img
            src="../../public/img/4.png"
            alt="Background Image"
            className="bgrock"
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />
          <motion.p
            className="description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            Bermula pada tahun 2018, kami memiliki harapan-harapan untuk dapat menjadi wadah ataupun tangan ketiga untuk segala kalangan usia dalam menikmati waktu, menikmati hidup dengan manusia lain dalam bincang asa, ataupun hanya sekedar ingin menikmati kehidupan dengan ditemani secangkir kopi sebagai pembangkit jiwa yang hampir tertidur. Suasana Coffeeshop yang sangat rindang sehingga anda dapat merasakan rasanya kembali &quot;pulang&quot;.
          </motion.p>
        </div>
      </div>
    </Element>
  );
};

export default About;
