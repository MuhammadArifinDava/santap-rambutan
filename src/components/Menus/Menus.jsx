import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import './Menus.scss';
import logoImg1 from '../img/1.png';
import logoImg2 from '../img/2.png';
import logoImg3 from '../img/3.png';
import logoImg4 from '../img/4.png';
import logoImg5 from '../img/5.png';
import logoImg6 from '../img/6.png';
import logoImg7 from '../img/7.png';
import logoImg8 from '../img/8.png';
import logoImg9 from '../img/9.png';
import logoImg10 from '../img/10.png';
import logoImg11 from '../img/11.png';
import logoImg12 from '../img/12.png';
import Rating from '../img/Rating.png';
import Stock from '../img/Stock.png';

const Menus = () => {
   const [show, setShow] = useState(Array(12).fill(false)); 
   const handleClose = (index) => setShow([...show.slice(0, index), false, ...show.slice(index + 1)]); 
   const handleShow = (index) => setShow([...show.slice(0, index), true, ...show.slice(index + 1)]); 
   const handleKembaliClick = () => {
      window.open("https://wa.me/62895606132069", "_blank");
   }  
   

   return (
      <div className='section' >

      <div className='top'>
      <div className='title'>
      <motion.div initial={{ opacity: 0, y: -90 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2.8, delay: 2.8 }} className='title'>
         <h1>Produk Buah Rambutan</h1>
         <h6>Buah Rambutan Fresh dan berkualitas premium, dijamin manis dan fresh atau uang kembali.  </h6>
      </motion.div>
      </div>
      </div>

      <motion.div initial={{ opacity: 0, x: -90 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 3.2, delay: 2.3 }} className='title'>
      <div className="menus d-flex justify-content-around">
        
      <Card style={{ width: '18rem' }} className='card'>
         <Card.Img variant="top" src={logoImg1} />
         <Card.Body>
            <Card.Title>Rambutan Rapiah</Card.Title>
            
         <Card.Img variant="top" className='Stock' style={{width:'7rem'}} src={Stock} />
         <div className="rating-container">
            <div className="rating-text-overlay">4.8</div>
            <Card.Img variant="top" className='Rating' src={Rating} style={{width:'3.8rem'}}/>
         </div>
         <Button variant="primary" onClick={() => handleShow(0)} className='modals'>Detail & Pemesanan</Button>
               <Modal
                  show={show[0]} 
                  onHide={() => handleClose(0)}
                  backdrop="static"
                  keyboard={false}
                  className='modal'
               >
        <Modal.Header closeButton>
          <Modal.Title>
            Deskripsi Produk</Modal.Title>
        </Modal.Header>
        <Modal.Body>
Deskripsi: Rambutan Rapiah dikenal karena rasanya yang manis dan daging buahnya yang lembut. Buah ini biasanya berukuran sedang hingga besar dengan kulit yang berwarna merah muda. Rambutan Rapiah umumnya memiliki biji yang mudah dipisahkan dari daging buahnya.<br></br><br></br>
Harga: Rp 25.000 per kilogram

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose(0)}>
            Tutup
          </Button>
          <Button variant="primary" onClick={handleKembaliClick}>Pesan Sekarang</Button>
        </Modal.Footer>
      </Modal>
            
         </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} className='card'>
         <Card.Img variant="top" src={logoImg2} />
         <Card.Body>
            <Card.Title>Rambutan Binjai</Card.Title>
            <Card.Img variant="top" className='Stock' style={{width:'7rem'}} src={Stock} />
         <div className="rating-container">
            <div className="rating-text-overlay">4.9</div>
            <Card.Img variant="top" className='Rating' src={Rating} style={{width:'3.8rem'}}/>
         </div>
               <Button variant="primary"  onClick={() => handleShow(1)} className='modals'>
                  Detail & Pemesanan
               </Button>
                  <Modal
                     show={show[1]}
                     onHide={() => handleClose(1)}
                     backdrop="static"
                     keyboard={false}
                     className='modal'
                     >
                     <Modal.Header closeButton>
                        <Modal.Title>Deskripsi Produk</Modal.Title>
                     </Modal.Header>
                     <Modal.Body>
                     Deskripsi: Rambutan Binjai adalah varietas rambutan yang berasal dari daerah Binjai, Sumatera Utara. Buahnya biasanya berukuran besar dengan kulit yang berwarna kuning atau oranye. Rambutan Binjai memiliki daging buah yang manis dan sedikit lebih renyah dibandingkan dengan varietas lain. <br></br><br></br>
