const Order = require("../models/Order");
const Product = require("../models/Product");

const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const { checkPermission } = require("../utils");

const createOrder = async (req, res) => {
  const { items: cartItems, tax, shippingFee } = req.body;

  if (!cartItems || cartItems.length < 1) {
    throw new CustomError.BadRequestError("No cart items provided");
  }
  if (!tax || !shippingFee) {
    throw new CustomError.BadRequestError(
      "please provide tax and shipping fee"
    );
  }
  let orderItems = [];
  let subtotal = 0;

  for(const item of cartItems) {
    const dbProduct = await Product.findOne({ _id: item.product });
    if (!dbProduct) {
      throw new CustomError.NotFoundError(`No product with id ${item.product}`);
    }
    const {name, price, image, _id } = dbProduct;
    const getSingleOrder = {
        amount: item.amount,
        name,
        price,
        image,
        product: _id
    };
    // add items to order list
    orderItems = [...orderItems, SingleOrderItem]
    // calc subtotal
    subtotal += item.amount * price
  }

  console.log(orderItems);
  console.log(subtotal);
  res.send("hello");
};
const getAllOrders = async (req, res) => {
  res.send("get all order");
};
const getSingleOrder = async (req, res) => {
  res.send("get Single order");
};
const getCurrentUserOrders = async (req, res) => {
  res.send("get current users order");
};
const updateOrder = async (req, res) => {
  res.send("update order");
};

module.exports = {
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  createOrder,
  updateOrder,
};
