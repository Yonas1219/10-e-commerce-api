const Order = require('../models/Order');
const Product = require('../models/Product');

const {StatusCodes} = require('http-status-codes');
const CustomError = require('../errors');
const {checkPermission} = require('../utils');



const createOrder = async (req, res) => {
const { item: cartItems, tax, shippingFee } = req.body;

if(!cartItems || cartItems.length < 1){
    throw new CustomError.BadRequestError('No cart items provided')
}
if(!tax || !shippingFee){
    throw new CustomError.BadRequestError('please provide tax and shipping fee')
}
};
const getAllOrders = async (req, res) => {
res.send('get all order')
}
const getSingleOrder = async (req, res) => {
res.send('get Single order')
}
const getCurrentUserOrders = async (req, res) => {
res.send('get current users order')
}
const updateOrder = async (req, res) => {
res.send('update order')
}

module.exports = {
    getAllOrders,
    getSingleOrder,
    getCurrentUserOrders,
    createOrder,
    updateOrder,

}