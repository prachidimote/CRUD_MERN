import mongoose from 'mongoose';

const connection = () => {
    const URL = "";
    try{
        mongoose.connect(URL, {});
    }catch(error){
        console.log("Error while connecting with the database", error)
    }
}