import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import "./BookTable.css";

const BookTable: React.FC = () => {
  const [formData, setFormData] = useState({
    date: "",
    startTime: "",
    endTime: "",
    name: "",
    email: "",
    message: "",
  });

  const [alertMsg, setAlertMsg] = useState("");
  const [alertType, setAlertType] = useState<"success" | "danger" | "">("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormFilled = () =>
    formData.date &&
    formData.startTime &&
    formData.endTime &&
    formData.name &&
    formData.email;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormFilled()) {
      setAlertMsg("Please fill in all the required fields.");
      setAlertType("danger");
    } else {
      setAlertMsg("Booking request submitted successfully!");
      setAlertType("success");
    }
  };

  const handleCancel = () => {
    setFormData({
      date: "",
      startTime: "",
      endTime: "",
      name: "",
      email: "",
      message: "",
    });
    setAlertMsg("Booking request has been cancelled.");
    setAlertType("danger");
  };

  return (
    <section id="book">
      <Container>
        <h2>Book a Table</h2>
        <Form onSubmit={handleBooking}>
          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              placeholder="Booking Date"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Start Time</Form.Label>
            <Form.Control
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              placeholder="Start Time"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>End Time</Form.Label>
            <Form.Control
              type="time"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              placeholder="End Time"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Your Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any special requests or message?"
            />
          </Form.Group>

          <div className="d-flex gap-3">
            <Button variant="success" type="submit">
              Request Booking
            </Button>
            <Button
              variant="outline-danger"
              type="button"
              onClick={handleCancel}
            >
              Request Cancel
            </Button>
          </div>

          {alertMsg && (
            <Alert variant={alertType} className="mt-3">
              {alertMsg}
            </Alert>
          )}
        </Form>
      </Container>
    </section>
  );
};

export default BookTable;
