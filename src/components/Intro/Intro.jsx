import { motion } from 'framer-motion';
import './Intro.scss';
import { useInView } from 'react-intersection-observer';

const Intro = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <div className="about-container">
      <div className="image-container" ref={ref}>
        <motion.img
          src="../../../public/img/coffeeshop.jpeg"
          alt="Main"
          className="main-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <div className="overlay-images">
          {Array.from({ length: 4 }).map((_, index) => (
            <img
              src="../../../public/img/bgrock.jpg"
              alt={`Overlay ${index + 1}`}
              className="overlay-image"
              key={index}
            />
          ))}
        </div>
        <div className="text-box">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            &quot;Mungkin kau hanya perlu secangkir kopi untuk membangkitkan jiwa yang hampir mati.&quot;
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
