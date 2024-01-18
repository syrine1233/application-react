import React from 'react';

function Client() {
  return (
    <section className="client_section layout_padding" id='clients'>
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Testimonial</h2>
        </div>
      </div>
      <div className="container px-0">
        <div id="customCarousel2" className="carousel carousel-fade" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="box">
                <div className="client_info">
                  <div className="client_name">
                    <h5> Marie L. - Online Store Manager</h5>
                  </div>
                </div>
                <p>
                Syry Stock has revolutionized the way I manage my inventory online. Before, it was a constant challenge to keep track of inventory levels and maintain accuracy. Thanks to Syry Stock, everything has become so much easier.                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="box">
                <div className="client_info">
                  <div className="client_name">
                    <h5>Rochak</h5>
                  </div>
                </div>
                <p>
                  Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="box">
                <div className="client_info">
                  <div className="client_name">
                    <h5>Brad Johns</h5>
                  </div>
                 
                </div>
                <p>
                  Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy, editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
                </p>
              </div>
            </div>
          </div>
          <div className="carousel_btn-box">
            <a className="carousel-control-prev" href="#customCarousel2" role="button" data-slide="prev">
             
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#customCarousel2" role="button" data-slide="next">
             
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Client;
