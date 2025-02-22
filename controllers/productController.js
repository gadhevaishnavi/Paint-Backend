import * as productService from "../services/productService.js";

// Controller: Create a product
export const createProductController = async (req, res) => {
    try {
        const { name, brand, category, price, weight, imageUrl } = req.body;

        // Check for required fields
        if (!name || !brand || !category || !price || !weight || !imageUrl) {
            return res.status(400).json({ message: "All required fields must be provided." });
        }

        const product = await productService.createProduct(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller: Get all products
export const getProductsController = async (req, res) => {
    try {
        const products = await productService.getProducts(req.query);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller: Get a product by ID
export const getProductByIdController = async (req, res) => {
    try {
        const product = await productService.getProductById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller: Update a product
export const updateProductController = async (req, res) => {
    try {
        const product = await productService.updateProduct(req.params.id, req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller: Delete a product
export const deleteProductController = async (req, res) => {
    try {
        await productService.deleteProduct(req.params.id);
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
