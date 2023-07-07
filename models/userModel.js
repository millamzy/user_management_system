import mongoose from "mongoose";
 
const User = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    contact:{
        type: String,
        required: true
    },
    

    
});
 
export default mongoose.model('Users', User);