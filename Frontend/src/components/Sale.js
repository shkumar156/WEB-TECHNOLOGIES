import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import './sale.css'; 
import Sale1 from '../Img/Sale1.webp';   

function Sale() {
  return (
    <div>
      <img className="image1" src={Sale1} alt="" style={{ width: '100vw' }} />
       
      <h2 className="s">Select a Sale:</h2>
      <br/>
      <br/>
      <br/>
      <ul className="off">
        <li>
          <Link to="/saleitems">30% Off Sale</Link>
        </li>
        <br/>
        <li>
          <Link to="/saleitems">50% Off Sale</Link>
        </li>
        <br/>
        <li>
          <Link to="/saleitems">70% Off Sale</Link>
        </li>
      </ul>
      <br/>
      <br/>
      <h5 className="sale-paragraph" style={{ textAlign: 'center', color: 'white' }}>
        Explore our exclusive sales with unbeatable discounts on a wide range of products.
        <br/> Don't miss out on the chance to shop for your favorite items at incredible prices. Hurry, these offers won't last long!
      </h5>
      <br/>

      <Footer/>
    </div>
  );
}

export default Sale;
