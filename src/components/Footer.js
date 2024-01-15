function Footer() {
  return (
    <section className="info_section layout_padding2-top">
      <div className="social_container">
        <div className="social_box">
          <a href="">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="">
            <i className="fa fa-youtube" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div className="info_container">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <h6>
                ABOUT US
              </h6>
              <p>
              Welcome to Syry Stock, your dedicated partner in inventory management and operations optimization. At Syry Stock, our mission is simple: simplify the lives of businesses and individuals by offering an intuitive and powerful solution to effectively manage their inventory              </p>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="info_form">
                <h5>
                  Newsletter
                </h5>
                <form action="#">
                  <input type="email" placeholder="Enter your email" />
                  <button>
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h6>
                NEED HELP
              </h6>
              <p>
              At Syry Stock, we understand that inventory management can present challenges, and that's why our dedicated team is ready to offer you personalized support.              </p>
            </div>
            <div className="col-md-6 col-lg-3">
              <h6>
                CONTACT US
              </h6>
              <div className="info_link-box">
                <a href="">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span> Gb road 123 Tunis </span>
                </a>
                <a href="">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>+216 75581436</span>
                </a>
                <a href="">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span> syrystock@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer_section">
        <div className="container">
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By syrystock
           
          </p>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
         
