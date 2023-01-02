import mongoose from "mongoose";


const ProductModels = mongoose.Schema({
    name : {
        type        : String,
        required    : [true, "Name is Required"],
        trim        : true
    },
    reg_price : {
        type        : Number,
        required    : true,
    },
    sale_price : {
        type        : Number,
    },
    stock : {
        type        : Number,
    },
    category : {
        type        : Array,
        default     : []
    },
    tags : {
        type        : Array,
        default     : []
    },
    slug : {
        type        : Array,
        default     : []
    },
    brand : {
        type        : Array,
        default     : []
    },
    short_desc : {
        type        : String,
    },
    long_desc : {
        type        : String,
    },
    rating : {
        type        : Array,
        default     : []
    },
    photo : {
        type        : String,
    },
    gallery : {
        type        : Array,
        default     : []
    },
    status : {
        type        : Boolean,
        default     : true
    },
    trash : {
        type        : Boolean,
        default     : false
    },

},{
    timestamps : true,
});




// mongo model export
export default mongoose.model('Product', ProductModels);