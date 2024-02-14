import { motion } from 'framer-motion';
import Carousel from 'react-bootstrap/Carousel';
import logoImg1 from '../img/rambutan.jpg';
import logoImg2 from '../img/dessert.jpg';
import logoImg3 from '../img/drink.jpg';
import './Menu.scss';

const Menu = () => {
  return (
    <div className="container">
      <div className="row">
        <motion.div className="col-md-2" initial={{ opacity: 0, x: -75 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 2.7, delay: 2.1  }}>
          <div className="text-left">
            <h2>PRODUK UNGGULAN</h2>
            <p>
              Berikut merupakan rekomendasi aneka buah rambutan ,dessert rambutan , dan minuman rambutan yang menjadi favorit bagi pembeli yang lain.
            </p>
          </div>
        </motion.div>
        <div className="col-md-6">
          <Carousel className="carousel">
            <Carousel.Item>
              <img className="d-block w-100" src={logoImg1} alt="First slide" />
              <Carousel.Caption>
                <h3>Rambutan Binjai</h3>
                <p>Rambutan dengan kulit merah cerah dengan duri yang lembut dan rasa daging buah yang manis serta sedikit asam.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={logoImg2} alt="Second slide" />
              <Carousel.Caption>
                <h3>Rambutan smoothie</h3>
                <p>Buah rambutan yang manis dengan es batu, yogurt atau susu, dengan tambahan madu atau potongan buah-buahan lain.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={logoImg3} alt="Third slide" />
              <Carousel.Caption>
                <h3>Olahan Dessert Rambutan</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Menu;
