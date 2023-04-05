import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const BlogDetails = () => {
  const location = useLocation();
  const [blogDescriptionData, setBlogDescriptionData] = useState(
    location.state.item
  );
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Blogs - M&M Installing";
  }, []);
  return (
    <>
      <section className="breadcrumb__area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content">
                <h1 className="breadcrumb__title">Blog Details</h1>
                <p>Get update news from insight M&M Installing</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog__detail">
        <div className="container line">
          <span className="line-3"></span>
          <span className="line-4"></span>
          <span className="line-5"> </span>

          <div className="row g-0">
            <div className="col-xxl-12">
              <h2 className="blog__detail-title wcfadeUp3">
                {blogDescriptionData.title && blogDescriptionData.title}
              </h2>
            </div>

            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
              <div
                className="blog__detail-content wow wcfadeUp"
                data-wow-delay="0.45s"
              >
                <p
                  dangerouslySetInnerHTML={{
                    __html: blogDescriptionData.blogDescription,
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

export default BlogDetails;
