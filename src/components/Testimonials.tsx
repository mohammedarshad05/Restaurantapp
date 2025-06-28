import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "John Doe",
    title: "Food Blogger",
    image: "/images/testimonials-1.jpg",
    quote:
      "Absolutely loved the ambiance and the food! A must-visit spot in town.",
  },
  {
    name: "Jane Smith",
    title: "Chef & Critic",
    image: "/images/testimonials-2.jpg",
    quote: "Authentic flavors, fresh ingredients, and fantastic service!",
  },
  {
    name: "David Wilson",
    title: "Travel Vlogger",
    image: "/images/testimonials-3.jpg",
    quote:
      "One of the finest dining experiences I've had in a while. Highly recommended.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="testimonials py-5">
      <div className="container text-center">
        <h2 className="section-title mb-4">What Our Customers Say</h2>
        <div className="row justify-content-center">
          {testimonials.map((t, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="testimonial-card p-4 shadow rounded">
                <img
                  src={t.image}
                  alt={t.name}
                  className="testimonial-img mb-3"
                />
                <p className="quote">"{t.quote}"</p>
                <h5 className="mb-0">{t.name}</h5>
                <small className="text-muted">{t.title}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
