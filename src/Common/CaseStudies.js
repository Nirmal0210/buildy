import { onValue, ref, set } from "firebase/database";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swiper from "swiper";
import { db } from "../firebase";
const CaseStudies = () => {
  const navigate = useNavigate();
  const [projectData, setProjectData] = useState([]);

  const getData = () => {
    let query = ref(db, "projects");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        Object.values(data).map((item) => {
          setProjectData((projectData) => [...projectData, item]);
        });
      } else {
        setProjectData([]);
      }
    });
  };

  useEffect(() => {
    new Swiper(".case-study__slider-2", {
      slidesPerView: 3,
      scrollbar: true,
      spaceBetween: 10,
      loop: true,
      speed: 1000,
    });
    getData();
  }, []);

  return (
    <section className="case-study__area-2">
      <div className="container line">
        <span className="line-3"></span>
        <span className="line-4"></span>
        <span className="line-5"> </span>
        <div className="row">
          <div className="col-xxl-12 col-xl-12 col-lg-8 col-md-8">
            <div className="case-study__title-wrapper-2">
              <h2
                className="section-sub-title-2 wow wcfadeUp"
                data-wow-delay="0.15s"
              >
                Projects
              </h2>
              <h3 className="section-title wow wcfadeUp" data-wow-delay="0.3s">
                Explore <br />
                Projects
              </h3>
            </div>
          </div>
        </div>
      </div>
      <span className="line-3"></span>
      <div className="swiper case-study__slider-2 my-2">
        <div className="swiper-wrapper">
          {projectData && projectData.length > 0 ? (
            projectData.map((item, index) => (
              <div
                onClick={() =>
                  navigate("/projectdetails", { state: { item: item } })
                }
                key={index}
                className="swiper-slide case-study__slide-2 wow wcfadeUp"
                data-wow-delay="0.25s"
              >
                <Link to="">
                  <img
                    src={
                      item.imageUrl
                        ? item.imageUrl
                        : require("../Assets/imgs/case-study/2/1.jpg")
                    }
                    alt="case-study"
                  />
                  <div className="case-study__info-2">
                    <h4>{item.client && item.client}</h4>
                    <p>
                      <span>{item.date && item.date}</span>
                    </p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p>No Data Found</p>
          )}
        </div>
      </div>
      <div className="text-center">
        <Link className="wc-btn-primary btn-hover" to="/projects">
          Explore All Projects
        </Link>
      </div>
    </section>
  );
};

export default CaseStudies;
