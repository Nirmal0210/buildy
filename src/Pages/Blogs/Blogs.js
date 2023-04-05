import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { onValue, ref } from "firebase/database";
import Loader from "../../Common/Loader";
import { scrollTop } from "../../Components/Helper";
const Blogs = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const [blogData, setBlogData] = useState([]);
  const getData = () => {
    setLoader(true);
    setBlogData([]);
    let query = ref(db, "blog");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        Object.values(data).map((item) => {
          setBlogData((blogData) => [...blogData, item]);
        });
        setLoader(false);
      } else {
        setBlogData([]);
        setLoader(false);
      }
      scrollTop();
    });
  };
  useEffect(() => {
    document.title = "Blogs - M&M Installing";
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
                <h1 className="breadcrumb__title">Blog</h1>
                <p>Get update news from insight M&M Installing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog__area-2">
        <div className="container line">
          <div className="col-12">
            <p className="section-sub-title-2 text-white wow wcfadeUp">
              Welcome to our M&M Installing blog! We are dedicated to providing
              top-notch Services to enhance your home or business. Our team of
              experts has years of experience in the glass industry & Other
              Services and is committed to delivering high-quality installations
              and repairs to ensure your satisfaction. In our blog, we will be
              sharing valuable information, tips, and insights on various topics
              related to Our Services. Whether you're looking for inspiration
              for your next project, need advice on Some Services, or want to
              stay up-to-date with the latest trends in the industry, our blog
              is the place to be. So, sit back, grab a cup of coffee, and enjoy
              our informative and engaging content.
            </p>
          </div>
          <div className="row g-0">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
              <div className="blog__list">
                {blogData && blogData.length > 0 ? (
                  blogData.map((item, index) => (
                    <div className="blog__item wcfadeUp2" key={index}>
                      <article>
                        <Link>
                          <img
                            height={"400px"}
                            style={{ margin: "10px 0px" }}
                            src={
                              item.imageUrl
                                ? item.imageUrl
                                : require("../../Assets/imgs/blog/4/2.jpg")
                            }
                            alt="Blog Thumbnail"
                          />
                        </Link>
                        <h2>
                          <p className="blog__title-4">
                            {item.title && item.title}
                          </p>
                        </h2>
                        <p>{item.description}</p>
                        <div
                          onClick={() =>
                            navigate("/blogdetails", { state: { item: item } })
                          }
                        >
                          <Link className="blog__btn-rm">
                            Read More{" "}
                            <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </article>
                    </div>
                  ))
                ) : (
                  <p>No Data Found</p>
                )}

                {/* <div className="blog__item wow wcfadeUp" data-wow-delay="0.15s">
                  <article>
                    <Link to="/blogdetails">
                      <img
                        src={require("../../Assets/imgs/blog/4/2.jpg")}
                        alt="Blog Thumbnail"
                      />
                    </Link>
                    <p className="blog__meta-4">
                      {" "}
                      <strong>
                        <Link to="category.html">Architecture</Link>
                      </strong>
                      , 13 Jun 2021
                    </p>
                    <h2>
                      <Link to="/blogdetails" className="blog__title-4">
                        Exclusive features to impress your visitors
                      </Link>
                    </h2>
                    <p>
                      With Architecturer theme you can build your site for
                      professional architect. With worldwide annual spend on
                      digital advertising surpassing $325 billion it’s no
                      surprise that different approaches to online marketing are
                      becoming available...
                    </p>
                    <Link className="blog__btn-rm" to="/blogdetails">
                      Read More <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </article>
                </div>

                <div className="blog__item wow wcfadeUp" data-wow-delay="0.3s">
                  <article>
                    <Link to="/blogdetails">
                      <img
                        src={require("../../Assets/imgs/blog/4/1.jpg")}
                        alt="Blog Thumbnail"
                      />
                    </Link>
                    <p className="blog__meta-4">
                      {" "}
                      <strong>
                        <Link to="category.html">Architecture</Link>
                      </strong>
                      , 13 Jun 2021
                    </p>
                    <h2>
                      <Link to="/blogdetails" className="blog__title-4">
                        Systematic project helps to match more impact
                      </Link>
                    </h2>
                    <p>
                      With Architecturer theme you can build your site for
                      professional architect. With worldwide annual spend on
                      digital advertising surpassing $325 billion it’s no
                      surprise that different approaches to online marketing are
                      becoming available...
                    </p>
                    <Link className="blog__btn-rm" to="/blogdetails">
                      Read More <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </article>
                </div>

                <div
                  className="blog__item wow wcfadeUp"
                  data-wow-delay="0.155s"
                >
                  <article>
                    <Link to="/blogdetails">
                      <img
                        src={require("../../Assets/imgs/blog/4/1.jpg")}
                        alt="Blog Thumbnail"
                      />
                    </Link>
                    <p className="blog__meta-4">
                      {" "}
                      <strong>
                        <Link to="category.html">Architecture</Link>
                      </strong>
                      , 13 Jun 2021
                    </p>
                    <h2>
                      <Link to="/blogdetails" className="blog__title-4">
                        Everything you should know about build apartment
                      </Link>
                    </h2>
                    <p>
                      With Architecturer theme you can build your site for
                      professional architect. With worldwide annual spend on
                      digital advertising surpassing $325 billion it’s no
                      surprise that different approaches to online marketing are
                      becoming available...
                    </p>
                    <Link className="blog__btn-rm" to="/blogdetails">
                      Read More <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </article>
                </div>

                <div className="blog__item wow wcfadeUp" data-wow-delay="0.15s">
                  <article>
                    <Link to="/blogdetails">
                      <img
                        src={require("../../Assets/imgs/blog/4/1.jpg")}
                        alt="Blog Thumbnail"
                      />
                    </Link>
                    <p className="blog__meta-4">
                      {" "}
                      <strong>
                        <Link to="category.html">Architecture</Link>
                      </strong>
                      , 13 Jun 2021
                    </p>
                    <h2>
                      <Link to="/blogdetails" className="blog__title-4">
                        Get helpful information on bulding construction
                      </Link>
                    </h2>
                    <p>
                      With Architecturer theme you can build your site for
                      professional architect. With worldwide annual spend on
                      digital advertising surpassing $325 billion it’s no
                      surprise that different approaches to online marketing are
                      becoming available...
                    </p>
                    <Link className="blog__btn-rm" to="/blogdetails">
                      Read More <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </article>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
