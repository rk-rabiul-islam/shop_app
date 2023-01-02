import mongoose from "mongoose";


// create a mongoDB connection 
const mongoDBConnect = async () => {

    try {
        
        const connection = mongoose.connect(process.env.MONGODB_STRING);
        console.log(`mongoDB connected successfully`.bgBlue.black);

    } catch (error) {

        console.log(error);

    }
    

}

// export mongo connection 
export default mongoDBConnect;