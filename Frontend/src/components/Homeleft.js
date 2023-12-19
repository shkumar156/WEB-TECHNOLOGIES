import "./homeleft.css";
import img4 from "../Img/img 4.jpg";
import b1 from "../Images/blog/b1.jpg";
import goals from "../Img/goals.avif";
import homeleft from '../Img/homeleft.webp';
function Homeleft() {
  return (
    <>
      <div className="container1">
        <div className="card1">
          <div className="card-body1">
            <h1 className="card-title1">Our Goals</h1>
            <p className="card-text1" >
            The primary goals of our shopping website are to provide an exceptional online shopping experience for our customers while achieving business success. These goals include:
<br/>
Customer Satisfaction: We aim to prioritize customer satisfaction by offering a user-friendly, visually appealing, and secure platform. Providing a wide range of high-quality products, easy navigation, and efficient customer support are paramount.
            </p>
           
          </div>
          <img src={homeleft} className="card-img-top2" alt="..." />
        </div>
      </div>
    </>
  );
}

export default Homeleft;
