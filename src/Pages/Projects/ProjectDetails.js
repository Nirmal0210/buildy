import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ProjectDetails = () => {
  const location = useLocation();
  const [projectDetailsData, setProjectDetailsData] = useState(
    location.state.item
  );
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Projects - M&M Installing";
  }, []);
  return (
    <>
      <section className="breadcrumb__area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content">
                <h1 className="breadcrumb__title">
                  {projectDetailsData.projectName &&
                    projectDetailsData.projectName}
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
            <div className="col-xxl-12">
              <img
                src={
                  projectDetailsData.imageUrl
                    ? projectDetailsData.imageUrl
                    : require("../../Assets/imgs/portfolio/details/1.jpg")
                }
                alt="Portfolio Thumbnail"
                className="service__detail-thumb wcfadeUp3"
              />
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-3 col-md-4">
              <div className="service__sidebar">
                <div
                  className="widget__project-details wow wcfadeUp"
                  data-wow-delay="0.15s"
                >
                  <h2 className="widget__title">Project Details</h2>
                  <ul>
                    <li>
                      <span>Client</span> <strong>:</strong>{" "}
                      {projectDetailsData.client && projectDetailsData.client}
                    </li>
                    <li>
                      <span>Category</span> <strong>:</strong>{" "}
                      {projectDetailsData.category &&
                        projectDetailsData.category}
                    </li>
                    <li>
                      <span>Date</span> <strong>:</strong>{" "}
                      {projectDetailsData.date && projectDetailsData.date}
                    </li>
                  </ul>
                </div>

                <div
                  className="widget__contact wow wcfadeUp"
                  data-wow-delay="0.3s"
                >
                  <p>Contact for inquery</p>
                  <h3>Want to know the more details?</h3>
                  <Link className="btn-hover" to="/contactus">
                    <span></span> Let’s talk
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-8 col-lg-9 col-md-8">
              <div
                className="service__detail-content wow wcfadeUp"
                data-wow-delay="0.15s"
              >
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      projectDetailsData.projectDetail &&
                      projectDetailsData.projectDetail,
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

export default ProjectDetails;
