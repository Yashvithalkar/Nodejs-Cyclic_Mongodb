const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({

 firstname : {
    type : String,
    require : true
 },
 lastname : {
    type : String,
    require : true
 },
 email : {
    type : String,
    unique : true
 },
//  gender : {
//     type : String,
//     require : true
//  },
 age : {
    type : Number,
    require : true
 },
 password : {
    type : String,
    require : true
 },
 confirmpassword: {
    type : String,
    require : true
 }


})

// we need to connect collection  

const Register = new mongoose.model("Register",employeeSchema);

module.exports = Register ;