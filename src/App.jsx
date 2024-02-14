import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Menu from "./components/Menu/Menu"
import Menus from "./components/Menus/Menus"
import About from "./components/About/About"
import "./app.scss"


const App = () => {


  return (
    <>
    <section id="Navbar">
      <Navbar />
      <Hero />
      </section>
      <section id="Menu">
      <Menu />
      </section>
      <section id="Menus">
      <Menus />
      </section>
      <section id="About">
      <About />
      </section>
    </>
  )
}

export default App
