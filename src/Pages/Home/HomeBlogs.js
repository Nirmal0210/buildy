import React, { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../firebase";
const HomeBlogs = () => {
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState([]);
  const getData = () => {
    setBlogData([]);
    let query = ref(db, "blog");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        Object.values(data).map((item) => {
          setBlogData((blogData) => [...blogData, item]);
        });
      }
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="blog__area-2">
      <div className="container line">
        <span className="line-3"></span>
        <span className="line-4"></span>
        <span className="line-5"> </span>

        <div className="blog__top">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="blog__title-wrapper">
                <h2
                  className="section-sub-title-2 wow wcfadeUp"
                  data-wow-delay="0.15s"
                >
                  Blog Posts
                </h2>
                <h3
                  className="section-title wow wcfadeUp"
                  data-wow-delay="0.3s"
                >
                  Blogs update
                </h3>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="blog__btn wow wcfadeUp" data-wow-delay="0.75s">
                <Link to="/blogs">
                  Browse All <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="blog__btm">
          <div className="row">
            {blogData &&
              blogData.length > 0 &&
              blogData.map((item, index) => (
                <div
                  className="col-xxl-4 col-xl-4 col-lg-4 col-md-4"
                  key={index}
                >
                  <div
                    className="blog__item-wrapper-2 wow wcfadeUp"
                    data-wow-delay="0.6s"
                  >
                    <article>
                      <div className="blog__img">
                        <Link to="">
                          <img
                            src={
                              item.imageUrl
                                ? item.imageUrl
                                : require("../../Assets/imgs/blog/2/1.jpg")
                            }
                            alt="Blog"
                          />
                        </Link>
                      </div>
                      <div className="blog__content-2">
                        <h4 className="blog__meta">
                          {/* <strong>
                            <Link to="category.html">Interior Design</Link>
                          </strong>
                          , 13 Jun 2021 */}
                        </h4>
                        <Link to="/blogdetails">
                          <h5 className="blog__title-2">
                            {item.title && item.title}
                          </h5>
                        </Link>
                        <p className="text-wrap">
                          {item.description && item.description}
                        </p>
                        <div
                          className="blog__btn-rm"
                          onClick={() =>
                            navigate("/blogdetails", { state: { item: item } })
                          }
                        >
                          Read More <i className="fa-solid fa-arrow-right"></i>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBlogs;
