import React from "react";
import "./Gallery.css";

const images = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
  "/images/gallery-7.jpg",
  "/images/gallery-8.jpg",
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="gallery py-5">
      <div className="container">
        <h2 className="section-title text-center mb-4">Our Gallery</h2>
        <div className="row g-3">
          {images.map((img, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3">
              <div className="gallery-item">
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="img-fluid rounded"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
 