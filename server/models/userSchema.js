const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secretKey = process.env.KEY;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  Mobile: {
    type: String,
    required: true, // Fixed typo
    unique: true,
    maxlength: 10,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  Cpassword: {
    type: String,
    required: true,
    minlength: 8,
  },
  // Rename this field to match the method's usage
  tokens: [
    // Plural to match token generation
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  carts: Array,
});

// Hash the password before saving
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.Cpassword = await bcrypt.hash(this.Cpassword, 12);
  }

  next();
});

// Token generation method
userSchema.methods.generateAuthtoken = async function () {
  try {
    const token = jwt.sign({ _id: this._id }, secretKey);

    // Ensure tokens is an array
    this.tokens = this.tokens || [];

    // Concatenate the new token
    this.tokens = this.tokens.concat({ token: token });

    // Save the user with the new token
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

// add to cart data
userSchema.methods.addToCart = async function (cart) {
  try {
    this.carts = this.carts.concat(cart);
    await this.save();
    return this.carts;
  } catch (error) {
    console.log(error);
  }
};

// Create the model
const USER = new mongoose.model("USER", userSchema);

module.exports = USER;
