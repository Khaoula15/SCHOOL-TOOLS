import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://khaoula:puCWz7Po3uyDj6vM@cluster0.ko6pq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/product-del').then(()=>console.log("DB Connected"));

}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.
