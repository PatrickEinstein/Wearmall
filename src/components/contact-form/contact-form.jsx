import React, { useState, useEffect } from "react";
import "./contact-form.css";
//import { handleComment } from "../collectionitems/firebase/firebase.utils";
import {
  getDoc,
  collection,
  doc,
  setDoc,
  Firestore,
  addDoc,
  getFirestore,
} from "firebase/firestore";
import db from "../collectionitems/firebase/firebase.utils";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleComment = async (e) => {
    e.preventDefault();

    const userReference2 = doc(db, `users/Comment`);
    const [name, email, message] = useState;

    const newComment = {
      name,
      email,
      message,
    };

    try {
      await addDoc(newComment, userReference2);
      console.log("comment successfully added");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      <form className="contactform app">
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

        <button type="Submit" onSubmit={handleComment}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
