import ProductModel from "../models/ProductModel.js";
import fs from 'fs'

// all product list
const listProduct = async (req, res) => {
    try {
        const products = await ProductModel.find({})
        res.json({ success: true, data: products })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

// add product
const addProduct = async (req, res) => {

    try {
        let image_filename = `${req.file.filename}`

        const product = new ProductModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category:req.body.category,
            image: image_filename,
        })

        await product.save();
        res.json({ success: true, message: "Product Added" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

// delete product
const removeProduct = async (req, res) => {
    try {

        const product = await ProductModel.findById(req.body.id);
        fs.unlink(`uploads/${product.image}`, () => { })

        await ProductModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Product Removed" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

export { listProduct, addProduct, removeProduct }
