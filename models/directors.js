import mongoose from "mongoose";

const directorSchema=mongoose.Schema({
    director_id:{
        type:Number,
        require:true,
        minLength:1
    },
    name:{
        type:String,
        require:true,
        minLength:2 
    },
    movies:{
        type:[String],
        require:true,
        minLength:2 
    }
});


const directorModel = mongoose.model("director",directorSchema)

export default directorModel;