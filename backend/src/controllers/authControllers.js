const bcrypt = require("bcrypt");
const User = require("../models/User");

exports.register = async(req,res) =>{
    try {
        const {name,email,password,role} = req.body;
        const exist = await User.findOne({email});
        if(exist){
            return res.status(400).json({message:"User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const user = await new User.create({
            name,
            email,
            password:hashedPassword,
            role
        });

        res.status(201).json({
            message:"User created Successfully",
            userId:user._id
        })
      
    } catch (error) {
        res.status(500).json({message:" Registration failed"});
    }
};


exports.login = async(req,res) =>{
    try {
        const {email,password} = req.body;
        const exist = await User.findOne({email});
        if (!exist){
            return res.status(400).json({message:"User does not exist"});
        }

        const isMatch = await bcrypt.compare(password,exist.password);

        if(!isMatch){
            return res.status(400).json({message:"Password incorrect"});
        }


     res.status(200).json({
      message: "Login successful"
    });

  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
};
