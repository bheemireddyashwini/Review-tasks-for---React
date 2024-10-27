// Managing form data
//Task-2

import { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState(""); // Added successMessage state

  const handleChange = (e) => {
    const { name, value } = e.target; // Changed 'Value' to 'value'
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Updated to 'value' instead of 'Value'
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, message } = formData;

    if (username && email && message) {
      setSuccessMessage("Form submitted successfully");

      setFormData({
        username: "",
        email: "",
        message: "",
      });
    } else {
      setSuccessMessage("Please fill out all fields.");
    }
  };

  return (
    <div className="contact">
      <h2>Contact Form</h2>
      {successMessage && (
        <p
          className={
            successMessage === "Please fill out all fields."
              ? "error"
              : "success"
          }
        >
          {successMessage}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
