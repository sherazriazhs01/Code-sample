const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const salt = 10;
const userData = require("../schema/userSchema")


// !--------------Signup--------------------!
const signup = async (req,res) =>{

    try{
        // Yaha jo brackets m hai ye destructuring kehlati hai
        const{name, email, password} = req.body;

        // checking email if exists
        const ifEmailExist = await userData.findOne({email});

        if(ifEmailExist){
            res.status(400).send({ message: "User already exists"});
            
        } 
        // convert pass in to hash password
        const hashpassword = await bcrypt.hash(password,salt);
        const newUser = new userData({
            name,
            email,
            password:hashpassword
        });

        newUser.save();
        
        res.staus(201).send({message:"signup succesfully"})
    }
    catch{
        res.staus(200).send({message:"signup failed"})
    }
};

// !--------login------------
const login = async (req, res) => {

    //Destructure
    const {email, password} = req.body;

    // User ko find krenge yaha
    const findUser = await userData.findOne({email});

    // compare with password
    const ismatch = await bcrypt.compare(password, findUser.password);
    if(!ismatch){
        res.status(201).send({ message: "login failed"});
    }

    res.status(200).send({ message: "Login Succesful"});

};

module.exports= {signup,login};