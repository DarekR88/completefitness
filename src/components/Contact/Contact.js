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
      <div className="form-blurb-wrapper">
        <p className="contact-blurb">
          Get in touch and schedule a free evaluation today
        </p>
        <p className="contact-blurb">Operators are standing by 24/7</p>
        <p className="contact-blurb">Call Now!</p>
        <p className="contact-blurb">(420) 420-6969</p>
        <p className="contact-blurb">OR</p>
        <p className="contact-blurb">
          Email: buttshigger@Ignitionfuckness.mail
        </p>
        <p className="contact-blurb long">
          Taking the first step towards a better you can be very difficult and
          we are here to facilitate your transformation journey in a way that
          maximizes your results. Evaluations are free with no obligation.
        </p>

        <form className="contact-form" id="form" onSubmit={sendEmail}>
          <div class="field">
            <label className="contact-label" for="to_name"></label>
            <input
              className="contact-input name"
              placeholder="Name"
              type="text"
              name="to_name"
              id="to_name"
            />
          </div>
          <div class="field">
            <label className="contact-label" for="from_name"></label>
            <input
              className="contact-input phone"
              placeholder="Phone"
              type="text"
              name="from_name"
              id="from_name"
            />
          </div>
          <div class="field">
            <label className="contact-label" for="reply_to"></label>
            <input
              className="contact-input email"
              placeholder="Email"
              type="text"
              name="reply_to"
              id="reply_to"
            />
          </div>
          <div class="field">
            <label className="contact-label" for="message"></label>
            <input
              className="contact-input message"
              placeholder="Message"
              type="text"
              name="message"
              id="message"
            />
          </div>

          <input
            className="contact-send"
            type="submit"
            id="button"
            value="Send Message"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
