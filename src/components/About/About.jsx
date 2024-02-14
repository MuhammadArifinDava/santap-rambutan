import { motion } from 'framer-motion';
import logoImg from '../img/hero.png';
import logoImg2 from '../img/map.png';
import Figure from 'react-bootstrap/Figure';

function FigureExample() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
      <motion.div initial={{ opacity: 0, x: 110 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 4.7, delay: 4 }} className='title'>
          <Figure>
            <Figure.Image
              width={700}
              height={800}
              alt="Hero Image"
              src={logoImg}
            />
          </Figure>
      </motion.div>
        </div>
        <div className="col-md-6">
        <motion.div initial={{ opacity: 0, x: -110 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 4.7, delay: 4 }} className='title'>
         <h1>Tentang Kami</h1>
         <p>Lokasi outlet kami berada pada Jl. Gerilya, No.67, Samarinda, Kalimantan Timur, 75117</p>
          <Figure>
            <Figure.Image
              width={700}
              height={400}
              alt="Map Image"
              src={logoImg2}
            />
          </Figure>
        </motion.div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop:'30px'}}>
  <p>" Kami tunggu kedatangan Anda di Outlet kami👋 "</p>
</div>

    </div>
  );
}

export default FigureExample;
