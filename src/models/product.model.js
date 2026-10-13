import mongoose, { Schema } from "mongoose";

//* Product Schema
const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  },
);

//* create collection/model
//* collection name will be "products" (plural of model name)
const Product = mongoose.model("product", productSchema);


export default Product;