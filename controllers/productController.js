import * as productService from "../services/productService.js";

// Controller: Create a product
export const createProductController = async (req, res) => {
    try {
      const { name, price, description } = req.body;
      const imageUrl = req.file ? `/uploads/${req.file.filename}` : null; // Store image path
  
      const newProduct = new Product({ name, price, description, image: imageUrl });
      await newProduct.save();
  
      res.status(201).json({ message: "Product created successfully", product: newProduct });
    } catch (error) {
      res.status(500).json({ message: "Error creating product", error: error.message });
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
      const { name, price, description } = req.body;
      const imageUrl = req.file ? `/uploads/${req.file.filename}` : undefined; // Update image if provided
  
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        { name, price, description, ...(imageUrl && { image: imageUrl }) },
        { new: true }
      );
  
      if (!updatedProduct) return res.status(404).json({ message: "Product not found" });
  
      res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
      res.status(500).json({ message: "Error updating product", error: error.message });
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
