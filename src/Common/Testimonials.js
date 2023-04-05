import React, { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import Carousel from "react-bootstrap/Carousel";
import { db } from "../firebase";

const Testimonials = () => {
  const [reviewData, setReviewData] = useState([]);

  const getData = () => {
    let query = ref(db, "review");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        Object.values(data).map((item) => {
          setReviewData((reviewData) => [...reviewData, item]);
        });
      } else {
        setReviewData([]);
      }
    });
  };
  let carouselSetting = {
    indicators: false,
    loop: true,
    interval: 1000,
    fade: true,
    prevIcon: (
      <div className="testimonial__btn-2">
        <div className="swiper-btn-prev wow wcfadeUp" data-wow-delay="0.3s">
          <img
            src={require("../Assets/imgs/icon/long-arrow-l-black.png")}
            alt="Prev Icon"
          />
        </div>
      </div>
    ),

    nextIcon: (
      <div className="testimonial__btn-2">
        <div className="swiper-btn-next wow wcfadeUp" data-wow-delay="0.3s">
          <img
            src={require("../Assets/imgs/icon/long-arrow-r-black.png")}
            alt="Next Icon"
          />
        </div>
      </div>
    ),
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="testimonial__area-2">
      <div className="container line">
        <span className="line-3"></span>
        <span className="line-4"></span>
        <span className="line-5"> </span>
        <div className="row">
          <div className="col-xxl-12 text-center">
            <h2 className="section-sub-title">Feedback That Inspire Us</h2>
            <div className="testimonial__slider-2">
              <Carousel {...carouselSetting}>
                {reviewData && reviewData.length > 0 ? (
                  reviewData.map((item, index) => (
                    <Carousel.Item key={index}>
                      <div className="testimonial__slide-2">
                        <p>{item.Review && item.Review}</p>
                        <h3>
                          {item.Name && item.Name}{" "}
                          <span>{item.Designation && item.Designation}</span>{" "}
                        </h3>
                      </div>
                    </Carousel.Item>
                  ))
                ) : (
                  <p>No Data Found</p>
                )}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