Harga: Rp 30.000 per kilogram
                     </Modal.Body>
                     <Modal.Footer>
                        <Button variant="secondary" onClick={() => handleClose(1)}>
                           Tutup
                        </Button>
                        <Button variant="primary" onClick={handleKembaliClick}>Pesan Sekarang</Button>

                     </Modal.Footer>
                     </Modal>
            
         </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} className='card'>
   <Card.Img variant="top" src={logoImg3} />
   <Card.Body>
      <Card.Title>Rambutan Kapulasan</Card.Title>
      <Card.Img variant="top" className='Stock' style={{width:'7rem'}} src={Stock} />
      <div className="rating-container">
            <div className="rating-text-overlay">4.8</div>
            <Card.Img variant="top" className='Rating' src={Rating} style={{width:'3.8rem'}}/>
         </div>
      <Button variant="primary"  onClick={() => handleShow(2)} className='modals'>
         Detail & Pemesanan
      </Button>
      <Modal
         show={show[2]} 
         onHide={() => handleClose(2)} 
         backdrop="static"
         keyboard={false}
         className='modal'
      >
         <Modal.Header closeButton>
            <Modal.Title>Deskripsi Produk</Modal.Title>
         </Modal.Header>
         <Modal.Body>
         Deskripsi: Rambutan Kapulasan dikenal dengan bentuknya yang agak lonjong dan kulit buah yang berwarna merah terang. Daging buahnya manis dengan sedikit keasaman, dan bijinya relatif kecil. Rambutan Kapulasan biasanya memiliki kualitas yang baik dan tahan lama.<br></br><br />
Harga: Rp 35.000 per kilogram
         </Modal.Body>
         <Modal.Footer>
            <Button variant="secondary" onClick={() => handleClose(2)}>Tutup</Button>
            <Button variant="primary" onClick={handleKembaliClick}>Pesan Sekarang</Button>
         </Modal.Footer>
      </Modal>
   </Card.Body>
</Card>
<Card style={{ width: '18rem' }} className='card'>
   <Card.Img variant="top" src={logoImg4} />
   <Card.Body>
      <Card.Title>Rambutan Garuda</Card.Title>
      <Card.Img variant="top" className='Stock' style={{width:'7rem'}} src={Stock} />
      <div className="rating-container">
            <div className="rating-text-overlay">4.7</div>
            <Card.Img variant="top" className='Rating' src={Rating} style={{width:'3.8rem'}}/>
         </div>
      <Button variant="primary"  onClick={() => handleShow(3)} className='modals'>
         Detail & Pemesanan
      </Button>
      <Modal
         show={show[3]} 
         onHide={() => handleClose(3)} 
         backdrop="static"
         keyboard={false}
         className='modal'
      >
         <Modal.Header closeButton>
            <Modal.Title>Deskripsi Produk</Modal.Title>
         </Modal.Header>
         <Modal.Body>
         Deskripsi: Rambutan Garuda adalah varietas rambutan yang terkenal karena ukuran buahnya yang besar dan kulit yang tebal. Buahnya biasanya berwarna merah cerah dan memiliki daging buah yang manis dengan sedikit keasaman. Rambutan Garuda sering dianggap sebagai varietas premium.
