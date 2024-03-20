import React from "react";
import { Link } from "react-router-dom";
const AboutTeam = () => {
  return (
    <section className="team__area-4">
      <div className="container line">
        <span className="line-3"></span>
        <span className="line-4"></span>
        <span className="line-5"> </span>
        <div className="row">
          <div className="col-xxl-12">
            <div className="team__title-wrapper">
              <h2
                className="section-sub-title wow wcfadeUp"
                data-wow-delay="0.3s"
              >
                about team
              </h2>
              <h3 className="section-title wow wcfadeUp" data-wow-delay="0.45s">
                Directors
              </h3>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
            <div className="team__member wow wcfadeUp" data-wow-delay="0.15s">
              <div className="team__img">
                <Link to="/teamsdetails">
                  <img
                    src={
                      "https://ik.imagekit.io/g33mwyoy1/Directors/Picture3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676617279480"
                    }
                    alt="Team Member"
                    className="br-left"
                  />
                </Link>
                <ul className="team__social">
                  <li>
                    <Link to="#">
                      <span>
                        <i className="fa-brands fa-facebook-f"></i>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span>
                        <i className="fa-brands fa-twitter"></i>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span>
                        <i className="fa-brands fa-instagram"></i>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span>
                        <i className="fa-brands fa-linkedin"></i>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="team__info">
                <Link to="/teamsdetails">RARES-STEFAN MARCU</Link>
                {/* <p>Project Engineer</p> */}
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
            <div className="team__member wow wcfadeUp" data-wow-delay="0.3s">
              <div className="team__img">
                <Link to="/teamsdetails">
                  <img
                    src={
                      "https://ik.imagekit.io/g33mwyoy1/Directors/Picture1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676617279478"
                    }
                    alt="Team Member"
                  />
                </Link>
                <ul className="team__social">
                  <li>
                    <Link to="#">
                      <span>
                        <i className="fa-brands fa-facebook-f"></i>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span>
                        <i className="fa-brands fa-twitter"></i>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span>
                        <i className="fa-brands fa-instagram"></i>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span>
                        <i className="fa-brands fa-linkedin"></i>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="team__info">
                <Link to="/teamsdetails">NICOLAE MAGA</Link>
                {/* <p>Architect</p> */}
              </div>
            </div>
          </div>
          {/* <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
            <div className="team__member wow wcfadeUp" data-wow-delay="0.45s">
              <div className="team__img">
                <Link to="/teamsdetails">
                  <img
                    src={require("../Assets/imgs/team/1/member-3.jpg")}
                    alt="Team Member"
                  />
                </Link>
                <ul className="team__social">
                  <li>
                    <Link to="#">
                      <span>
                        <i className="fa-brands fa-facebook-f"></i>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span>
                        <i className="fa-brands fa-twitter"></i>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span>
                        <i className="fa-brands fa-instagram"></i>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span>
                        <i className="fa-brands fa-linkedin"></i>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="team__info">
                <Link to="/teamsdetails">Mark Harry</Link>
                <p>Interior Designer</p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
            <div className="team__member wow wcfadeUp" data-wow-delay="0.6s">
              <div className="team__img">
                <Link to="/teamsdetails">
                  <img
                    src={require("../Assets/imgs/team/1/member-4.jpg")}
                    alt="Team Member"
                    className="br-right"
                  />
                </Link>
                <ul className="team__social">
                  <li>
                    <Link to="#">
                      <span>
                        <i className="fa-brands fa-facebook-f"></i>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span>
                        <i className="fa-brands fa-twitter"></i>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span>
                        <i className="fa-brands fa-instagram"></i>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span>
                        <i className="fa-brands fa-linkedin"></i>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="team__info">
                <Link to="/teamsdetails">Daniyel Bryan</Link>
                <p>Interior Designer</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
