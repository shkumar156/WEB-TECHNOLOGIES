import "./aboutLeft.css";
import img4 from "../Img/img 4.jpg";
import a4 from "../Images/about/a4.png";
function AboutLeft() {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title" >About Us</h1>
            <p className="card-text">
            Welcome to Apex Shopping, your one-stop destination for a world of shopping delights. We are dedicated to providing you with an unparalleled shopping experience that combines convenience, quality, and style.

At Apex Shopping, we understand that shopping is more than just acquiring products; it's about discovering new trends, expressing your unique style, and making life a little more enjoyable. Our mission is to empower you to shop with confidence, knowing that you'll find the perfect items to complement your lifestyle.
            </p>
           
          </div>
          <img src={a4} className="card-img-top1" alt="..." />
        </div>
      </div>
    </>
  );
}

export default AboutLeft;
