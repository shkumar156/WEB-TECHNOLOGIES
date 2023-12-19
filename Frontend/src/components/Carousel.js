import "./carousel.css";
import bop from '../Images/banner/bop.webp';
import bop2 from '../Images/banner/bop2.jpeg';
import bop3 from '../Images/banner/bop3.jpeg'
function Carousel() {
  return (
    <>
     <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img className="carouselImg" src={bop3} alt="" />
    </div>
    <div className="carousel-item">
    <img className="carouselImg" src={bop} alt="" />
    </div>
    <div className="carousel-item">
    <img className="carouselImg" src={bop2} alt="" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  );
}

export default Carousel;
