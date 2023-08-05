import React from "react";
import Image from "next/image";
export default function TestimonialItem() {
  return (
    <div
      className="h1-modal-comment-item"
      style={{ display: "flex ", gap: "20px" }}
    >
      <div className="img">
        <Image
          style={{ borderRadius: "45%" }}
          width={125}
          height={80}
          src="/assets/img/ronald.jpg"
          alt="comment"
        />
      </div>
      <div className="content">
        <div className="name-date">
          <h5 className="name">Rafia Ana</h5>
          <span className="date">15 min ago</span>
        </div>
        <p className="comment-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi nam
          ad, unde vel aut soluta atque consequatur. Omnis, debitis nihil?
        </p>
      </div>
    </div>
  );
}
