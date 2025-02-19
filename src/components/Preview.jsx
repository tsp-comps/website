import React from "react";
import "./Preview.css";

function Preview({ reference, image, text }) {
  return (
    <div className="pdf-preview">
        <a href={reference} download>
        <img
            src={image}
            alt="Preview of PDF"
            className="pdf-image"
        />
        </a>
        <p>{text}</p>
    </div>
  );
}

export default Preview;