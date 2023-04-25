import mongoose from "mongoose"

export const connectDb = () => {
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"MAP_APP"
    })
    .then((c)=>console.log(`Database is connected to ${c.connection.host}`))
    .catch(()=>console.log('Error in connecting'))
}