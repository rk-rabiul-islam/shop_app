import Product from "../models/Product.js";

/**
 * @access public
 * @route /api/Product
 * @method GET
 * 
 */
 export const getAllProducts = async (req, res, next) =>{

    try {
        const products = await Product.find();
        if( !products ){
            return next(createError(404, 'No Data Found'))
        }
        if(products){
            res.status(200).json(products);
        }

    } catch (error) {
        next(error);
    }
}


/**
 * @access public
 * @route /api/user/:id
 * @method GET
 * 
 */
export const getSingleProduct = async (req, res, next) =>{

    try {
        const product = await Product.findById(req.params.id);

        if( !product ){
            return next(createError(404, 'No Data Found'))
        }

        if(product){
            res.status(302).json(product);
        }

    } catch (error) {
        next(error);
    }
}


/**
 * @access create Product
 * @route /api/Product
 * @method Post
 * 
 */
export const createProduct = async (req, res, next) =>{


    try {

        let gallery = []
        for( let i = 0; i < req.files.gallery.length; i++){
            gallery.push(req.files.gallery[i].filename)
        }

        const product = await Product.create({
            ...req.body,
            photo : req.files.photo[0].filename,
            gallery : gallery,
            category : req.body.category.split(','),
            tags : req.body.tags.split(','),

        });
        res.status(201).json(product);

    } catch (error) {
        next(error);
    }
}

// /**
//  * @access login users
//  * @route /api/user/:id
//  * @method put/patch
//  * 
//  */
// export const updateUser = async (req, res, next) =>{

//     const {id} = req.params

//     try {
//         const user = await User.findByIdAndUpdate(id, req.body, {new : true});

//         if( !user ){

//             return next(createError(404, 'No Data Found For UpDate'))
//         }
//         if(user){
//             res.status(200).json(user);
//         }


//     } catch (error) {
//         next(error);
//     }

// }

/**
 * @access login users
 * @route /api/user/:id
 * @method Post
 * 
 */
export const deleteProduct = async (req, res, next) =>{

    const {id} = req.params


    try {
       const product = await Product.findByIdAndDelete(id);

        if( !product ){
            return next(createError(404, 'No Data Found For Delete'))
        }
        if(product){
            res.status(200).json(product);
        }

    } catch (error) {
        next(error);
    }
}
