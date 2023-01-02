import express from "express";
import multer from "multer";
import { createProduct, deleteProduct, getAllProducts, getSingleProduct } from "../controllers/productController.js";
import path, { resolve } from "path";



// routes inti
const Router = express.Router();

const __dirname = resolve();

// product photo uplaod work
const storage = multer.diskStorage({

    filename : (req, file, cb) => {
        console.log(req.files);

        cb(null, Date.now() +"_" + file.originalname );
    },
    destination : (req, file, cb) => {
        cb(null, path.join(__dirname, 'server/public/images/products/'));
    }
});

const productMulter = multer({
    storage
}).fields([
    {
        name : 'photo',
        maxCount : 1
    },
    {
        name : 'gallery',
        maxCount : 10
    }
])




// all get routers
Router.route('/').get(getAllProducts).post( productMulter, createProduct)
Router.route('/:id').get(getSingleProduct).delete(deleteProduct)


// export router
export default Router;