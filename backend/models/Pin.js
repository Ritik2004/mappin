import mongoose from "mongoose"

const pinSchema = mongoose.Schema({
  username: {
    type:String,
    required:true,
  },
  title: {
    type:String,
    required:true,
    min:3
  },
  desc: {
    type:String,
    required:true,
    min:3
  },
  rating: {
    type:String,
    required:true,
    min:0,
    max:5,
  },
  lat:{
    type:Number,
    required:true
  },
  long:{
    type:Number,
    required:true
  }

},
{timestamp: true}
)

const Pin = mongoose.model("Pin", pinSchema);

export default Pin