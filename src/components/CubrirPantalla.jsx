const CubrirPantalla = ({setPantalla}) => {
  return (
    <div className="cubre-pantalla d-flex flex-column justify-content-center align-items-center">
        <p className="text-white">Este proyecto fue realizado para una prueba de selección de profesionales en desarrollo de sky.com.mx / Las imagenes mostradas aqui no son de mi propiedad</p>

        <p className="text-white">Proyecto realizado por Javier Juarez</p>
        <button onClick={() => setPantalla(false)} className="btn btn-success">Ver proyecto</button>
    </div>
  )
}
export default CubrirPantalla