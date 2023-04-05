import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { onValue, ref } from "firebase/database";
import { scrollTop } from "../../Components/Helper";
import Loader from "../../Common/Loader";
const Career = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const [careerData, setCareerData] = useState([]);
  const getData = () => {
    setLoader(true);
    let query = ref(db, "career");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        Object.values(data).map((item) => {
          setCareerData((careerData) => [...careerData, item]);
        });
        setLoader(false);
      } else {
        setCareerData([]);
        setLoader(false);
      }
      scrollTop();
    });
  };
  useEffect(() => {
    document.title = "Career - M&M Installing";
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
                <h1 className="breadcrumb__title">Career</h1>
                <p>
                  M&M Installing delivers world class infrastructure solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service__area service__v2">
        <div className="container line">
          <span className="line-3"></span>
          <span className="line-4"></span>
          <span className="line-5"> </span>

          <div className="row">
            {careerData && careerData.length > 0 ? (
              careerData.map((item, index) => (
                <div
                  className="col-xxl-4 col-xl-4 col-lg-4 col-md-6"
                  key={index}
                >
                  <Link to="/servicedetails">
                    <div className="service__item wcfadeUp2">
                      <div className="service__item-inner">
                        <img
                          src={
                            item.imageUrl
                              ? item.imageUrl
                              : require("../../Assets/imgs/service/3/icon-1.png")
                          }
                          alt="Sevice Icon"
                        />
                        <h4 className="service__title-3">{item.name && item.name}</h4>
                        <p>{item.description}</p>
                        <div
                          onClick={() =>
                            navigate("/careerform", { state: { id: item.id } })
                          }
                        >
                          <Link className="wc-btn-primary btn-hover">
                            <span></span> Apply Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <p>No data found</p>
            )}
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div
                className="service__btm-4 wow wcfadeUp"
                data-wow-delay="0.6s"
              >
                <p>
                  Need more services based on your demand?{" "}
                  <Link to="/contactus">
                    Contact us <i className="fa-solid fa-arrow-left"></i>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Career;
