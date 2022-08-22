import "./info.css";

export default function Info() {
  return(
    <>
      <div>
        <h3>SNEAKER COMPANY</h3>
        <h1>Fall Limited Edition Sneaker</h1>
      </div>
      <div>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
      </div>
      <div id="price">
        <h2>
          $125.00 <span id="discount">50%</span>
        </h2>
        <h4>$250.00</h4>
      </div>
      </>
   
  );
}
