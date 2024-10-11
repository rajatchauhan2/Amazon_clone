import React from 'react'
import "./footer.css";

const footer = () => {
    const year = new Date().getFullYear();
    
  return (
    <footer>
        <div className="footer_container">
            <div className="footer_details_one">
                <h3>Get to know US</h3>
                <p>About Us</p>
                <p>Careers</p>
                <p>Press Releases</p>
                <p>Amazon Cares</p>
            </div>
            <div className="footer_details_one">
                <h3>Connect with Us</h3>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
            <div className="footer_details_one forres">
                <h3>Make Money with Us</h3>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
            <div className="footer_details_one forres">
                <h3>Make Money with Us</h3>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
        </div>
        <div className="lastdetails">
            <img src="./amazon_PNG25.png" alt="" />
            <p>Copyright 1996-{year} &nbsp; &nbsp; &nbsp;     Amazon.com &nbsp; &nbsp; &nbsp;       Inc. or its affiliates </p>
        </div>
    </footer>
  )
}

export default footer