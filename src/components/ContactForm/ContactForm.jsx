import React from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <form name="contact" method="post">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label>
          Your Name:{" "}
          <input
            className={`form-control ${styles.name}`}
            type="text"
            name="name"
          />
        </label>
      </p>
      <p>
        <label>
          Your Email:{" "}
          <input
            className={`form-control ${styles.email}`}
            type="email"
            name="email"
          />
        </label>
      </p>
      <p>
        <label>
          Message:{" "}
          <textarea
            className={`form-control ${styles.textArea}`}
            name="message"
          ></textarea>
        </label>
      </p>
      <p>
        <button type="submit" class="btn btn-outline-success">
          Send
        </button>{" "}
      </p>
    </form>
  );
};

export default ContactForm;