Harga: Rp 45.000 per kilogram
         </Modal.Body>
         <Modal.Footer>
            <Button variant="secondary" onClick={() => handleClose(3)}>Tutup</Button>
            <Button variant="primary" onClick={handleKembaliClick}>Pesan Sekarang</Button>
         </Modal.Footer>
      </Modal>
   </Card.Body>
</Card>
</div>
</motion.div>


<div className='title'>
<motion.div initial={{ opacity: 0, y: -90 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 3.2, delay: 3.2 }} className='title'>
  <h1>Produk Dessert Rambutan</h1>
  <h6>Kurang rasanya setelah makan jika belum cuci mulut, yuk coba Dessert Rambutan !.</h6>
  </motion.div>
</div>
<motion.div initial={{ opacity: 0, x: -110 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 3.5, delay: 2.8 }} className='title'>
<div className="menus d-flex justify-content-around">
  <Card style={{ width: '18rem' }} className='card'>
    <Card.Img variant="top" src={logoImg5} />
    <Card.Body>
      <Card.Title>Pie Rambutan</Card.Title>
      <Card.Img variant="top" className='Stock' style={{ width: '7rem' }} src={Stock} />
      <div className="rating-container">
            <div className="rating-text-overlay">4.7</div>
            <Card.Img variant="top" className='Rating' src={Rating} style={{width:'3.8rem'}}/>
         </div>
      <Button variant="primary" onClick={() => handleShow(4)} className='modals'>Detail & Pemesanan</Button>
      <Modal
        show={show[4]} 
        onHide={() => handleClose(4)} 
        backdrop="static"
        keyboard={false}
        className='modal'
      >
        <Modal.Header closeButton>
          <Modal.Title>Deskripsi Produk</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Deskripsi: Pie Rambutan adalah sejenis kue pai dengan isi utama berupa campuran daging rambutan yang manis dan lezat, seringkali disajikan dengan tekstur yang lembut di dalam korsleting yang renyah.<br></br><br />
Harga : Rp 25.000 per potong
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose(4)}>Tutup</Button>
          <Button variant="primary" onClick={handleKembaliClick}>Pesan Sekarang</Button>
        </Modal.Footer>
      </Modal>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }} className='card'>
    <Card.Img variant="top" src={logoImg6} />
    <Card.Body>
      <Card.Title>Es Cream rambutan</Card.Title>
      <Card.Img variant="top" className='Stock' style={{ width: '7rem' }} src={Stock} />
      <div className="rating-container">
            <div className="rating-text-overlay">4.8</div>
            <Card.Img variant="top" className='Rating' src={Rating} style={{width:'3.8rem'}}/>
         </div>
      <Button variant="primary" onClick={() => handleShow(5)} className='modals'>Detail & Pemesanan</Button>
      <Modal
        show={show[5]} 
        onHide={() => handleClose(5)} 
        backdrop="static"
        keyboard={false}
        className='modal'
      >
        <Modal.Header closeButton>
          <Modal.Title>Deskripsi Produk</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Deskripsi: Es Cream Rambutan adalah es krim yang dibuat dengan mencampurkan daging rambutan ke dalam adonan es krim, menghasilkan rasa yang segar dan manis dengan sedikit rasa asam khas dari rambutan. <br /><br />
Harga: Rp 20.000 per porsi
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose(5)}>Tutup</Button>
          <Button variant="primary" onClick={handleKembaliClick}>Pesan Sekarang</Button>
        </Modal.Footer>
      </Modal>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }} className='card'>
    <Card.Img variant="top" src={logoImg7} />
    <Card.Body>
      <Card.Title>Manisan Tosika</Card.Title>
      <Card.Img variant="top" className='Stock' style={{ width: '7rem' }} src={Stock} />
      <div className="rating-container">
            <div className="rating-text-overlay">4.4</div>
            <Card.Img variant="top" className='Rating' src={Rating} style={{width:'3.8rem'}}/>
         </div>
      <Button variant="primary" onClick={() => handleShow(6)} className='modals'>Detail & Pemesanan</Button>
      <Modal
        show={show[6]} 
        onHide={() => handleClose(6)} 
        backdrop="static"
        keyboard={false}
        className='modal'
      >
        <Modal.Header closeButton>
          <Modal.Title>Deskripsi Produk</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Deskripsi: Manisan Rambutan adalah camilan manis yang terbuat dari potongan-potongan buah rambutan yang direndam dalam sirup gula, sehingga menghasilkan rasa manis yang konsisten dengan sedikit rasa asam. <br /> <br />
