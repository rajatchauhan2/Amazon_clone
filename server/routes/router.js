const express = require("express");
const router = new express.Router();
const Products = require("../models/productsSchema");
const USER = require("../models/userSchema");
const bcrypt = require("bcrypt");

// get productsdata
router.get("/getproducts", async (req, res) => {
  try {
    const productsdata = await Products.find();
    // console.log("Consol the data" + productsdata);
    res.status(201).json(productsdata);
  } catch (error) {
    console.log("error" + error.message);
  }
});

// get individual data
router.get("/getproductsone/:id", async (req, res) => {

  try {
      const { id } = req.params;
      console.log(id);

      const individual = await Products.findOne({ id: id });
      console.log(individual + "ind mila hai");

      res.status(201).json(individual);
  } catch (error) {
      res.status(400).json(error);
  }
});

// register data
router.post("/signup", async (req, res) => {
  // console.log(req.body);

  const { name, email, Mobile, password, Cpassword } = req.body;

  if (!name || !email || !Mobile || !password || !Cpassword) {
    res.status(422).json({ error: "fill the all data" });
    console.log("not data available");
  }
  try {
    const preuser = await USER.findOne({ email: email });
    if (preuser) {
      res.status(422).json({ error: "User already exist" });
    } else if (password !== Cpassword) {
      res
        .status(422)
        .json({ error: "password and confirm password not match" });
    } else {
      const finalUser = new USER({
        name,
        email,
        Mobile,
        password,
        Cpassword,
      });

      const storedata = await finalUser.save();
      console.log(storedata);

      res.status(201).json(storedata);
    }
  } catch (error) {}
});

// Login user api

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(422).json({ error: "fill the all data" });
  }
  try {
    const userlogin = await USER.findOne({ email: email });
    console.log(userlogin + "user value");
    if (userlogin) {
      const isMatch = await bcrypt.compare(password, userlogin.password);
      console.log(isMatch);
      if (!isMatch) {
        res.status(400).json({ error: "Invalid Detials" });
      } else {
        res.status(201).json({userlogin});
      }
    }
  } catch (error) {
    res.status(201).json({ error: "Invalid Detials" });
  }
});

module.exports = router;
