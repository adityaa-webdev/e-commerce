import "./images.css";
import imageProduct1Thumbnail from "./image-product-1-thumbnail.jpg";
import imageProduct2Thumbnail from "./image-product-2-thumbnail.jpg";
import imageProduct3Thumbnail from "./image-product-3-thumbnail.jpg";
import imageProduct4Thumbnail from "./image-product-4-thumbnail.jpg";
import imageProduct1 from "./image-product-1.jpg";
import imageProduct2 from "./image-product-2.jpg";
import imageProduct3 from "./image-product-3.jpg";
import imageProduct4 from "./image-product-4.jpg";
import React, { useState } from "react";

export default function Images(props) {
  const [initial, setImage] = useState(imageProduct1);
  

  return (
    <div className="images">
      <div className="image-viewer">
        <div className="image-1">
          <img className="large-image" src={initial}></img>
        </div>
      </div>
      <div className="image-thumbnails">
        <img
          className="small-img"
          src={imageProduct1Thumbnail}
          onClick={() => {
            setImage(imageProduct1);
          }}
        ></img>
        <img
          className="small-img"
          src={imageProduct2Thumbnail}
          onClick={() => {
            setImage(imageProduct2);
          }}
        ></img>
        <img
          className="small-img"
          src={imageProduct3Thumbnail}
          onClick={() => {
            setImage(imageProduct3);
          }}
        ></img>
        <img
          className="small-img"
          src={imageProduct4Thumbnail}
          onClick={() => {
            setImage(imageProduct4);
          }}
        ></img>
      </div>
    </div>
  );
}
