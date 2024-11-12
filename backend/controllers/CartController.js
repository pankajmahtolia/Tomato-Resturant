import UserModel from '../models/UserModel.js';

const addToCart = async (req, res) => {
    try {
      let userData = await UserModel.findById(req.body.userId);
      let cartData = await userData.cartData;
      if (!cartData[req.body.itemId]) {
        cartData[req.body.itemId] = 1;
      } else {
        cartData[req.body.itemId] += 1;
      }
      await UserModel.findByIdAndUpdate(req.body.userId, { cartData });
      res.json({ success: true, message: "Added to Cart" });
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error" });
    }
  };
  
  // remove from cart
  const removeFromCart = async (req, res) => {
    try {
      let userData = await UserModel.findById(req.body.userId);
      let cartData = await userData.cartData;
      if (cartData[req.body.itemId] > 1) {
        cartData[req.body.itemId] -= 1;
      } else {
        delete cartData[req.body.itemId];
      }
      await UserModel.findByIdAndUpdate(req.body.userId, { cartData });
      res.json({ success: true, message: "Removed from Cart" });
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error" });
    }
  };
  
  // fetch user cart data
  const getCart = async (req, res) => {
    try {
      let userData = await UserModel.findById(req.body.userId);
      let cartData = await userData.cartData;
      res.json({ success: true, cartData: cartData });
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error" });
    }
  };
  
  export { addToCart, removeFromCart, getCart };