import React from "react";
import "./FooterStyle.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                {/* Değiştir: href yerine to özelliğini kullanın */}
                <Link to="/about">about us</Link>
              </li>
              <li>
                {/* Değiştir: href yerine to özelliğini kullanın */}
                <Link to="/service">our service</Link>
              </li>
              <li>
                {/* Değiştir: href yerine to özelliğini kullanın */}
                <Link to="/privacy">privacy policy</Link>
              </li>
              <li>
                {/* Değiştir: href yerine to özelliğini kullanın */}
                <Link to="/affiliate">affiliate program</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                {/* Değiştir: href yerine to özelliğini kullanın */}
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                {/* Değiştir: href yerine to özelliğini kullanın */}
                <Link to="/returns">returns</Link>
              </li>
              <li>
                {/* Değiştir: href yerine to özelliğini kullanın */}
                <Link to="/status">Status</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                {/* Değiştir: href yerine to özelliğini kullanın */}
                <Link to="/about">about us</Link>
              </li>
              <li>
                {/* Değiştir: href yerine to özelliğini kullanın */}
                <Link to="/service">our service</Link>
              </li>
              <li>
                {/* Değiştir: href yerine to özelliğini kullanın */}
                <Link to="/privacy">privacy policy</Link>
              </li>
              <li>
                {/* Değiştir: href yerine to özelliğini kullanın */}
                <Link to="/affiliate">affiliate program</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
