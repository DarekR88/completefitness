import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

const Contact = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qfgklbh",
        "template_nkx1gkp",
        form.current,
        "DfRYHaxL9gIFFEmtj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-wrapper">
      <form className="emailForm" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input className="Contact-input" type="text" name="user_name" />
        <label>Email</label>
        <input className="Contact-input" type="email" name="user_email" />
        <label>Message</label>
        <textarea className="message-area Contact-input" name="message" />
        <input className="sendButton" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
