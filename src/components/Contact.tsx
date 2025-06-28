import React, { useState } from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      formData.name &&
      formData.email &&
      formData.subject &&
      formData.message
    ) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    } else {
      alert("Please fill out all fields before submitting.");
    }
  };

  return (
    <section id="contact" className="contact py-5">
      <div className="container">
        <div className="section-title text-center mb-5">
          <h2>Contact Us</h2>
          <p>Get in touch with us for reservations or any queries</p>
        </div>

        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="info">
              <div className="mb-4">
                <i className="bi bi-geo-alt fs-3 text-primary me-2"></i>
                <span>123 Street, Bhatkal, Karnataka - 581320</span>
              </div>
              <div className="mb-4">
                <i className="bi bi-envelope fs-3 text-primary me-2"></i>
                <span>arshff005@gmail.com</span>
              </div>
              <div>
                <i className="bi bi-phone fs-3 text-primary me-2"></i>
                <span>+91 87925 36157</span>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <form
              className="contact-form p-4 rounded shadow"
              onSubmit={handleSubmit}
            >
              {submitted && (
                <div className="alert alert-success text-center mb-3">
                  ✅ Your message has been sent successfully!
                </div>
              )}
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows={5}
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="text-center">
                <button className="btn btn-primary px-4" type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
