import paramount from '../../assets/disney-plus-logo.png'

const Kids = () => {
  return (
    <div className="container py-5">
    <div className="row justify-content-center">
        <div className="col-md-4">
            <div class="card">
                <div className="plan_black">PLAN BLACK</div>
                <div class="card-body text-center">
                    <div className='card-header-futbol'>
                        <div className="d-flex  gap-3 justify-content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tv" viewBox="0 0 16 16">
                                <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"/>
                            </svg>
                            <p className="texto-azul">SKY HD BLACK</p>
                        </div>
                        <h5 class="card-title text-warning text-center">Hasta 271 Canales</h5>
                        <p class="card-text text-center fw-bold">La experiencia mas completa en HD</p>

                    </div>
                    <hr/>
                    <p className="fw-bold">Precio oferta</p>
                    <p className="display-5 precio">$924*</p>
                    <p>Promocion por 3 meses</p>
                    <p className='fw-bold'>Cargo fijo normal: $1,054*</p>

                    <hr />

                    <div className="incluye-sub">
                        <p className="fw-bold">Incluye suscripción</p>
                        <img src={paramount} alt="paramount logo" className='paramount-logo pb-3' />
                    </div>

                    <hr />

                    <a href="#" class="btn btn-primary">Contratar ahora</a>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div class="card">
                <div className="plan_platino">PLAN PLATINUM</div>
                <div class="card-body text-center">
                    <div className='card-header-futbol'>
                        <div className="d-flex  gap-3 justify-content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tv" viewBox="0 0 16 16">
                                <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"/>
                            </svg>
                            <p className="texto-azul">SKY HD PLATINUM</p>
                        </div>
                        <h5 class="card-title text-warning text-center">Hasta 108 Canales</h5>
                        <p class="card-text text-center fw-bold">La experiencia mas completa en HD</p>

                    </div>
                    <hr/>
                    <p className="fw-bold">Precio oferta</p>
                    <p className="display-5 precio">$529*</p>
                    <p>Promocion por 3 meses</p>
                    <p className='fw-bold'>Cargo fijo normal: $649*</p>

                    <hr />

                    <div className="incluye-sub">
                        <p className="fw-bold">Incluye suscripción</p>
                        <img src={paramount} alt="paramount logo" className='paramount-logo pb-3' />
                    </div>

                    <hr />

                    <a href="#" class="btn btn-primary">Contratar ahora</a>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div class="card">
                <div className="plan_gold">PLAN GOLD</div>
                <div class="card-body text-center">
                    <div className='card-header-futbol'>
                        <div className="d-flex  gap-3 justify-content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tv" viewBox="0 0 16 16">
                                <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"/>
                            </svg>
                            <p className="texto-azul">SKY HD GOLD</p>
                        </div>
                        <h5 class="card-title text-warning text-center">Hasta 89 Canales</h5>
                        <p class="card-text text-center fw-bold">La experiencia mas completa en HD</p>

                    </div>
                    <hr/>
                    <p className="fw-bold">Precio oferta</p>
                    <p className="display-5 precio">$469*</p>
                    <p>Promocion por 3 meses</p>
                    <p className='fw-bold'>Cargo fijo normal: $569*</p>

                    <hr />

                    <div className="incluye-sub">
                        <p className="fw-bold">Incluye suscripción</p>
                        <img src={paramount} alt="paramount logo" className='paramount-logo pb-3' />
                    </div>

                    <hr />

                    <a href="#" class="btn btn-primary">Contratar ahora</a>
                </div>
            </div>
        </div>
        
    </div>
    
</div>
  )
}
export default Kids