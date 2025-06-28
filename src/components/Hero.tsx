import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>
          Welcome to <span>Restaurantly</span>
        </h1>
        <p>Delicious food, delivered with care.</p>
        <a href="#menu" className="btn">
          Explore Menu
        </a>
      </div>
    </section>
  );
};

export default Hero;
