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
        "kvoo8qIQ_D8PVYgsu"
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
      <div className="contact-title">Contact</div>
      <form id="form" onSubmit={sendEmail}>
        <div class="field">
          <label for="to_name">Name</label>
          <input type="text" name="to_name" id="to_name" />
        </div>
        <div class="field">
          <label for="from_name">Phone</label>
          <input type="text" name="from_name" id="from_name" />
        </div>
        <div class="field">
          <label for="reply_to">Email</label>
          <input type="text" name="reply_to" id="reply_to" />
        </div>
        <div class="field">
          <label for="message">message</label>
          <input type="text" name="message" id="message" />
        </div>

        <input type="submit" id="button" value="Send Email" />
      </form>
    </div>
  );
};

export default Contact;
