import mongoose from "mongoose";

const producerSchema=mongoose.Schema({
    producer_id:{
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
})

const producerModel = mongoose.model("Producer",producerSchema)

export default producerModel;