import { useEffect, useState } from "react";
import "./Menu.css";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
};

const Menu = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    fetch("https://67acecc93f5a4e1477dc577d.mockapi.io/menuitem")
      .then((res) => res.json())
      .then((data) => setMenuItems(data))
      .catch((err) => console.error("Failed to fetch menu:", err));
  }, []);

  return (
    <section id="menu" className="menu section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Menu</h2>
          <p>Check Our Tasty Menu</p>
        </div>

        <div className="row">
          {menuItems.map((item, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="card menu-card h-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="card-img-top menu-img"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <h6 className="card-price">₹{item.price}</h6>
                  <span className="badge bg-secondary">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
