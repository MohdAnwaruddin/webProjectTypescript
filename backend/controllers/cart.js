// const productSchema = require("../models/products")


import {Cart}   from "../models/cart.js";
// import {Categories}   from "../models/Categories.js";

const addProduct = async (req, res) => {
    res.setHeader('Referrer-Policy', 'no-referrer');
    try {
        await Cart.create({
            userId: req.body.userId,
            productId: req.body.id,
            quantity: req.body.quantity
        })
        return res.status(200).json({ success: true });
    } catch (error) {
        return res.status(500).json({ success: false });    
    }
   

}

const fetchCart = async (req, res) => {
    res.setHeader('Referrer-Policy', 'no-referrer');
    console.log("fetchCart", req.body)
   try {
    const userAddedCartProducts = await Cart.find({userId:req.body.userId})
    return res.status(200).json({ success: true, data: userAddedCartProducts });
   } catch (error) {
    return res.status(500).json({ success: false, data: null });
   }
    

}
const updateCart = async (req, res) => {
    res.setHeader('Referrer-Policy', 'no-referrer');
    console.log("fetchCart", req.body)
    try{
      
        return res.status(200).json({ success: true, data: productDetails });
    }
   catch (e){
    return res.status(500).json({ success: false, data: null });
   }

}
const deleteCart = async (req, res) => {
    res.setHeader('Referrer-Policy', 'no-referrer');
    console.log("fetchCart", req.body)
try {
 
    return res.status(200).json({ success: true, data: distinctCategories });

} catch (error) {
    
    return res.status(500).json({ success: false, data: null });
}
   

}

export default {
    addProduct,
    fetchCart,
    deleteCart,
    updateCart
}  