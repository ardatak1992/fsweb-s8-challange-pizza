import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-div">
        <div className="info">
          <img
            className="footer-logo"
            src="src\assets\footer\logo-footer.svg"
            alt=""
          />
          <address>
            <ul>
              <li>
                <img src="src/assets/footer/icons/icon-1.png" alt="" />
                <p>341 Londonderry Road, Istanbul Türkiye</p>
              </li>
              <li>
                <img src="src/assets/footer/icons/icon-2.png" alt="" />
                <a href="mailto:aciktim@teknolojikyemekler.com">
                  aciktim@teknolojikyemekler.com
                </a>
              </li>
              <li>
                <img src="src/assets/footer/icons/icon-3.png" alt="" />
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
            <img src="src/assets/footer/insta/li-0.png" alt="" />
            <img src="src/assets/footer/insta/li-1.png" alt="" />
            <img src="src/assets/footer/insta/li-2.png" alt="" />
            <img src="src/assets/footer/insta/li-3.png" alt="" />
            <img src="src/assets/footer/insta/li-4.png" alt="" />
            <img src="src/assets/footer/insta/li-5.png" alt="" />
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
