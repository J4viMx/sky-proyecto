import carousel1 from '../assets/carousel1.png'
import carousel2 from '../assets/carousel2.png'
import carousel3 from '../assets/carousel3.png'
import carousel4 from '../assets/carousel4.png'


const Carousel = () => {
  return (
    <>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel px-5">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2000">
                <img src={carousel1} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                <img src={carousel2} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={carousel3} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={carousel4} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </>
  )
}
export default Carousel