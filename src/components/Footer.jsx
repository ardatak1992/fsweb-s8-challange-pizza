import React from "react";
import "./Footer.css";

import footerLogo from "../assets/footer/logo-footer.svg"

import insta0 from "../assets/footer/insta/li-0.png"
import insta1 from "../assets/footer/insta/li-1.png"
import insta2 from "../assets/footer/insta/li-2.png"
import insta3 from "../assets/footer/insta/li-3.png"
import insta4 from "../assets/footer/insta/li-4.png"
import insta5 from "../assets/footer/insta/li-5.png"

import footerIcon1 from "../assets/footer/icons/icon-1.png"
import footerIcon2 from "../assets/footer/icons/icon-2.png"
import footerIcon3 from "../assets/footer/icons/icon-3.png"

const Footer = () => {
  return (
    <footer>
      <div className="footer-div">
        <div className="info">
          <img
            className="footer-logo"
            src="/src/assets/footer/logo-footer.svg"
            alt=""
          />
          <address>
            <ul>
              <li>
                <img src={footerIcon1} alt="" />
                <p>341 Londonderry Road, Istanbul Türkiye</p>
              </li>
              <li>
                <img src={footerIcon2} alt="" />
                <a href="mailto:aciktim@teknolojikyemekler.com">
                  aciktim@teknolojikyemekler.com
                </a>
              </li>
              <li>
                <img src={footerIcon3} alt="" />
                <a href="tel:+90 216 123 45 67">+90 216 123 45 67</a>
              </li>
            </ul>
          </address>
        </div>
        <ul className="footer-menu">
          <h5>Hot Menu</h5>
          <li>
            <a className="footer-link" href="">
              Terminal Pizza
            </a>
          </li>
          <li>
            <a href="">5 Kişilik Hackathlon Pizza</a>
          </li>
          <li>
            <a href="">useEffect Tavuklu Pizza</a>
          </li>
          <li>
            <a href="">Beyaz Console Frosty</a>
          </li>
          <li>
            <a href="">Testler Geçti Mutlu Burger</a>
          </li>
          <li>
            <a href="">Position Absolute Acı Burger</a>
          </li>
        </ul>
        <div className="instagram">
          <h5>Instagram</h5>
          <div className="instagram-images">



            <img src={insta0} alt="" />
            <img src={insta1} alt="" />
            <img src={insta2} alt="" />
            <img src={insta3} alt="" />
            <img src={insta4} alt="" />
            <img src={insta5} alt="" />
          </div>
        </div>
      </div>
      <hr style={{ width: "140%" }} />
      <div className="copyright">
        <p>&copy; 2023 Teknolojik Yemekler.</p>
        <a href="">
          <i className="fa-brands fa-twitter"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
