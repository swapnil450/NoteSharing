import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connection= async (URL)=>{
    try {
        // const URL='mongodb+srv://ankit:123@cluster0.szlik.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
        await mongoose.connect("mongodb+srv://thoratswapnil450:gOt9CCqmoR9tNgw3@cluster0.hn11wjd.mongodb.net/note?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}
export default connection;