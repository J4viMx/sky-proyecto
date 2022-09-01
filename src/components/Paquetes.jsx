import { useState } from "react"
import Futbol from "./paquetes/Futbol"
import Kids from "./paquetes/Kids"
import Entretenimiento from "./paquetes/Entretenimiento"

const Paquetes = () => {

    const [categoria, setCategoria] = useState('futbol')

  return (
    <div className="fondo-paquetes">
        <h2 className="text-center font-bold pt-5 fw-bold">Paquetes HD</h2>

        <div className="d-flex gap-4 mt-5 justify-content-center">
            <a onClick={() => setCategoria('futbol')} className={`${categoria === 'futbol' && 'boton-seleccionado'} text-black text-decoration-none fw-bold botones-categoria `}> Deportes </a>
            <a onClick={ () => setCategoria('kids') } className={`${categoria === 'kids' && 'boton-seleccionado'} text-black text-decoration-none fw-bold botones-categoria `}> Niños </a>
            <a onClick={ () => setCategoria('entretenimiento') } className={`${categoria === 'entretenimiento' && 'boton-seleccionado'} text-black text-decoration-none fw-bold botones-categoria `}> Entretenimiento </a>
        </div>

        { categoria === 'futbol' && <Futbol/>}
        { categoria === 'kids' && <Kids/>}
        { categoria === 'entretenimiento' && <Entretenimiento/>}
        
      
        

        
    
    </div>
  )
}
export default Paquetes