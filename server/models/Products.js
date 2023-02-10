import mongoose from "mongoose";


const ProductsSchema = new mongoose.Schema({

nombre:{
type:String,
required:true,
trim:true

},
precio:{
  type:Number,
  required:true
},
descripcion:{
  type:String,
  required:true
} ,
 image:{
  url:String,
  public_id:String
} 



})

export default mongoose.model("Products" ,ProductsSchema)