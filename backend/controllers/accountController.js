//const User = require("../models/User");
//const config = require("../config.js");
//const jwt = require("jsonwebtoken");
//const bcrypt = require('bcrypt');
import dotenv from 'dotenv';
dotenv.config();


const secret = process.env.JWT_SECRET;

import {User}   from "../models/users.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const login = async function (req, res) {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (!req.body.password || !user.password) {
      return res.status(400).json({ error: "Password is required" });
    }

    const passwordMatch = await bcrypt.compare(req.body.password, user.password);
    console.log("User Password:", user.password);
    console.log("Input Password:", req.body.password);
    console.log("Password Match:", passwordMatch);
    
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    const payload = { 
      id: user.id, 
      expire: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7)
    };

    const token = jwt.sign(payload,secret);
    console.log(secret);

    res.json({  user: user, token: token });

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const register = async function (req, res) {
  console.log("entering registration");
  try {

    if (!req.body.password) {
      return res.status(400).json({ error: "Password is required" });
    }

    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10); // Salt rounds: 10

    const newUser = new User({ 
      email: req.body.email, 
      username: req.body.username,
      password: hashedPassword
    });

    await newUser.save();
    res.json({ message: "Registration successful" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

 const profile = function(req, res) {
  res.json({
    message: 'You made it to the HUSTLERS SHOPPING profile',
    user: req.user,
    token: req.query.secret_token
  });
};


export default {
  login,
  register,
  profile
}  