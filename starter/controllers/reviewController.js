const Review = require("../models/Review");
const Product = require("../models/Product");

const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const { checkPermissions } = require("../utils");

const createReview = async (req, res) => {
  res.send("create review");
};
const getAllReviews = async (req, res) => {
  res.send("get all review");
};
const getSingleReview = async (req, res) => {
  res.send("get single review");
};
const updateReview = async (req, res) => {
  res.send("update review");
};
const deleteReview = async (req, res) => {
  res.send("delete review");
};

module.exports = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
};
