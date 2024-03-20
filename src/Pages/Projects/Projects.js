import React, { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { useNavigate } from "react-router-dom";
import Swiper from "swiper";
import Loader from "../../Common/Loader";
import { scrollTop } from "../../Components/Helper";
import { db } from "../../firebase";
import CompletedProject from "../../Common/CompletedProject";
import { Link } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const [projectData, setProjectData] = useState([]);

  const getData = () => {
    setLoader(true);
    let query = ref(db, "projects");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        Object.values(data).map((item) => {
          setProjectData((projectData) => [...projectData, item]);
        });
      }
      setLoader(false);
      scrollTop();
    });
  };

  useEffect(() => {
    document.title = "Projects - M&M Installing";
    getData();
    new Swiper(".case-study__slider-2", {
      slidesPerView: 3,
      scrollbar: true,
      spaceBetween: 10,
      loop: true,
      speed: 1000,
    });
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <>
      <section class="breadcrumb__area">
        <div class="container">
          <div class="row">
            <div class="col-xxl-12">
              <div class="breadcrumb__content">
                <h1 class="breadcrumb__title">Projects</h1>
                <p>Work togher with our happy clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="case-study__area-2 mb-5">
        <div className="container line">
          <span className="line-3"></span>
          <span className="line-4"></span>
          <span className="line-5"> </span>
          <div className="row">
            <div className="col-xxl-12">
              <p className="section-sub-title-2 text-white wow wcfadeUp">
                At MM Installing, we're proud of the work we do, and we're happy
                to share it with you. Our portfolio showcases some of our most
                recent and notable projects, and it demonstrates the range of
                our capabilities, expertise, and attention to detail. We are
                always willing to work with clients on custom projects and ideas
                that they may have. We believe that every project is an
                opportunity to create something beautiful, functional and
                long-lasting. If you have any questions about our past projects
                or would like to discuss your project with us, please don't
                hesitate to contact us. We would be more than happy to help!"
              </p>
              <br />{" "}
              <p>
                We have worked on many different types of projects. Below are a
                few examples of our recent projects:
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-8 col-md-8">
              <div className="case-study__title-wrapper-2">
                <h2
                  className="section-sub-title-2 wow wcfadeUp"
                  data-wow-delay="0.15s"
                >
                  projects
                </h2>
                <h3
                  className="section-title wow wcfadeUp"
                  data-wow-delay="0.3s"
                >
                  Explore <br />
                  Projects
                </h3>
              </div>
            </div>
          </div>
        </div>
        <span className="line-3"></span>
        <div className="swiper case-study__slider-2 case-study__slider-new my-2">
          <div className="swiper-wrapper">
            {projectData &&
              projectData.length > 0 &&
              projectData.map((item, index) => (
                <div
                  key={index}
                  className="swiper-slide case-study__slide-2 wow wcfadeUp"
                  data-wow-delay="0.25s"
                >
                  <div
                    onClick={() =>
                      navigate("/projectdetails", { state: { item: item } })
                    }
                  >
                    <img
                      src={
                        item.imageUrl
                          ? item.imageUrl
                          : require("../../Assets/imgs/case-study/2/1.jpg")
                      }
                      alt="case-study"
                    />
                    <div className="case-study__info-2">
                      <h4>{item.client}</h4>
                      <p>
                        <span>{item.date}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <CompletedProject />
    </>
  );
};

export default Projects;
