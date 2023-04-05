import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { onValue, ref } from "firebase/database";
import Loader from "../../Common/Loader";
import { scrollTop } from "../../Components/Helper";

const Services = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [serviceData, setServiceData] = useState([]);
  const getData = () => {
    setServiceData([]);
    setLoader(true);
    let query = ref(db, "service");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        Object.values(data).map((item) => {
          setServiceData((serviceData) => [...serviceData, item]);
        });
      }
      setLoader(false);
    });
  };
  useEffect(() => {
    document.title = "Services - M&M Installing";
    getData();
    scrollTop();
  }, []);
  return loader ? (
    <Loader />
  ) : (
    <>
      <section className="breadcrumb__area breadcrumb__area_service">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content">
                <h1 className="breadcrumb__title">Service</h1>
                <p>
                  Our top priority is ensuring that our customers are completely
                  satisfied with the end result of their project.
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
            {serviceData &&
              serviceData.length > 0 &&
              serviceData.map((item, index) => (
                <div
                  className="col-xxl-4 col-xl-4 col-lg-4 col-md-6"
                  key={index}
                >
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
                      <h4 className="service__title-3">{item.serviceName}</h4>
                      <p
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      ></p>
                      <span
                        className="service__rm-3"
                        onClick={() =>
                          navigate("/servicedetails", { state: { item: item } })
                        }
                      >
                        read more <i className="fa-solid fa-arrow-right"></i>
                      </span>{" "}
                    </div>
                  </div>
                </div>
              ))}
            {/* <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="service__item wcfadeUp2">
                <div className="service__item-inner">
                  <img
                    src={require("../../Assets/imgs/service/3/icon-1.png")}
                    alt="Sevice Icon"
                  />
                  <h4 className="service__title-3">Architecture</h4>
                  <p>
                    Building construction projects for varied clients within
                    time and budget accepted quality.
                  </p>
                  <span className="service__rm-3">
                    read more <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="service__item wcfadeUp3">
                <div className="service__item-inner">
                  <img
                    src={require("../../Assets/imgs/service/3/icon-2.png")}
                    alt="Sevice Icon"
                  />
                  <h4 className="service__title-3">Interior Design </h4>
                  <p>
                    Building construction projects for varied clients within
                    time and budget accepted quality.
                  </p>
                  <span className="service__rm-3">
                    read more <i className="fa-solid fa-arrow-right"></i>
                  </span>{" "}
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="service__item wcfadeUp4">
                <div className="service__item-inner">
                  <img
                    src={require("../../Assets/imgs/service/3/icon-3.png")}
                    alt="Sevice Icon"
                  />
                  <h4 className="service__title-3">Renovation</h4>
                  <p>
                    Building construction projects for varied clients within
                    time and budget accepted quality.
                  </p>
                  <span className="service__rm-3">
                    read more <i className="fa-solid fa-arrow-right"></i>
                  </span>{" "}
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="service__item wow wcfadeUp" data-wow-delay="0.3s">
                <div className="service__item-inner">
                  <img
                    src={require("../../Assets/imgs/service/3/icon-1.png")}
                    alt="Sevice Icon"
                  />
                  <h4 className="service__title-3">Architecture</h4>
                  <p>
                    Building construction projects for varied clients within
                    time and budget accepted quality.
                  </p>
                  <span className="service__rm-3">
                    read more <i className="fa-solid fa-arrow-right"></i>
                  </span>{" "}
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div
                className="service__item wow wcfadeUp"
                data-wow-delay="0.45s"
              >
                <div className="service__item-inner">
                  <img
                    src={require("../../Assets/imgs/service/3/icon-2.png")}
                    alt="Sevice Icon"
                  />
                  <h4 className="service__title-3">Interior Design </h4>
                  <p>
                    Building construction projects for varied clients within
                    time and budget accepted quality.
                  </p>
                  <span className="service__rm-3">
                    read more <i className="fa-solid fa-arrow-right"></i>
                  </span>{" "}
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="service__item wow wcfadeUp" data-wow-delay="0.6s">
                <div className="service__item-inner">
                  <img
                    src={require("../../Assets/imgs/service/3/icon-3.png")}
                    alt="Sevice Icon"
                  />
                  <h4 className="service__title-3">Renovation</h4>
                  <p>
                    Building construction projects for varied clients within
                    time and budget accepted quality.
                  </p>
                  <span className="service__rm-3">
                    read more <i className="fa-solid fa-arrow-right"></i>
                  </span>{" "}
                </div>
              </div>
            </div> */}
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

export default Services;
