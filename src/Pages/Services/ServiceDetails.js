import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const ServiceDetails = () => {
  const location = useLocation();
  const [serviceDetailsData, setServiceDetailsData] = useState(
    location.state.item
  );
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Services - M&M Installing";
  }, []);
  return (
    <>
      <section className="breadcrumb__area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content">
                <h1 className="breadcrumb__title">
                  {serviceDetailsData.serviceName &&
                    serviceDetailsData.serviceName}
                </h1>
                <p>
                  M&M Installing delivers world class infrastructure solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service__detail">
        <div className="container line">
          <span className="line-3"></span>
          <span className="line-4"></span>
          <span className="line-5"> </span>

          <div className="row g-0">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
              <div className="service__detail-content wcfadeUp4">
                <img
                  src={
                    serviceDetailsData.imageUrl
                      ? serviceDetailsData.imageUrl
                      : require("../../Assets/imgs/service/details/1.jpg")
                  }
                  alt="Service Thumbnail"
                />

                <h2 className="service__detail-title mt-3">
                  {serviceDetailsData.serviceName &&
                    serviceDetailsData.serviceName}
                </h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      serviceDetailsData.serviceDetail &&
                      serviceDetailsData.serviceDetail,
                  }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
