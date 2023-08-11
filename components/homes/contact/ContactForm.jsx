"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [activeInputBoxes, setActiveInputBoxes] = useState([]);
  const form = useRef();

  const [formInputs, setFormInputs] = useState({
    email: "",
    name: "",
    message: "",
  });

  const inputOnChange = (e) => {
    setFormInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const resetForm = () => {
    setFormInputs({ email: "", name: "", message: "" });
  };

  console.log(formInputs, "formInputs");
  // use Email js for recive message

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1bi4diu",
        "template_aua1ttl",
        form.current,
        "lh4GWjnov5R-y6SNA"
      )
      .then(
        (result) => {
          toast.success("Message Sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          resetForm();
        },
        (error) => {
          toast.error("Ops Message not Sent!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  return (
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
      <div className="form-input-item mb-60">
        <label
          style={activeInputBoxes.includes("name") ? { color: "#FE7878" } : {}}
          className="input-lebel name"
          htmlFor="name"
        >
          name *
        </label>
        <input
          onChange={inputOnChange}
          value={formInputs.name}
          name="name"
          className={`input-box name ${
            activeInputBoxes.includes("name") && "height"
          } `}
          type="text"
          required
          onClick={() =>
            setActiveInputBoxes((pre) =>
              !pre.includes("name") ? [...pre, "name"] : pre
            )
          }
          style={
            activeInputBoxes.includes("name") ? { borderColor: "#FE7878" } : {}
          }
        />
      </div>
      <div className="form-input-item mb-60">
        <label
          style={activeInputBoxes.includes("gmail") ? { color: "#1B74E4" } : {}}
          className="input-lebel gmail"
          htmlFor="email"
        >
          Email *
        </label>
        <input
          onChange={inputOnChange}
          name="email"
          value={formInputs.email}
          className={`input-box gmail ${
            activeInputBoxes.includes("gmail") && "height"
          } `}
          type="Email"
          required
          onClick={() =>
            setActiveInputBoxes((pre) =>
              !pre.includes("gmail") ? [...pre, "gmail"] : pre
            )
          }
          style={
            activeInputBoxes.includes("gmail") ? { borderColor: "#1B74E4" } : {}
          }
        />
      </div>
      <div className="form-input-item mb-40">
        <label
          style={
            activeInputBoxes.includes("message") ? { color: "#CE65F3" } : {}
          }
          className="input-lebel message"
          htmlFor="message"
        >
          Message *
        </label>
        <textarea
          value={formInputs.message}
          onChange={inputOnChange}
          name="message"
          className={`input-box message ${
            activeInputBoxes.includes("message") && "height"
          } `}
          onClick={() =>
            setActiveInputBoxes((pre) =>
              !pre.includes("message") ? [...pre, "message"] : pre
            )
          }
          style={
            activeInputBoxes.includes("message")
              ? { borderColor: "#CE65F3" }
              : {}
          }
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div className="form-btn-wrap">
        <button type="submit" value="Send" className="form-btn">
          submit
        </button>
      </div>
    </form>
  );
}
