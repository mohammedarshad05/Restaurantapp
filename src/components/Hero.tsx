import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>
          Welcome to <span>EMPIRE</span>
        </h1>
        <p>Multicuisine family restaurant </p>
        <a href="#menu" className="btn">
          Explore Menu
        </a>
      </div>
    </section>
  );
};

export default Hero;
