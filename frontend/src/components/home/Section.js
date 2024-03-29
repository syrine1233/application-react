function Section() {
    return (
      <section className="slider_section">
        <div className="slider_container">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="detail-box">
                        <h1>
                          Welcome To Our <br />
                          SYRY STOCK 
                        </h1>
                        <p>
                       Syry Stock is a web-based application, designed to simplify your inventory management, Whether you run a small business, an online store, or simply need to keep track of your personal belongings, Syry Stock offers the necessary features to help you stay organized and productive.                        </p>
                        <a href="#contact">
                          Contact Us
                        </a>
                      </div>
                    </div>
                    <div className="col-md-5 ">
                      <div className="img-box">
                        <img src="app1/images/slider-img.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Add other carousel items with similar changes */}
            </div>
          
          </div>
        </div>
      </section>
    );
  }
  
  export default Section;
  