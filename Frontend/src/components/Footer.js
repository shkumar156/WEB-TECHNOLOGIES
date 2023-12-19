import React from 'react';
import './footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-info">
          <div>
            <h4>Contact Information</h4>
            <p className='p1'>Jadoon Plaza Phase II,<br/> Abbottabad, <br/> Pakistan</p>
            <p className='p2'>Email: ApexShopping@gmail.com</p>
            <p className='p3'>Phone: 03407652100</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Catalogues</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h4 className='cs'>Customer Services</h4>
            <ul className='cs1'>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Order Tracking</a></li>
              <li><a href="#">Store Locator</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Return & Exchange Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="newsletter-signup">
          <h4>Newsletter Signup</h4>
          <p className='newsletterr'>Subscribe to our newsletter and get the latest updates.</p>
          <input type="email" placeholder="Your email address" />
          <button className='subscribe'>Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
