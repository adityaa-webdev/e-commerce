import "./main.css";
import React, { useState } from "react";
import cart from "./icon-cart.svg";
import iconPlus from "./icon-plus.svg";
import iconMinus from "./icon-minus.svg";
import Header from "./header";
import nav from "./icon-menu.svg";
import logo from "../components/logo.svg";
import Images from "./images";
import avatar from "../components/image-avatar.png";
import deleteIcon from "../components/icon-delete.svg";
import imageProduct1 from "./image-product-1.jpg";
// import Info from "./info";

import CollapsibleExample from "./header";

export default function Main() {
  const [visibility, setVisibility] = useState({ display: "none" });
  const [visibilityBadge, setVisibilityBadge] = useState({ display: "none" });
  const [itemAdded, updateItem] = useState("Your cart is empty");
  function emptyCart() {
    updateItem("Your cart is empty");
    setVisibilityBadge({ display: "none" });
  }

  function handleCart() {
    if (visibility.display === "none") {
      setVisibility({ display: "block" });
    } else if (visibility.display === "block") {
      setVisibility({ display: "none" });
    }
  }
  function handleCartBadge() {
    if (visibilityBadge.display === "none") {
      setVisibilityBadge({ display: "block" });
    }

    function addedToCart() {
      updateItem(() => {
        return (
          <>
            <div className="added">
              <img src={imageProduct1}></img>
              <p>
                Fall Limited Edition Sneaker
                <br />
                $125.00 x {count}
                <span id="amount"> ${parseInt(125) * count}.00</span>
              </p>
              <img id="delete" src={deleteIcon} onClick={emptyCart}></img>
            </div>
            <>
              <button id="checkout">Checkout</button>
            </>
          </>
        );
      });
    }

    addedToCart();
  }

  const [count, setCount] = useState(parseInt(1));

  function handleChangePlus() {
    let counter = count + parseInt(1);
    setCount(counter);
  }
  function handleChangeMinus() {
    if (count > 1) {
      let counter = count - parseInt(1);
      setCount(counter);
    }
  }

  return (
    <>
      <div className="header">
        <CollapsibleExample />
        <div className="header-right">
          <ul>
            <li id="cart-li">
              <button id="cart-button" onClick={handleCart}>
                <img src={cart}></img>
                <span id="cart-badge" style={visibilityBadge}>
                  <p>{count}</p>
                </span>
              </button>
              <div className="cart" style={visibility}>
                <h1>
                  Cart<hr></hr>
                  <p>{itemAdded}</p>
                </h1>
              </div>
            </li>

            <li>
              <img src={avatar} id="avatar"></img>
            </li>
          </ul>
        </div>
      </div>
      <div className="main">
        <div className="images">
          <Images />
        </div>
        <div className="info">
          <div>
            <h3>SNEAKER COMPANY</h3>
            <h1>Fall Limited Edition Sneaker</h1>
          </div>
          <div>
            <p>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they'll withstand
              everything the weather can offer.
            </p>
          </div>
          <div id="price">
            <h2>
              $125.00 <span id="discount">50%</span>
            </h2>
            <h4>$250.00</h4>
          </div>
          <div className="buttons">
            <div className="amount">
              <button id="plus-minus">
                <div id="minus" onClick={handleChangeMinus}>
                  <img alt="icon-minus" src={iconMinus}></img>
                </div>
                <div>{count}</div>
                <div id="plus" onClick={handleChangePlus}>
                  <img src={iconPlus} alt="img-plus"></img>
                </div>
              </button>
            </div>
            <div class="add-to-cart">
              <button id="add-to-cart" onClick={handleCartBadge}>
                <img src={cart} alt="cart" />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
