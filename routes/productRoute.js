import express from "express";
import Product from "../models/productModel.js"; // Importing the model

const router = express.Router();

// POST request to add a new product
router.post("/add-product", async (req, res) => {
    try {
        // Extracting data from request body
        const { name, brand, price, OfferPrice, discount, weight, imageUrl, desc } = req.body;

        // Ensure required fields are present
        if (!name || !brand || !price || !weight || !imageUrl) {
            return res.status(400).json({ message: "All required fields must be provided." });
        }

        // Creating new product document
        const newProduct = new Product({
            name,
            brand,
            price,
            OfferPrice,
            discount,
            weight,
            imageUrl,
            desc,
        });

        // Saving to the database
        const savedProduct = await newProduct.save();

        res.status(201).json({ message: "Product added successfully!", product: savedProduct });
    } catch (error) {
        res.status(500).json({ message: `Error adding product: ${error.message}` });
    }
});

export default router;
