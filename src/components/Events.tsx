import React from "react";
import { Carousel } from "react-bootstrap";
import "./Events.css";

const events = [
  {
    title: "Birthday Bash",
    price: "₹2999",
    description:
      "Celebrate your birthday with vibrant themes, custom cakes, and personalized decorations.",
    image: "/images/events-slider-1.jpg",
  },
  {
    title: "Private Lounge",
    price: "₹4999",
    description:
      "Perfect for anniversaries or family get-togethers in an elegant private setting.",
    image: "/images/events-slider-2.jpg",
  },
  {
    title: "Corporate Nights",
    price: "₹3999",
    description:
      "A classy ambiance to host your office dinners, with tailored menus and setups.",
    image: "/images/events-slider-3.jpg",
  },
];

const Events = () => {
  return (
    <section id="events" className="events-cinematic">
      <div className="container-fluid">
        <Carousel fade indicators={false} controls={true}>
          {events.map((event, index) => (
            <Carousel.Item key={index}>
              <div
                className="event-slide-cinematic"
                style={{ backgroundImage: `url(${event.image})` }}
              >
                <div className="overlay-dark">
                  <div className="cinematic-card animate__animated animate__fadeInUp">
                    <h3>{event.title}</h3>
                    <p className="price">{event.price}</p>
                    <p className="desc">{event.description}</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Events;
