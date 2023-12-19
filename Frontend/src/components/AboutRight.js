import "./aboutRight.css";
import img4 from "../Img/img 4.jpg";
import a5 from "../Images/about/a5.jpg";
function AboutRight() {
  return (
    <>
      <div className="container">
        <div className="card">
          <img src={a5} className="card-img-top1" alt="..." />
          <div className="card-body">
            <h1 className="card-title">Our History</h1>
            <p className="card-text " >
            Apex Shopping has a rich and vibrant history that spans over 15 years. Founded with a passion for connecting people with the products they love, we started as a small, local store with a big dream. Over the years, we've evolved into a thriving online shopping destination, serving customers from around the world.
            </p>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutRight;
