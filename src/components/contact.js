import React from "react";

function Contact() {
  return (
    <section className="contact_section">
      <div className="container px-0">
        <div className="heading_container">
          <h2 className="">Contact Us</h2>
        </div>
      </div>
      <div className="container container-bg">
        <div className="row">
          <div className="col-lg-7 col-md-6 px-0">
            <div className="map_container">
              <div className="map-responsive">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51147.14973572836!2d10.1017274486328!3d36.753846800000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd37625d071bad%3A0x2ebc9fabf8987bac!2sRafika%20Creation!5e0!3m2!1sfr!2stn!4v1705165447179!5m2!1sfr!2stn" 
                  width="600"
                  height="300"
                  frameBorder="0"
                  style={{ border: 0, width: "100%", height: "100%" }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-5 px-0">
            <form action="#">
              <div>
                <input type="text" placeholder="Name" />
              </div>
              <div>
                <input type="email" placeholder="Email" />
              </div>
              <div>
                <input type="text" placeholder="Phone" />
              </div>
              <div>
                <input type="text" className="message-box" placeholder="Message" />
              </div>
              <div className="d-flex">
                <button>SEND</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
