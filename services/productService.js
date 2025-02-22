import Product from "../models/productModel.js";

// Create a new product
export const createProduct = async (productData) => {
    try {
        const { name, brand, price, weight, imageUrl } = productData;

        // Validate only the required fields
        if (!name || !brand || !price || !weight || !imageUrl) {
            throw new Error("All required fields (name, brand, price, weight, imageUrl) must be provided.");
        }

        const product = new Product(productData);
        return await product.save();
    } catch (error) {
        throw new Error(`Error creating product: ${error.message}`);
    }
};


// Get all products with optional filters
export const getProducts = async (filters = {}) => {
    try {
        return await Product.find(filters);
    } catch (error) {
        throw new Error(`Error fetching products: ${error.message}`);
    }
};

// Get a single product by ID
export const getProductById = async (productId) => {
    try {
        return await Product.findById(productId);
    } catch (error) {
        throw new Error(`Product not found: ${error.message}`);
    }
};

// Update a product by ID
export const updateProduct = async (productId, updateData) => {
    try {
        return await Product.findByIdAndUpdate(productId, updateData, { new: true });
    } catch (error) {
        throw new Error(`Error updating product: ${error.message}`);
    }
};

// Delete a product by ID
export const deleteProduct = async (productId) => {
    try {
        return await Product.findByIdAndDelete(productId);
    } catch (error) {
        throw new Error(`Error deleting product: ${error.message}`);
    }
};
