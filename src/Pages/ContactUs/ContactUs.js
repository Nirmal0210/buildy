import React, { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Contact Us - M&M Installing";
  }, []);
  return (
    <>
      <section className="breadcrumb__area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content">
                <h1 className="breadcrumb__title">Contact</h1>
                <p>Contact us if you have any questions to ask us</p>
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
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5">
              <div className="contact__map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.3086464328208!2d90.35532061543219!3d23.8076212925039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1becff28005%3A0x6d0154b01000d374!2sWealCoder%20Web%20Development%20Agency!5e0!3m2!1sen!2sbd!4v1661434719052!5m2!1sen!2sbd"
                  allowFullScreen=""
                  loading="lazy"
                  title="different"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-7">
              <div className="contact__content">
                <h2 className="contact__title">Get in touch</h2>
                <p className="section-sub-title-2 text-white wow wcfadeUp">
                  We would love to hear from you! Our team at M & M Installing
                  Company is dedicated to providing exceptional customer service
                  and is always here to assist you. Please don't hesitate to get
                  in touch with us for any queries, concerns, or feedback you
                  may have. You can reach us via phone, email, or by filling out
                  the contact form below. We look forward to hearing from you
                  and helping you with all your glass needs.
                </p>
                <div
                  className="contact__form wow wcfadeUp"
                  data-wow-delay="0.75s"
                >
                  <form action="#" className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                      <label htmlForm="name">Name</label>
                      <input type="text" id="name" placeholder="Your name" />
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                      <label htmlForm="email">Email</label>
                      <input type="email" id="email" placeholder="Your email" />
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                      <label htmlForm="phone">Phone (Optional)</label>
                      <input type="tel" id="phone" placeholder="Your phone" />
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                      <label htmlForm="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        placeholder="Your subject"
                      />
                    </div>
                    <div className="col-xxl-12">
                      <label htmlForm="message">Message</label>
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
                        <span></span> Send Message
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

export default ContactUs;
