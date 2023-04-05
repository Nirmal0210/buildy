import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import { useLocation } from "react-router-dom";
import DarkModeToggle from "react-dark-mode-toggle";

const Header = ({ themeToggler, theme }) => {
  const location = useLocation();
  const openCanvas = () => {
    $(".offcanvas__area").css("transform", "perspective(300px) rotateY(0deg)");
    $(".offcanvas__area").css("opacity", "1");
    $(".offcanvas__area").css("visibility", "visible");
  };
  const closeCanvas = () => {
    $("body").css("overflow", "visible");
    $(".offcanvas__area").css("transform", "perspective(300px) rotateY(18deg)");
    $(".offcanvas__area").css("opacity", "0");
    $(".offcanvas__area").css("visibility", "hidden");
  };

  return (
    <>
      <header>
        <div className="header__area menu-fixed p-2">
          <div className="header__menu-area-2">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xxxl-2 col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-4">
                  <div className="header__logo-2">
                    <Link to="/">
                      <img
                        src={require("../Assets/imgs/icon/logo-2.jpg")}
                        alt="Header Logo"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-xxxl-8 col-xxl-7 col-xl-7 col-lg-4 col-md-4 col-3 d-flex align-items-center">
                  <nav className="header__nav b-right">
                    <ul>
                      <li
                        className={`${
                          location.pathname === "/home" ||
                          location.pathname === "/"
                            ? "li-active"
                            : ""
                        }`}
                      >
                        <Link to="/home">Home</Link>
                      </li>
                      <li
                        className={`${location.pathname === "/about" &&
                          "li-active"}`}
                      >
                        <Link to="/about">About</Link>
                      </li>
                      <li
                        className={`${location.pathname === "/services" &&
                          "li-active"}`}
                      >
                        <Link to="/services">Services</Link>
                      </li>
                      <li
                        className={`${location.pathname === "/projects" &&
                          "li-active"}`}
                      >
                        <Link to="/projects">Projects</Link>
                      </li>
                      <li
                        className={`${location.pathname === "/blogs" &&
                          "li-active"}`}
                      >
                        <Link to="/blogs">Blogs</Link>
                      </li>
                      <li
                        className={`${location.pathname === "/contactus" &&
                          "li-active"}`}
                      >
                        <Link to="/contactus">Contact Us</Link>
                      </li>
                      <li
                        className={`${location.pathname === "/career" &&
                          "li-active"}`}
                      >
                        <Link to="/career">Career</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="col-xxxl-2 col-xxl-3 col-xl-3 col-lg-5 col-md-5 col-5">
                  <div className="header__others">
                    <div className="header__switch">
                      <DarkModeToggle
                        onChange={() => themeToggler()}
                        defaultChecked={
                          localStorage.getItem("theme") === "light"
                            ? false
                            : true
                        }
                        checked={theme === "light" ? false : true}
                        size={50}
                      />
                    </div>
                    <div className="header__support">
                      <p>
                        Call for support{" "}
                        <Link to="tel:+07951167191">+0795-116-7191</Link>
                      </p>
                    </div>

                    <div
                      className="header__offcanvas"
                      id="open_offcanvas"
                      onClick={() => openCanvas()}
                    >
                      <span>
                        <i className="fa-solid fa-bars"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="offcanvas__area">
        <div
          className="close_offcanvas"
          id="close_offcanvas"
          onClick={() => closeCanvas()}
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="offcanvas__inner">
          <div className="offcanvas__left">
            <div className="side__navbar-wrapper">
              <nav className="side__navbar">
                <ul>
                  <li
                    className={`mean-li ${
                      location.pathname === "/home" || location.pathname === "/"
                        ? "mean-li-active"
                        : ""
                    }`}
                  >
                    <Link onClick={() => closeCanvas()} to="/home">
                      Home
                    </Link>
                  </li>
                  <li
                    className={`mean-li ${location.pathname === "/about" &&
                      "mean-li-active"}`}
                  >
                    <Link onClick={() => closeCanvas()} to="/about">
                      About
                    </Link>
                  </li>
                  <li
                    className={`mean-li ${location.pathname === "/services" &&
                      "mean-li-active"}`}
                  >
                    <Link onClick={() => closeCanvas()} to="/services">
                      Services
                    </Link>
                  </li>
                  <li
                    className={`mean-li ${location.pathname === "/projects" &&
                      "mean-li-active"}`}
                  >
                    <Link onClick={() => closeCanvas()} to="/projects">
                      Projects
                    </Link>
                  </li>
                  <li
                    className={`mean-li ${location.pathname === "/blogs" &&
                      "mean-li-active"}`}
                  >
                    <Link onClick={() => closeCanvas()} to="/blogs">
                      Blogs
                    </Link>
                  </li>
                  <li
                    className={`mean-li ${location.pathname === "/contactus" &&
                      "mean-li-active"}`}
                  >
                    <Link onClick={() => closeCanvas()} to="/contactus">
                      Contact Us
                    </Link>
                  </li>
                  <li
                    className={`mean-li ${location.pathname === "/career" &&
                      "mean-li-active"}`}
                  >
                    <Link onClick={() => closeCanvas()} to="/career">
                      Career
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="offcanvas__right">
            <div className="offcanvas__logo">
              <Link to="/">
                <img
                  src={require("../Assets/imgs/icon/logo-2.jpg")}
                  alt="Site Logo"
                />
              </Link>
            </div>
            <div className="offcanvas__contact">
              <ul>
                <li>
                  <span>Location</span>
                  <Link to="/">
                    491538 Bob Road, Motopistal, <br />
                    New York, USA
                  </Link>
                </li>
                <li>
                  <span>Call Us</span>
                  <a href="tel:+02387321032">+(02) 387 - 321 -032</a>
                </li>
                <li>
                  <span>Email Us</span>
                  <a href="mailto:help@example.com">help@example.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
