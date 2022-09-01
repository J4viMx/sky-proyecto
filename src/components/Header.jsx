import logo from '../assets/logo.png'

const header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-fondo ">
        <div className="container">
            <a className="navbar-brand text-white" href="#"><img src={logo} alt="logo" className='logo' /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-white" href="#">Servicios/TV HOGAR</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-white" href="#">Entretenimiento / BLUE TO GO</a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}
export default header