import React from "react";
import "./contactus.css";

function Contact() {
  return (
    //Form is created for contact.Details include name ,email and the messages that user drops.//
    <div className="container">
      <div className="contact_container">
        <h1>Contact Us</h1>
        <p>
          We'd Love to hear from you.Please fill out the form below or reach out
          to us using the contact details provided.
        </p>

        <form className="contact_form">
          <div className="form_group">
            <label htmlFor="Name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form_group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form_group">
            <label htmlFor="Message">Message:</label>
            <textarea id="message" name="message" row="5" required />
          </div>

          <button type="submit" className="submit_btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
