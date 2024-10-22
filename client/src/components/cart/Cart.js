import React, { useContext, useEffect, useState } from "react";
import "./cart.css";
import { Divider } from "@mui/material";
import { useParams } from "react-router-dom";
import { LoginContext } from "../context/ContextProvider";

const Cart = () => {
  const { id } = useParams("");  // get product id from URL params

  const {account,setAccount} = useContext(LoginContext)
  const [inddata, setInddata] = useState(null);  // initialize inddata as null


  // Function to fetch product details based on ID
  const getinddata = async () => {
    try {
      const res = await fetch(`/getproductsone/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (res.status === 201) {
        setInddata(data);  // Update state with fetched product data
      } else {
        console.log("No data available");
      }
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    getinddata();  // Fetch product data when component loads
  }, [id]);

  // Add to cart function
  const addtocart = async (id) => {
    try {
      if (!inddata) {
        console.error("Product data is not available.");
        alert("Product data is missing.");
        return;
      }

      // Sending only necessary data for adding to the cart
      const checkres = await fetch(`/addtocart/${id}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: id,  // Pass the product ID
          productDetails: inddata,  // You can pass specific fields if needed
        }),
        credentials: "include",  // Include cookies if needed
      });

      // Handle response from the server
      if (checkres.status === 201) {
        const data1 = await checkres.json();
        console.log("Data added to cart:", data1);
        alert("Data added to your cart");
      } else if (checkres.status === 401) {
        console.log("User invalid");
        alert("User invalid");
      } else {
        console.log("Failed to add product to cart");
        alert("Failed to add product to cart");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("An error occurred while adding to your cart");
    }
  };

  return (
    <div className="cart_section">
      {inddata ? (  // Render only if inddata is available
        <div className="cart_container">
          <div className="left_cart">
            <img src={inddata.url} alt="cart_img" />
            <div className="cart_btn">
              <button
                className="cart_btn1"
                onClick={() => addtocart(inddata.id)}
              >
                Add to Cart
              </button>
              <button className="cart_btn2">Buy Now</button>
            </div>
          </div>
          <div className="right_cart">
            <h3>{inddata.title?.shortTitle}</h3>
            <h4>{inddata.title?.longTitle}</h4>
            <Divider />
            <p className="mrp">M.R.P. : ₹{inddata.price?.mrp}</p>
            <p>
              Deal of the Day :{" "}
              <span style={{ color: "#B12704" }}>₹{inddata.price?.cost}</span>{" "}
            </p>
            <p>
              You save :{" "}
              <span style={{ color: "#B12704" }}>
                ₹{inddata.price?.mrp - inddata.price?.cost} (
                {inddata.price?.discount})
              </span>{" "}
            </p>
            <div className="discount_box">
              <h5>
                Discount :
                <span style={{ color: "#111" }}>{inddata.discount} </span>{" "}
              </h5>
              <h4>
                Free delivery :
                <span style={{ color: "#111", fontWeight: 500 }}>Oct 8-21</span>
                Details
              </h4>
              <p>
                Fastest delivery :
                <span style={{ color: "#111", fontWeight: 600 }}>
                  Tomorrow 11AM
                </span>
              </p>
            </div>
            <p className="description">
              About the Item :{" "}
              <span
                style={{
                  color: "#565959",
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: "0.4px",
                }}
              >
                {inddata.description}
              </span>
            </p>
          </div>
        </div>
      ) : (
        <p>Loading product data...</p>
      )}
    </div>
  );
};

export default Cart;