Harga : Rp 20.000 per porsi
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose(6)}>Tutup</Button>
          <Button variant="primary" onClick={handleKembaliClick}>Pesan Sekarang</Button>
        </Modal.Footer>
      </Modal>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }} className='card'>
    <Card.Img variant="top" src={logoImg8} />
    <Card.Body>
      <Card.Title>Sugar cookies</Card.Title>
      <Card.Img variant="top" className='Stock' style={{ width: '7rem' }} src={Stock} />
      <div className="rating-container">
            <div className="rating-text-overlay">4.9</div>
            <Card.Img variant="top" className='Rating' src={Rating} style={{width:'3.8rem'}}/>
         </div>
      <Button variant="primary" onClick={() => handleShow(7)} className='modals'>Detail & Pemesanan</Button>
      <Modal
        show={show[7]} 
        onHide={() => handleClose(7)} 
        backdrop="static"
        keyboard={false}
        className='modal'
      >
        <Modal.Header closeButton>
          <Modal.Title>Deskripsi Produk</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Deskripsi: Sugar Cookies Rambutan adalah kue kering yang terbuat dari adonan kue gula biasa yang diperkaya dengan potongan kecil atau serbuk rambutan, memberikan rasa manis dan aroma khas buah rambutan. <br /> <br />
Harga : Rp 10.000 - Rp 20.000 per porsi
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose(7)}>Tutup</Button>
          <Button variant="primary" onClick={handleKembaliClick}>Pesan Sekarang</Button>
        </Modal.Footer>
      </Modal>
    </Card.Body>
  </Card>
</div>
</motion.div>

<div className='title'>
<motion.div initial={{ opacity: 0, y: -90 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 3.5, delay: 3.5 }} className='title'>
  <h1>Produk Minuman Rambutan</h1>
  <h6>Cuaca lagi panas? atau lagi bete? Yuk segerin pake minuman bercita rasa Rambutan :D.  </h6>
  </motion.div>
</div>
<motion.div initial={{ opacity: 0, x: -110 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 4.2, delay: 3.6 }} className='title'>
<div className="menus d-flex justify-content-around">
  <Card style={{ width: '18rem' }} className='card'>
    <Card.Img variant="top" src={logoImg9} />
    <Card.Body>
      <Card.Title>Rambutan Smoothie </Card.Title>
      <Card.Img variant="top" className='Stock' style={{ width: '7rem' }} src={Stock} />
      <div className="rating-container">
            <div className="rating-text-overlay">4.9</div>
            <Card.Img variant="top" className='Rating' src={Rating} style={{width:'3.8rem'}}/>
         </div>
      <Button variant="primary" onClick={() => handleShow(8)} className='modals'>Detail & Pemesanan</Button>
      <Modal
        show={show[8]} 
        onHide={() => handleClose(8)} 
        backdrop="static"
        keyboard={false}
        className='modal'
      >
        <Modal.Header closeButton>
          <Modal.Title>Deskripsi Produk</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Deskripsi: Minuman smoothie yang menyegarkan dengan rasa manis dan segar dari buah rambutan yang dicampur dengan susu atau yogurt serta beberapa bahan tambahan seperti es dan gula. <br /> <br />
