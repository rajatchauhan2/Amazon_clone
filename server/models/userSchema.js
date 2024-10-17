const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type : String,
        required : true,
        unique : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email')
                }
        }
    },
    Mobile: {
        type: String,
        reqired : true,
        unique : true,
        maxlength : 10
    },
    password: {
        type: String,
        required: true,
        minlength : 8
    },
    Cpassword: {
        type: String,
        required: true,
        minlength : 8
    },
    token : [
        {
            token : {
                type : String,
                required : true,

            }
        }
    ],
    carts : Array
});

userSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,12);
        this.Cpassword = await bcrypt.hash(this.Cpassword,12);
    }

    next();
    
})

const USER = new mongoose.model("USER",userSchema);




module.exports = USER;