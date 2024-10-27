import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import logoImg1 from '../../../public/img/americano.png';
import logoImg2 from '../../../public/img/cappucino.png';
import logoImg3 from '../../../public/img/espresso.png';
import logoImg4 from '../../../public/img/latte.png';
import logoImg5 from '../../../public/img/matcha latte.png';
import logoImg6 from '../../../public/img/redvelvet latte.png';
import logoImg7 from '../../../public/img/chocolatte.png';
import logoImg8 from '../../../public/img/lychee latte.png';
import logoImg9 from '../../../public/img/hazelnut latte.png';
import logoImg10 from '../../../public/img/milk coffee.png';
import logoImg11 from '../../../public/img/thai tea.png';
import logoImg12 from '../../../public/img/kombucha.png';
import Rating from '../../../public/img/Rating.png';
import './Menu.scss';

const products = [
  {
    title: "Americano",
    img: logoImg1,
    rating: 4.2,
    description: "Deskripsi: Americano adalah minuman kopi yang dibuat dengan mencampurkan espresso dengan air panas. Minuman ini memiliki rasa yang mirip dengan kopi biasa tetapi dengan kekuatan rasa yang lebih ringan. Americano sering dipilih karena rasanya yang halus dan kandungan kafeinnya yang tinggi.",
    price: "Rp 25.000 per kilogram"
  },
  {
    title: "Cappuccino",
    img: logoImg2,
    rating: 4.9,
    description: "Deskripsi: Cappuccino adalah minuman kopi Italia yang terbuat dari campuran espresso, susu panas, dan busa susu. Minuman ini biasanya disajikan dalam cangkir kecil dengan taburan bubuk cokelat atau kayu manis di atasnya, memberikan rasa yang kaya dan tekstur yang lembut.",
    price: "Rp 30.000 per kilogram"
  },
  {
    title: "Espresso",
    img: logoImg3,
    rating: 4.8,
    description: "Deskripsi: Espresso adalah kopi yang dibuat dengan mengekstraksi air panas bertekanan tinggi melalui bubuk kopi yang sangat halus. Hasilnya adalah minuman kopi yang kuat dan pekat dengan lapisan crema di atasnya, memberikan rasa yang intens dan kaya.",
    price: "Rp 35.000 per kilogram"
  },
  {
    title: "Latte",
    img: logoImg4,
    rating: 4.7,
    description: "Deskripsi: Latte adalah minuman kopi yang terbuat dari espresso dan susu panas yang diaduk. Minuman ini memiliki rasa yang lebih lembut dibandingkan dengan cappuccino, karena rasio susu yang lebih tinggi, sering kali disajikan dengan lapisan tipis busa susu di atasnya.",
    price: "Rp 45.000 per kilogram"
  },
  {
    title: "Matcha Latte",
    img: logoImg5,
    rating: 4.7,
    description: "Deskripsi: Matcha Latte adalah minuman yang terbuat dari campuran bubuk teh hijau matcha, susu panas, dan sering kali sedikit pemanis. Minuman ini dikenal dengan rasa yang lembut dan sedikit pahit, serta warna hijau cerah yang khas.",
    price: "Rp 25.000 per potong"
  },
  {
    title: "Redvelvet Latte",
    img: logoImg6,
    rating: 4.8,
    description: "Deskripsi: Redvelvet Latte adalah variasi latte yang diinfus dengan rasa red velvet, biasanya terdiri dari espresso, susu panas, cokelat putih, dan pewarna merah. Minuman ini memiliki rasa manis dan krimi dengan warna merah yang menarik.",
    price: "Rp 20.000 per porsi"
  },
  {
    title: "ChocoLatte",
    img: logoImg7,
    rating: 4.4,
    description: "Deskripsi: ChocoLatte adalah minuman campuran antara espresso, susu panas, dan cokelat. Minuman ini memberikan rasa yang kaya dan manis, sering kali dihiasi dengan krim kocok dan serutan cokelat di atasnya.",
    price: "Rp 20.000 per porsi"
  },
  {
    title: "Lychee Latte",
    img: logoImg8,
    rating: 4.9,
    description: "Deskripsi: Lychee Latte adalah minuman yang memadukan rasa kopi dengan manisnya buah leci. Biasanya terbuat dari espresso, susu panas, dan sirup leci, memberikan kombinasi rasa yang unik dan menyegarkan.",
    price: "Rp 10.000 - Rp 20.000 per porsi"
  },
  {
    title: "Hazelnut Latte",
    img: logoImg9,
    rating: 4.9,
    description: "Deskripsi: Hazelnut Latte adalah minuman kopi yang dibuat dengan espresso, susu panas, dan sirup hazelnut. Minuman ini memiliki rasa yang lembut dan manis dengan aroma kacang hazelnut yang khas.",
    price: "Rp 15.000 per gelas"
  },
  {
    title: "Milk Coffee",
    img: logoImg10,
    rating: 4.6,
    description: "Deskripsi: Milk Coffee adalah minuman kopi yang disajikan dengan campuran susu dan kopi yang seimbang. Minuman ini memberikan rasa yang lembut dan krimi, sering kali disukai karena kehangatannya.",
    price: "Rp 15.000 per gelas."
  },
  {
    title: "Thai Tea",
    img: logoImg11,
    rating: 4.2,
    description: "Deskripsi: Thai Tea adalah minuman teh yang terbuat dari teh hitam Thailand, susu kental manis, dan gula, disajikan dingin dengan es. Minuman ini memiliki rasa manis dan krimi dengan warna oranye yang khas.",
    price: "Rp 12.000 per gelas."
  },
  {
    title: "Kombucha",
    img: logoImg12,
    rating: 4.7,
    description: "Deskripsi: Kombucha adalah minuman teh fermentasi yang dikenal karena kandungan probiotiknya. Minuman ini memiliki rasa asam yang menyegarkan dan sering kali disajikan dingin.",
    price: "Rp 12.000 per gelas."
  }
];

