import Product from "../models/product.model.js";

export const getAll = async (req, res) => {
  // res.send("<h1 style=\"color: green; text-align: center; \">Get all Products</h1>");
  try {
    const products = await Product.find();
    res.status(200).json({
      message: "Get all products",
      data: products,
      status: "success",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error getting products",
      error: error.message,
      status: "error",
    });
  }
};

export const getById = async (req, res) => {
    // const productId = req.params.id;
    // res.send(`<h1 style="color: blue; text-align: center; ">Get product with ID: ${productId}</h1>`);
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        res.status(404).json({
          message: "Product not found",
          data: null,
          status: "error",
        });
        return;
      }
      res.status(200).json({
        message: "Get product by ID",
        data: product,
        status: "success",
      });
    } catch (error) {
      res.status(500).json({
        message: "Error getting product by ID",
        error: error.message,
        status: "error",
      });
    }
};

export const create = async (req, res) => {
    // console.log(req.body);
    // res.send("<h1 style=\"color: orange; text-align: center;  \">Create a new product</h1>");
    try {
      const product = await Product.create(req.body);
      res.status(201).json({
        message: "Create a new product",
        data: product,
        status: "success",
      });
    } catch (error) {
      res.status(400).json({
        message: "Error creating product",
        error: error.message,
        status: "error",
      });
    }
};

export const update = async (req, res) => {
    // const productId = req.params.id;
    // res.send(`<h1 style="color: purple; text-align: center; ">Update product with ID: ${productId}</h1>`);
    try {
      const id = req.params.id;
      const updatedProduct = await Product.findByIdAndUpdate(
        { _id: id },
        { ...req.body },
        { returnDocument: "after" }, //? return the updated document
      );
      if (!updatedProduct) {
        res.status(404).json({
          message: "Product not found",
          data: null,
          status: "error",
        });
        return;
      }
      res.status(200).json({
        message: "Update product by ID",
        data: updatedProduct,
        status: "success",
      });
    } catch (error) {
      res.status(500).json({
        message: "Error updating product by ID",
        error: error.message,
        status: "error",
      });
    }
};

export const remove = async (req, res) => {
    // const productId = req.params.id;
    // res.send(`<h1 style="color: red; text-align: center; ">Delete product with ID: ${productId}</h1>`);
    try {
      const deletedProduct = await Product.findByIdAndDelete(req.params.id);
      if (!deletedProduct) {
        res.status(404).json({
          message: "Product not found",
          data: null,
          status: "error",
        });
        return;
      }
      res.status(200).json({
        message: "Delete product by ID",
        data: deletedProduct,
        status: "success",
      });
    } catch (error) {
      res.status(500).json({
        message: "Error deleting product by ID",
        error: error.message,
        status: "error",
      });
    }
};
