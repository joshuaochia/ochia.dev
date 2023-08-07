import React from "react";
import Image from "next/image";
export default function TestimonialItem(props) {
  return (
    <div
      className="h1-modal-comment-item"
      style={{ display: "flex ", gap: "10px" }}
    >
      <div style={{ width: "10%" }}>
        <Image
          style={{ borderRadius: "45%", width: "50px", height: "50px" }}
          width={50}
          height={50}
          src={props.image}
          alt="comment"
        />
      </div>
      <div style={{ width: "90%" }} className="content">
        <div className="name-date">
          <h5 className="name">{props.name}</h5>
          <span className="date">{props.company}</span>
        </div>
        <p className="comment-text">{props.text}</p>
      </div>
    </div>
  );
}
