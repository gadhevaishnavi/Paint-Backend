import express from "express";
import multer from "multer";
import path from "path";
import * as productController from "../controllers/productController.js"; // Importing controllers

const router = express.Router();

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Ensure "uploads" folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ storage });

// Route: Create a product with an image
router.post("/products", upload.single("image"), productController.createProductController);

// Route: Get all products
router.get("/products", productController.getProductsController);

// Route: Get a product by ID
router.get("/products/:id", productController.getProductByIdController);

// Route: Update a product (including optional image update)
router.put("/products/:id", upload.single("image"), productController.updateProductController);

// Route: Delete a product
router.delete("/products/:id", productController.deleteProductController);

export default router;