const Menu = () => {
  const [show, setShow] = useState(Array(products.length).fill(false));

  const handleClose = (index) => {
    setShow((prev) => [...prev.slice(0, index), false, ...prev.slice(index + 1)]);
  };

  const handleShow = (index) => {
    setShow((prev) => [...prev.slice(0, index), true, ...prev.slice(index + 1)]);
  };

  const handleKembaliClick = () => {
    window.open("https://wa.me/62895606132069", "_blank");
  };

  return (
    <div className='section'>
      <div className='top'>
        <div className='title'>
          <motion.div initial={{ opacity: 0, y: -90 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2 }} className='title'>
            <h1>Pure Coffee</h1>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, x: -90 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 3.2 }} className='title'>
        <div className="menus d-flex justify-content-around">
          {products.slice(0, 4).map((product, index) => (
            <Card className='card' key={index}>
              <Card.Img variant="top" src={product.img} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <div className="rating-container">
                  <div className="rating-text-overlay">{product.rating}</div>
                  <Card.Img variant="top" className='Rating' src={Rating} style={{ width: '3rem' }} />
                </div>
                <Button onClick={() => handleShow(index)} className='modals'>Detail & Pemesanan</Button>
                <Modal
                  show={show[index]}
                  onHide={() => handleClose(index)}                  
                  centered backdrop="true"
                  keyboard={false}
                  className='modal'
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Deskripsi Produk</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {product.description}<br /><br />
                    Harga: {product.price}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button style={{ backgroundColor: 'black', color: 'white' }} onClick={() => handleClose(index)}>Tutup</Button>
                    <Button style={{ backgroundColor: 'black', color: 'white' }} onClick={handleKembaliClick}>Pesan Sekarang</Button>
                  </Modal.Footer>
                </Modal>
              </Card.Body>
            </Card>
          ))}
        </div>
      </motion.div>

      <div className='title'>
        <motion.div initial={{ opacity: 0, y: -90 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 3.2 }} className='title'>
          <h1>Maybe, With Some Flavour??</h1>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, x: -110 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 3.2 }} className='title'>
        <div className="menus d-flex justify-content-around">
          {products.slice(4, 8).map((product, index) => (
            <Card className='card' key={index}>
              <Card.Img variant="top" src={product.img} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <div className="rating-container">
                  <div className="rating-text-overlay">{product.rating}</div>
                  <Card.Img variant="top" className='Rating' src={Rating} style={{ width: '3rem' }} />
                </div>
                <Button onClick={() => handleShow(index + 4)} className='modals'>Detail & Pemesanan</Button>
                <Modal
                  show={show[index + 4]}
                  onHide={() => handleClose(index + 4)}
                  centered
                  backdrop="true"
                  keyboard={false}
                  className='modal'
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Deskripsi Produk</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {product.description}<br /><br />
                    Harga: {product.price}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button style={{ backgroundColor: 'black', color: 'white' }} onClick={() => handleClose(index + 4)}>Tutup</Button>
                    <Button style={{ backgroundColor: 'black', color: 'white' }} onClick={handleKembaliClick}>Pesan Sekarang</Button>
                  </Modal.Footer>
                </Modal>
              </Card.Body>
            </Card>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: -110 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 3.2 }} className='title'>
        <div className="menus d-flex justify-content-around">
          {products.slice(8, 12).map((product, index) => (
            <Card className='card' key={index}>
              <Card.Img variant="top" src={product.img} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <div className="rating-container">
                  <div className="rating-text-overlay">{product.rating}</div>
                  <Card.Img variant="top" className='Rating' src={Rating} style={{ width: '3rem' }} />
                </div>
                <Button onClick={() => handleShow(index + 8)} className='modals'>Detail & Pemesanan</Button>
                <Modal
                  show={show[index + 8]}
                  onHide={() => handleClose(index + 8)}
                  centered
                  backdrop="true"
                  keyboard={false}
                  className='modal'
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Deskripsi Produk</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {product.description}<br /><br />
                    Harga: {product.price}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button style={{ backgroundColor: 'black', color: 'white' }} onClick={() => handleClose(index + 8)}>Tutup</Button>
                    <Button style={{ backgroundColor: 'black', color: 'white' }} onClick={handleKembaliClick}>Pesan Sekarang</Button>
                  </Modal.Footer>
                </Modal>
              </Card.Body>
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Menu;

                 
