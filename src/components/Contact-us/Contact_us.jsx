import React, { useState } from "react";
import "./Contact_us.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

export default function Contact_us() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid =
      formData.first_name &&
      formData.last_name &&
      formData.email &&
      formData.phone &&
      formData.message;

    if (!isFormValid) {
      toast.error("Please enter all required data", {
        toastStyle: {
          background: "white",
          color: "red",
        },
      });
    } else {
      try {
        const serviceID = "service_ohzqc3m";
        const templateID = "template_0cqxwpe";
        const publicKey = "4pnXQRavZJ39UBqAP";

        var params = {
          first_name: formData.first_name,
          last_name: formData.last_name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        };

        emailjs
          .send(serviceID, templateID, params, publicKey)
          .then(() => {
            alert("Successfull! We will contact you soon");
            setFormData({
              first_name: "",
              last_name: "",
              email: "",
              phone: "",
              message: "",
            });
          })
          .catch(() => {
            alert("Failed! Please try again later");
          });
      } catch {
        toast.error("An error occurred while submitting the form", {
          toastStyle: {
            background: "white",
            color: "red",
          },
        });
      }
    }
  };
  return (
    <section className="Contact_us" id="contact">
      <div className="contact-left-div">
        <img
          src="./Assets/Images/contacts/contact.jpeg"
          alt="Get in Touch"
          className="Get_In_Touch"
        />
      </div>
      <div className="contact-right-div">
        <p className="contact-right-getintouch-text">GET IN TOUCH</p>
        <p className="contact-right-description">
          Our friendly team would love to hear from you!
        </p>
        <form>
          <div className="contact-right-name-div">
            <input
              className="contact-right-firstname"
              type="text"
              placeholder="First name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
            <input
              className="contact-right-lastname"
              type="text"
              placeholder="Last name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>
          <input
            className="contact-right-email"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className="contact-right-phone"
            type="number"
            placeholder="Phone number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            className="contact-right-message"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <button
            className="contact-right-submit"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={true}
            newestOnTop={true}
            toastStyle={{
              background: "white",
              color: "black",
            }}
            progressBarStyle={{
              background: "#FF0000",
            }}
            limit={3}
          />
        </form>
      </div>
    </section>
  );
}
