import userModel from '../models/userModel.js';
import validator from 'validator'
import bycrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const createToken =(id)=>{
  return jwt.sign({id},process.env.JWT_SECRET)
}
// Routes for login user
const loginUser = async (req, res) => {
  try {
    const { email, password} = req.body;
  const user = await userModel.findOne({email})
  if(!user){
     return res.json({success: false, message: "User not Exists"});
  }
  const isMatch = await bycrypt.compare(password, user.password);
  if(isMatch){
    const token = createToken(user._id)
    res.json({success: true, token})
  }
  else{
    return res.json({success: false, message: "Incorrect Password or Email"});
  }
  } catch (error) {
   console.log(error);
    res.json({success: false, message: error.message }); 
  }
};
// Routes for user registration
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Checking user is already existing or not
    const exists = await userModel.findOne({email})
    if(exists){
       return res.json({success: false, message: "User already exist" })
    }
    // Validating Email format and strong password 
    if(!validator.isEmail(email)){
      return res.json({success: false, message: "Enter a valid email" })
    } 
    if(password.length<8){
      return res.json({success: false, message: "Please Enter a strong password" })
    }
    // Hashing password
    const salt = await bycrypt.genSalt(10)
    const hashedPassword = await bycrypt.hash(password, salt)
    // create a user 
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword
    })
    const user = await newUser.save()
    const token = createToken(user._id)
    res.json({success: true, token})

  } catch (error) {
    console.log(error)
    res.json({success: false, message: error.message })
  }
};
// Route for Admin login
const adminLogin = async (req, res) => {
  try {
    const {email, password}= req.body;
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
       const token = jwt.sign(email+password, process.env.JWT_SECRET)
       res.json({success:true, token})
    }else{
      return res.json({success: false, message: "Incorrect Admin Credentials"})
    }
  } catch (error) {
    console.log(error);
    return res.json({success: false, message:error.message})
  }
};

export { loginUser, registerUser, adminLogin };
