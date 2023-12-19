import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";
import Footer from "./Footer";
function Contactus(){
return(
<>
<div className="container-fluid">
<div className="row row6">
          <h1 >Contact Us</h1>
        </div>
        <div className="row row7">
          <div className="col col-md-6">
            <ContactLeft />
          </div>
          <div className="col col-md-6">
            <ContactRight />
          </div>
        </div>
        </div>
        <Footer/>


</>
);
}

export default Contactus;
