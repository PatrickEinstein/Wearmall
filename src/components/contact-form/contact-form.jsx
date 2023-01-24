import React, { useState, useEffect } from "react";
import "./contact-form.css";
import { handleSubmit } from "../collectionitems/firebase/firebase.utils";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="container">
      <div className="carosel">
        <h3>Animation here </h3>
      </div>
      <form className="contactform app" onSubmit={handleSubmit}>
        <h1>Contact Us 🤳</h1>

        <label>Name</label>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Message</label>
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
