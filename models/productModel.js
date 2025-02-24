import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    brand: {
      type: String,
      required: [true, "Brand is required"],
      trim: true,
    },
    category: {
      type: String,
      trim: true,
    }, // Optional
    price: {
      type: String,
      required: [true, "Price is required"],
      trim: true,
    },
    OfferPrice: {
      type: String,
      default: "₹0",
      trim: true,
    },
    discount: {
      type: String,
      default: "0%",
      trim: true,
    },
    desc: {
      type: String,
      trim: true,
    },
    size: {
      type: String,
      trim: true,
    }, // Optional
    weight: {
      type: String,
      required: [true, "Weight is required"],
      trim: true,
    },
    delivery: {
      type: String,
      trim: true,
    }, // Optional
    imageUrl: {
      type: String,
      required: [true, "Image URL is required"],
      trim: true,
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

// Create and export the Product model
const Product = mongoose.model("Product", productSchema);
export default Product;