Harga : Rp 15.000 per gelas
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose(8)}>Tutup</Button>
          <Button variant="primary" onClick={handleKembaliClick}>Pesan Sekarang</Button>
        </Modal.Footer>
      </Modal>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }} className='card'>
    <Card.Img variant="top" src={logoImg10} />
    <Card.Body>
      <Card.Title>Es Buah</Card.Title>
      <Card.Img variant="top" className='Stock' style={{ width: '7rem' }} src={Stock} />
      <div className="rating-container">
            <div className="rating-text-overlay">4.6</div>
            <Card.Img variant="top" className='Rating' src={Rating} style={{width:'3.8rem'}}/>
         </div>
      <Button variant="primary" onClick={() => handleShow(9)} className='modals'>Detail & Pemesanan</Button>
      <Modal
        show={show[9]} 
        onHide={() => handleClose(9)} 
        backdrop="static"
        keyboard={false}
        className='modal'
      >
        <Modal.Header closeButton>
          <Modal.Title>Deskripsi Produk</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Deskripsi: Es buah yang terdiri dari potongan-potongan buah rambutan yang disajikan dalam campuran sirup manis dan segar, dicampur dengan potongan es batu. <br /> <br />
Harga : Rp 15.000 per gelas.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose(9)}>Tutup</Button>
          <Button variant="primary" onClick={handleKembaliClick}>Pesan Sekarang</Button>
        </Modal.Footer>
      </Modal>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }} className='card'>
    <Card.Img variant="top" src={logoImg11} />
    <Card.Body>
      <Card.Title>Es Setrup</Card.Title>
      <Card.Img variant="top" className='Stock' style={{ width: '7rem' }} src={Stock} />
      <div className="rating-container">
            <div className="rating-text-overlay">4.2</div>
            <Card.Img variant="top" className='Rating' src={Rating} style={{width:'3.8rem'}}/>
         </div>
      <Button variant="primary" onClick={() => handleShow(10)} className='modals'>Detail & Pemesanan</Button>
      <Modal
        show={show[10]} 
        onHide={() => handleClose(10)}
        backdrop="static"
        keyboard={false}
        className='modal'
      >
        <Modal.Header closeButton>
          <Modal.Title>Deskripsi Produk</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        Deskripsi: Minuman es yang dibuat dengan memadukan air gula atau sirup rambutan dengan potongan buah rambutan yang segar, dan ditambahkan dengan es serut. <br /> <br />
Harga : Rp 12.000 per gelas.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose(10)}>Tutup</Button>
          <Button variant="primary" onClick={handleKembaliClick}>Pesan Sekarang</Button>
        </Modal.Footer>
      </Modal>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }} className='card'>
    <Card.Img variant="top" src={logoImg12} />
    <Card.Body>
      <Card.Title>Es Teh</Card.Title>
      <Card.Img variant="top" className='Stock' style={{ width: '7rem' }} src={Stock} />
      <div className="rating-container">
            <div className="rating-text-overlay">4.7</div>
            <Card.Img variant="top" className='Rating' src={Rating} style={{width:'3.8rem'}}/>
         </div>
      <Button variant="primary" onClick={() => handleShow(11)} className='modals'>Detail & Pemesanan</Button>
      <Modal
        show={show[11]} 
        onHide={() => handleClose(11)} 
        backdrop="static"
        keyboard={false}
        className='modal'
      >
        <Modal.Header closeButton>
          <Modal.Title>Deskripsi Produk</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Deskripsi: Teh dingin yang diberi aroma dan rasa manis dari buah rambutan, sering kali disajikan dengan potongan buah rambutan sebagai hiasan. <br /> <br />
Harga : Rp 12.000 per gelas.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose(11)}>Tutup</Button>
          <Button variant="primary" onClick={handleKembaliClick}>Pesan Sekarang</Button>
        </Modal.Footer>
      </Modal>
    </Card.Body>
  </Card>  
</div>
</motion.div>


      </div>

   );
}

export default Menus;