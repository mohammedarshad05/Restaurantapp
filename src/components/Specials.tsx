import "./Specials.css";
import { Carousel } from "react-bootstrap";

type SpecialItem = {
  title: string;
  description: string;
  image: string;
  price: string;
};

const specialsData: SpecialItem[] = [
  {
    title: "Paneer Tikka",
    description:
      "Chunks of paneer marinated in spices and grilled to perfection with capsicum and onions.",
    image: "/images/butter-paneer.jpg",
    price: "₹220",
  },
  {
    title: "Tandoori Chicken",
    description:
      "Juicy chicken pieces marinated in tandoori masala and grilled in a clay oven.",
    image: "/images/tandoori-chicken.jpg",
    price: "₹350",
  },
  {
    title: "Masala Dosa",
    description:
      "Crispy dosa stuffed with spicy mashed potatoes, served with chutney and sambar.",
    image: "/images/masala-dosa.jpg",
    price: "₹90",
  },
];

const Specials = () => {
  return (
    <section id="specials" className="specials section-bg py-5">
      <div className="container">
        <div className="section-title text-center mb-5">
          <h2>Specials</h2>
          <p>Check Our Specials</p>
        </div>

        <Carousel interval={3000} fade pause={false}>
          {specialsData.map((item, index) => (
            <Carousel.Item key={index}>
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <img
                    className="d-block w-100 specials-img"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="col-lg-6 text-left">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p className="price">
                    <strong>Price:</strong> {item.price}
                  </p>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Specials;
