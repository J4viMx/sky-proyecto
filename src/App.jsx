import Header from "./components/Header"
import Carousel from "./components/Carousel"
import Paquetes from "./components/Paquetes"
import Footer from "./components/Footer"
import CubrirPantalla from "./components/CubrirPantalla"

import { useState } from "react"

function App() {

  const [pantalla, setPantalla] = useState(true)

  return (
    <>
      {pantalla && 
      <CubrirPantalla
        setPantalla = {setPantalla}
      />
      }
      <Header/>
      <Carousel/>
      <Paquetes/>
      <Footer/>
    </>
    
  )
}

export default App
