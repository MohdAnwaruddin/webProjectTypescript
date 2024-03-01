

import express from 'express'
import cartController from '../controllers/cart.js'

const router = express.Router();


router.route('/add-product').post(cartController.addProduct)

router.route('/fetch-cart').post(cartController.fetchCart)

// router.route('/update-product').post(cartController.updateProduct)

// router.route('/delete-product').post(cartController.deleteProduct)

export default router;