import React from "react";
import "./cart.css";
import { Divider } from "@mui/material";

const Cart = () => {
  return (
    <div className="cart_section">
      <div className="cart_container">
        <div className="left_cart">
          <img
            src="https://m.media-amazon.com/images/I/51XRimXugOL._SX679_.jpg"
            alt="cart_img"
          />
          <div className="cart_btn">
            <button className="cart_btn1">Add to Cart</button>
            <button className="cart_btn2">Buy Now</button>
          </div>
        </div>
        <div className="right_cart">
          <h3>Inkjet Printer</h3>
          <h4>Canon Pixma E470 All-in-One Inkjet Printer (Black)</h4>
          <Divider />
          <p className="mrp">M.R.P. : ₹5525</p>
          <p>
            Deal of the Day : <span style={{ color: "#B12704" }}>₹4499</span>{" "}
          </p>
          <p>
            You save : <span style={{ color: "#B12704" }}> ₹1026 (19%)</span>{" "}
          </p>
          <div className="discount_box">
            <h5>
              Discount :<span style={{ color: "#111" }}>Extra 10% off </span>{" "}
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
              Functions scan, copy and printing Interface: usb Input tray
              capacity plain paper 64-105 g/m2, Canon specialty paper max paper
              weight of approx 275 g/m2 (photo paper plus glossy II (PP-201)),
              Other system requirements Mac OS X v10.8.5 and later, Printing
              Speed: 4.0ipm (Black), Optical Sensor Resolution: 600 x 1200 DPI,
              Scan Type: Flatbed, Scan Method: CIS (Contact Image Sensor),
              Compatible Cartridge: CL-57S (Color) and PG-47 (Black), Total
              Number of Nozzles: 1,280 nozzles.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
