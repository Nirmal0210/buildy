import React, { useEffect, useState } from "react";
import Testimonials from "../../Common/Testimonials";
import { Link } from "react-router-dom";
import AboutTeam from "../../Common/AboutTeam";
import { scrollTop } from "../../Components/Helper.js";
import { db } from "../../firebase";
import { onValue, ref } from "firebase/database";
import Loader from "../../Common/Loader";
import CompletedProject from "../../Common/CompletedProject";
import { Carousel } from "react-bootstrap";

const About = () => {
  const carouselSetting = {
    indicators: false,
    loop: true,
    interval: 1000,
    fade: true,
    prevIcon: (
      <div className="service__btn-next wow wcfadeUp" data-wow-delay="0.75s">
        <span>
          <i className="fa-solid fa-arrow-left"></i>
        </span>
      </div>
    ),

    nextIcon: (
      <div className="service__btn-prev wow wcfadeUp" data-wow-delay="0.75s">
        <span>
          <i className="fa-solid fa-arrow-right"></i>
        </span>
      </div>
    ),
  };
  const [loader, setLoader] = useState(true);
  const [aboutData, setAboutData] = useState([]);
  const [serviceData, setServiceData] = useState([]);

  const getServiceData = () => {
    let query = ref(db, "service");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        Object.values(data).map((item) => {
          setServiceData((serviceData) => [...serviceData, item]);
        });
      } else {
        setServiceData([]);
      }
    });
  };

  const getAboutData = () => {
    let query = ref(db, "about");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        Object.values(data).map((item) => {
          setAboutData((aboutData) => [...aboutData, item]);
        });
      } else {
        setAboutData([]);
      }
    });
  };
  const getData = () => {
    setLoader(true);
    getAboutData();
    getServiceData();
    scrollTop();
    setLoader(false);
  };

  useEffect(() => {
    document.title = "About - M&M Installing";
    getData();
  }, []);
  return loader ? (
    <Loader />
  ) : (
    <>
      <section className="breadcrumb__area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content">
                <h1 className="breadcrumb__title">about</h1>
                <p>A trusted and largest construction company</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about__area-4">
        <div className="container line">
          <span className="line-3"></span>
          <span className="line-4"></span>
          <span className="line-5"> </span>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="about__right-4">
                <h2 className="section-sub-title">About Company</h2>
                <h3 className="section-title">
                  World’s largest and trusted architecture company
                </h3>
                <p
                  className="about__right-4-text wow wcfadeUp"
                  data-wow-delay="0.45s"
                >
                  MM Installing is a family-owned and operated business that has
                  been providing top-quality glass installation and supply
                  services for<strong> over 8 years.</strong> Our company was
                  founded with the goal of providing our customers with the
                  highest level of service and quality, and we've been doing
                  just that ever since.
                </p>
                <p
                  className="about__right-4-text wow wcfadeUp"
                  data-wow-delay="0.45s"
                >
                  We are a team of highly skilled and experienced technicians
                  who are dedicated to providing the best possible service to
                  our customers. Our team has a wealth of knowledge and
                  experience in the glass installation industry, and we use only
                  the best quality materials and the most advanced techniques to
                  ensure that your project is completed to the highest standards
                  of quality and safety.
                </p>

                <div className="about__counter-3">
                  <div className="about__content-3">
                    <h4
                      className="about__number about__number-3 wow wcfadeUp"
                      data-wow-delay="0.75s"
                    >
                      8
                    </h4>
                    <h5 className="about__counter-title-3">
                      Years <br />
                      experience
                    </h5>
                  </div>
                  <div
                    className="about__content-3 wow wcfadeUp"
                    data-wow-delay="0.9s"
                  >
                    <Link className="wc-btn-primary btn-hover" to="/services">
                      <span></span> Explore Service <strong></strong>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="about__left-4 zi-9">
                <div className="about__left-4-img">
                  <img
                    className="about__img4-1"
                    src={require("../../Assets/imgs/about/4/1.jpg")}
                    alt="About"
                  />
                  <img
                    className="about__img4-2"
                    src={require("../../Assets/imgs/about/4/3.jpg")}
                    alt="About"
                  />
                </div>
                <div className="about__left-4-img-2">
                  <img
                    className="about__img4-3"
                    src={require("../../Assets/imgs/about/4/2.jpg")}
                    alt="About"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="modal fade"
        id="about_modal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog__hero">
          <div className="modal-content modal-content__hero">
            <button
              type="button"
              className="close-modal"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <iframe
              src="https://www.youtube.com/embed/0g1Q4fBDp2U"
              title="Modal Video"
              allow="accelerometer; autoplay;"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="step__area">
        <div className="container line">
          <span className="line-3"></span>
          <span className="line-4"></span>
          <span className="line-5"> </span>
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div
                className="step__content wow wcfadeUp"
                data-wow-delay="0.15s"
              >
                <img
                  src={require("../../Assets/imgs/icon/step-icon-1.png")}
                  alt="Planning"
                />
                <h4>Quality craftsmanship</h4>
                <p>
                  We pride ourselves on providing the highest quality of
                  workmanship in all of our projects.
                </p>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div
                className="step__content step-2 wow wcfadeUp"
                data-wow-delay="0.3s"
              >
                <img
                  src={require("../../Assets/imgs/icon/step-icon-2.png")}
                  alt="Planning"
                />
                <h4>Attention to detail</h4>
                <p>
                  {" "}
                  We pay close attention to every detail, no matter how small,
                  to ensure that each project is completed to perfection.
                </p>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div
                className="step__content step-3 wow wcfadeUp"
                data-wow-delay="0.45s"
              >
                <img
                  src={require("../../Assets/imgs/icon/step-icon-3.png")}
                  alt="Planning"
                />
                <h4>Customer satisfaction</h4>
                <p>
                  Our top priority is ensuring that our customers are completely
                  satisfied with the end result of their project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CompletedProject />
      <section className="service__area">
        <div className="container line">
          <span className="line-3"></span>
          <span className="line-4"></span>
          <span className="line-5"> </span>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-5">
              <div className="service__title">
                <h2
                  className="section-sub-title wow wcfadeUp"
                  data-wow-delay="0.15s"
                >
                  About Company
                </h2>
                <h3
                  className="section-title wow wcfadeUp"
                  data-wow-delay="0.3s"
                >
                  Services we <br /> provide
                </h3>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-7">
              <div className="service__text wow wcfadeUp" data-wow-delay="0.6s">
                <p>
                  World class infrastructure solutions to customers and
                  stakeholders across a broad range of construction industry
                  sectors.
                </p>
              </div>
            </div>
          </div>
          <Carousel {...carouselSetting}>
            {serviceData && serviceData.length > 0 ? (
              serviceData.map((item, index) => (
                <Carousel.Item key={index}>
                  <div className="service__slide" data-wow-delay="0.45s">
                    <Link to="/servicedetails">
                      <div className="service__thumb-wrapper">
                        <img
                          className="service__thumb"
                          src={
                            item.imageUrl
                              ? item.imageUrl
                              : require("../../Assets/imgs/service/1/1.jpg")
                          }
                          alt="Service"
                        />
                      </div>
                      <div className="service__slide-title">
                        <img
                          src={require("../../Assets/imgs/service/1/icon.png")}
                          alt="Service Icon"
                        />
                        <h4>{item.serviceName && item.serviceName}</h4>
                      </div>
                    </Link>
                  </div>
                </Carousel.Item>
              ))
            ) : (
              <p>No Data Found</p>
            )}
          </Carousel>

          <div className="row">
            <div className="col-xxl-12">
              <div className="service__btm wow wcfadeUp" data-wow-delay="0.9s">
                <p>
                  Need more services based on your demand?{" "}
                  <Link to="contact.html">
                    Contact us <i className="fa-solid fa-arrow-left"></i>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutTeam />
      <Testimonials />
    </>
  );
};

export default About;
