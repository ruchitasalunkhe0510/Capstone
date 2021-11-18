import React, { useState } from "react";
import "./Premium.css";
import StripeCheckout from "react-stripe-checkout";
import { Link } from "react-router-dom";

function Premium() {
  const [product, setproduct] = useState({
    name: "diet plan",
    price: 10,
    productBy: "healthy diet plan ",
  });
  const makePayment = (token) => {
    const body = { token, product };
    const headers = {
      "Content-Type": "application/json; ",
    };
    return fetch(`http://localhost:3001/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONCE", response);
        const { status } = response;
        console.log("STATUS", status);
      })
      .catch((error) => console.log("error"));
  };
  return (
    <div className="premium">
      <h3 className="pre4">Try Premium free for 15 days</h3>
      <Link to="/main">
        <div className="free">
          <button className="pre1">Get Start for free</button>
          <p>Genrate daily meal plans</p>
          <p>Track what you eat</p>
          <p>Create custom foods and recipes</p>
          <p>Schedule recurring foods</p>
        </div>
      </Link>
      <StripeCheckout
        stripeKey="pk_test_51JbTKCSFhbD0CPrvITksDesRTkVXGbUWkOeqqZ5zbgaXQlEWWOnhbookjo2EST3Wzio2Zxy8ecnqDGeu8PGKvs2e00cbkGmSoC"
        token={makePayment}
        name="BUY Diet Plan"
        amount={product.price * 100}
      >
        <div className="paid">
          <button className="pre2">Buy this product</button>
          <p>Genrate daily meal plans</p>
          <p>Track what you eat</p>
          <p>Create custom foods and recipes</p>
          <p>Schedule recurring foods</p>
        </div>
      </StripeCheckout>
    </div>
  );
}

export default Premium;
