import AboutLeft from "./AboutLeft";
import AboutMid from "./AboutMid";
import AboutRight from "./AboutRight";
import Footer from "./Footer";

function Aboutus(){
    return(
        <>
              <div className="container-fluid">
        <div className="row row3">
          <div className="col col-md-5">
            <AboutLeft />
          </div>
          <div className="col col-md-2">
            <AboutMid />
          </div>
          <div className="col col-md-5">
            <AboutRight />
          </div>
          <Footer/>
        </div>
      </div>
        </>
    );

}

export default Aboutus;