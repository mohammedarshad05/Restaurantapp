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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(
          "https://67acecc93f5a4e1477dc577d.mockapi.io/menuitem"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setMenuItems(data);
        setLoading(false);
      } catch (err: any) {
        setError("Failed to fetch menu items.");
        setLoading(false);
        console.error(err);
      }
    };

    fetchMenu();
  }, []);

  if (loading) return <p className="text-center">Loading menu...</p>;
  if (error) return <p className="text-center text-danger">{error}</p>;

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
              <div className="card menu-card h-100 shadow-sm">
                <img
                  src={item.image}
                  alt={item.name}
                  className="card-img-top menu-img"
                  style={{ height: "200px", objectFit: "cover" }}
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
