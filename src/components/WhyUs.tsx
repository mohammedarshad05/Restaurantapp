import "./WhyUs.css";

const WhyUs = () => {
  return (
    <section id="why-us" className="why-us section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Why Us</h2>
          <p>Why Choose Our Restaurant</p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="box">
              <span>01</span>
              <h4>Best Chefs</h4>
              <p>
                We bring you authentic, flavorful recipes made by expert chefs.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 mt-4 mt-lg-0"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="box">
              <span>02</span>
              <h4>Quality Ingredients</h4>
              <p>
                Fresh, hand-picked ingredients to ensure taste and health
                together.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 mt-4 mt-lg-0"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="box">
              <span>03</span>
              <h4>Great Ambience</h4>
              <p>Enjoy your meals in a comfortable and cozy environment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
