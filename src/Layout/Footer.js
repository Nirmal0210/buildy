import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="footer__area">
        <div className="footer__top">
          <div className="container">
            <div className="row">
              <div className="col-xxl-5 col-md-4">
                <div className="footer__widget">
                  <Link to="/" className="d-flex align-items-center">
                    <img
                      src={require("../Assets/imgs/icon/logo-2.jpg")}
                      alt="Footer"
                    />
                    <p className="company_name">
                      M&M
                      <br /> INSTALLING LTD
                    </p>
                  </Link>
                  <p>
                    We work closely with clients to gain an understanding of
                    your desires both philoso phical.
                  </p>
                </div>
              </div>
              <div className="col-xxl-4 col-md-4">
                <div className="footer__widget footer__widget-2">
                  <h3 className="footer__widget-title">Information</h3>
                  <ul className="footer__quick-link">
                    <li>
                      <Link to="#">About Company</Link>
                    </li>
                    <li>
                      <Link to="#">Career</Link>
                    </li>
                    <li>
                      <Link to="#">Case Study</Link>
                    </li>
                    <li>
                      <Link to="#">Unloack System</Link>
                    </li>
                    <li>
                      <Link to="#">Blueprint</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-3 col-md-4">
                <div className="footer__widget footer__widget-3">
                  <h3 className="footer__widget-title">Contact Us</h3>
                  <ul className="footer__address">
                    <li>
                      <Link>133 LANCELOT ROAD WEMBLEY HA02PT.</Link>
                    </li>
                    <li>
                      <Link className="phone" to="tel:+07951167191">
                        +0795-116-7191
                      </Link>
                    </li>
                    <li>
                      <Link to="mailto:info@example.com">info@example.com</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12">
                <div className="footer__bottom-inner">
                  <div className="footer__copyright">
                    <p>
                      ©Alrights reserved by{" "}
                      <a
                        href="https://www.angriotechnologies.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Angrio Technologies
                      </a>
                    </p>
                  </div>

                  <div className="footer__social">
                    <ul className="footer__social-media">
                      <li>
                        <Link to="#">
                          <span>
                            <i className="fa-brands fa-facebook-f"></i>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span>
                            <i className="fa-brands fa-twitter"></i>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span>
                            <i className="fa-brands fa-instagram"></i>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span>
                            <i className="fa-brands fa-linkedin"></i>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
