const mongoose = require('mongoose');

// Corrected DB URI with encoded '@' symbol in the password
const DB = process.env.DATABASE;

mongoose.connect(DB)
  .then(() => console.log("Database connected"))
  .catch((error) => console.log("Error: " + error.message));
