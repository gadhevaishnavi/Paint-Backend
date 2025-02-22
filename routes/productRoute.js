import express from "express";
import * as productController from "../controllers/productController.js"; // Importing the controller functions

const router = express.Router();

// Route: Create a product
router.post("/products", productController.createProductController);

// Route: Get all products
router.get("/products", productController.getProductsController);

// Route: Get a product by ID
router.get("/products/:id", productController.getProductByIdController);

// Route: Update a product
router.put("/products/:id", productController.updateProductController);

// Route: Delete a product
router.delete("/products/:id", productController.deleteProductController);

export default router;

