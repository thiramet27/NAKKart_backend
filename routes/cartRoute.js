import express from 'express';
import { addToCart, getUserCart, updateCart } from '../controllers/cartController.js';
import authUser from '../middleware/auth.js';

const cartRouter = express.Router();

// Fetch user's cart
cartRouter.post('/get', authUser, getUserCart);

// Add an item to the cart
cartRouter.post('/add', authUser, addToCart);

// Update items in the cart
cartRouter.post('/update', authUser, updateCart);

export default cartRouter;
