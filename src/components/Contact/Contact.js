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
      <form className="contact-form" id="form" onSubmit={sendEmail}>
        <div class="field">
          <label className="contact-label" for="to_name"></label>
          <input className="contact-input name" placeholder="Name" type="text" name="to_name" id="to_name" />
        </div>
        <div class="field">
          <label className="contact-label" for="from_name"></label>
          <input className="contact-input phone" placeholder="Phone" type="text" name="from_name" id="from_name" />
        </div>
        <div class="field">
          <label className="contact-label" for="reply_to"></label>
          <input className="contact-input email" placeholder="Email" type="text" name="reply_to" id="reply_to" />
        </div>
        <div class="field">
          <label className="contact-label" for="message"></label>
          <input className="contact-input message" placeholder="Message" type="text" name="message" id="message" />
        </div>

        <input type="submit" id="button" value="Send Email" />
      </form>
    </div>
  );
};

export default Contact;
