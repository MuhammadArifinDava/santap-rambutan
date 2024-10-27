import Navbars from './components/Navbar/Navbars'
import './App.scss'
import Hero from './components/Hero/hero'
import About from './components/About/About'
import Intro from './components/Intro/Intro'
import Parallax from './components/Parallax/Parallax'
import Menu from './components/Menu/Menu'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Loading from './components/Loading/Loading'



const App = () => {


  return (
    <>
      <section id="Loading">
        <Loading />
      </section>
      <section id="Hero">
        <Hero />
      </section>
      <section id="Navbars">
        <Navbars />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Intro">
        <Intro />
      </section>
      <section id="Parallax">
        <Parallax />
      </section>
      <section id="Menu">
        <Menu />
      </section>
      <section id="Contact">
        <Contact />
      </section>
      <section id="Footer">
        <Footer />
      </section>
    </>
  )
}

export default App
