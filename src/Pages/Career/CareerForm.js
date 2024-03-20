import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
const CareerForm = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Career - M&M Installing";
  }, []);
  return (
    <>
      <section className="breadcrumb__area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content">
                <h1 className="breadcrumb__title">Career</h1>
                <p>Fill out this form</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact__area">
        <div className="container line">
          <span className="line-3"></span>
          <span className="line-4"></span>
          <span className="line-5"> </span>
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
              <div className="contact__content">
                <h2 className="contact__title">Get in touch</h2>
                <p>
                  Get in touch to discuss your employee wellbeing needs today.
                  Please give us a call, drop us an email.
                </p>
                <div
                  className="contact__form wow wcfadeUp"
                  data-wow-delay="0.75s"
                >
                  <form action="#" className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                      <label htmlFor="name">Name</label>
                      <input type="text" id="name" placeholder="Your name" />
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" placeholder="Your email" />
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                      <label htmlFor="phone">Phone (Optional)</label>
                      <input type="tel" id="phone" placeholder="Your phone" />
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        placeholder="Your subject"
                      />
                    </div>
                    <div className="col-xxl-12">
                      <label htmlFor="message">Message</label>
                      <textarea
                        name="Message"
                        id="message"
                        placeholder="Type your message..."
                      ></textarea>
                    </div>
                    <div className="col-xxl-12">
                      <button
                        className="submit wc-btn-primary btn-hover"
                        type="submit"
                      >
                        <span></span> Apply
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerForm;
