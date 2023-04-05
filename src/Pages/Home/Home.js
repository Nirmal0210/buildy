import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import Testimonials from "../../Common/Testimonials";
import CompletedProject from "../../Common/CompletedProject";
import CaseStudies from "../../Common/CaseStudies";
import AboutTeam from "../../Common/AboutTeam";
import { db } from "../../firebase";
import { onValue, ref } from "firebase/database";
import { scrollTop } from "../../Components/Helper";
import Loader from "../../Common/Loader";
import HomeBlogs from "./HomeBlogs";

const Home = () => {
  const [loader, setLoader] = useState(true);
  const [homeData, setHomeData] = useState([]);
  const [featureImgs, setFeatureImgs] = useState([]);
  const [videoData, setVideoData] = useState({});
  const getHomeData = () => {
    let query = ref(db, "home");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        Object.values(data).map((item) => {
          setHomeData((homeData) => [...homeData, item]);
        });
      }
    });
  };
  const getFeatureImg = () => {
    let query = ref(db, "home/FeatureImage");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        Object.values(data).map((item) => {
          setFeatureImgs((featureImgs) => [...featureImgs, item]);
        });
      }
    });
  };
  const getVideoData = () => {
    let query = ref(db, "home/VideoLink");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        Object.values(data).map((item) => setVideoData(item));
      }
    });
  };
  const getData = () => {
    setLoader(true);
    getHomeData();
    getFeatureImg();
    getVideoData();
    setLoader(false);
  };
  useEffect(() => {
    document.title = "Home - M&M Installing";
    getData();
    scrollTop();
  }, []);
  return loader ? (
    <Loader />
  ) : (
    <>
      <section className="hero__area-2">
        <div className="container line">
          <span className="line-3"></span>
          <span className="line-4"></span>
          <span className="line-5"> </span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__content-2">
                <h1>
                  Creating beautiful spaces with precision and expertise for{" "}
                  <br />
                  <span id="typed_lists" style={{ color: "#F68A0A" }}>
                    <Typed
                      strings={[
                        "Business",
                        "Home",
                        "Organization",
                        "Government Property",
                      ]}
                      typeSpeed={40}
                      backSpeed={50}
                      loop
                    />
                  </span>
                  <span id="typed"></span>
                </h1>
                <p>
                  At MM Installing, we believe that quality is never an
                  accident; it is always the result of high intention, sincere
                  effort, intelligent direction and skilful execution
                </p>
                <Link className="wc-btn-primary btn-hover" to="/contactus">
                  <span></span> Explore Services & Projects <strong></strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about__area-2">
        <div className="about__thumb-2 wcfadeUp">
          {/* <img
            src={}
            alt="About"
          /> */}
          {videoData.videoLink && (
            <video
              width="70%"
              height="60%"
              style={{ display: "flex", margin: "auto" }}
              autoPlay
              controls={true}
            >
              <source
                src={
                  videoData.videoLink
                    ? videoData.videoLink
                    : require("../../Assets/imgs/thumb/hero-2.jpg")
                }
                type="video/mp4"
              ></source>
            </video>
          )}
          {/* {/* <div className="play-btn" id="about_play"> */}
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#hero_modal"
            className="wow wcfadeUp"
            data-wow-delay="0.3s"
          >
            <i className="fa-solid fa-play"></i>
          </button>
        </div>

        <div className="container line">
          <span className="line-3"></span>
          <span className="line-4"></span>
          <span className="line-5"> </span>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="about__left-2">
                <h2
                  className="section-sub-title-2 text-white wow wcfadeUp"
                  data-wow-delay="0.15s"
                >
                  About Company
                </h2>
                <h3
                  className="section-title text-white wow wcfadeUp"
                  data-wow-delay="0.3s"
                >
                  Welcome to MM Installing,We are a professional, experienced,
                  <br />
                  and reliable company that specializes in providing
                  <br />
                  high-quality glass products and services to residential and
                  <br />
                  commercial customers.
                </h3>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="about__right-2">
                <div
                  className="about__experience wow wcfadeUp"
                  data-wow-delay="0.45s"
                >
                  <p>
                    Our team of expert technicians has the skills and knowledge
                    to handle any type of glass installation project, from
                    simple window replacements to complex custom glass
                    installations. We use only the best quality materials and
                    the most advanced techniques to ensure that your project is
                    completed to the highest standards of quality and safety.
                  </p>
                  <h4>
                    <span>8</span> Years Of Experience
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="modal fade"
        id="hero_modal"
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

      <section className="company__area-2">
        <div className="marquee wow wcfadeUp" data-wow-delay="0.3s">
          <ul className="marquee__content">
            <li>Interior design</li>
            <li>Architectural plan</li>
            <li>Innovation</li>
            <li>Residential space</li>
            <li>Sketch</li>
            <li>site planning</li>
            <li>Construction</li>
          </ul>

          <ul aria-hidden="true" className="marquee__content">
            <li>Interior design</li>
            <li>Architectural plan</li>
            <li>Innovation</li>
            <li>Residential space</li>
            <li>Sketch</li>
            <li>site planning</li>
            <li>Construction</li>
          </ul>
        </div>
      </section>
      <section className="feature__area">
        <div className="container line">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="feature__left wow wcfadeUp" data-wow-delay="0.3s">
                <img
                  className="feature__img-1"
                  src={
                    featureImgs.length > 0
                      ? featureImgs[0].featureImageUrl1
                      : require("../../Assets/imgs/feature/2/1.jpg")
                  }
                  alt="feature"
                />
                <img
                  className="feature__img-2"
                  src={
                    featureImgs.length > 0
                      ? featureImgs[0].featureImageUrl2
                      : require("../../Assets/imgs/feature/2/2.jpg")
                  }
                  alt="feature"
                />
                <img
                  className="feature__img-3"
                  src={
                    featureImgs.length > 0
                      ? featureImgs[0].featureImageUrl3
                      : require("../../Assets/imgs/feature/2/3.jpg")
                  }
                  alt="feature"
                />
                <div className="feature__sticker">
                  <img
                    className="feature__img-4"
                    src={require("../../Assets/imgs/feature/2/icon.png")}
                    alt="feature"
                  />
                  <img
                    className="feature__img-5"
                    src={require("../../Assets/imgs/feature/2/text.png")}
                    alt="feature"
                  />
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="feature__right">
                <div className="feature__title-wrapper-2">
                  <h2
                    className="section-sub-title-2 wow wcfadeUp"
                    data-wow-delay="0.15s"
                  >
                    Core Feature
                  </h2>
                  <h3
                    className="section-title wow wcfadeUp"
                    data-wow-delay="0.3s"
                  >
                    Realistic design <br />
                    systems
                  </h3>
                </div>

                <div className="feature__tab-wrappe">
                  {/* <ul
                    className="nav nav-tabs wow wcfadeUp"
                    data-wow-delay="0.45s"
                    id="feature_tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        2020 - 2015
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        2015 - 2020
                      </button>
                    </li>
                  </ul> */}
                  <div className="tab-content" id="feature_tabContent">
                    <div
                      className="tab-pane fade show active wow wcfadeUp"
                      data-wow-delay="0.6s"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <p>
                        We have finished 3k+ projects and impressive growth over
                        the last years. Concor delivers world class
                        infrastructure solutions to stakeholders across
                        industry.
                      </p>
                      <ul className="feature__list">
                        <li>+ Architectural plan</li>
                        <li>+ Residential space</li>
                        <li>+ Innovation</li>
                        <li>+ Interior design</li>
                      </ul>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <p>
                        We have finished 3k+ projects and impressive growth over
                        the last years. Concor delivers world class stakeholders
                        across industry.
                      </p>
                      <ul className="feature__list">
                        <li>+ site planning</li>
                        <li>+ construction</li>
                        <li>+ Sketch</li>
                        <li>+ Functional Spaces</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CaseStudies />
      <AboutTeam />
      <Testimonials />
      <CompletedProject />
      <HomeBlogs />
    </>
  );
};
export default Home;
