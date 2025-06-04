const mongoose = require('mongoose');// including mongoose model in our project

const connectDB = async ()=>{
    try{
     const uri = 'mongodb://localhost:27017/employee';
     await mongoose.connect(uri);

     const db = mongoose.connection;
      // Listeners on the connection object
    db.on('connected', () => {
      console.log('✅ Mongoose connected to DB');
    });

    db.on('error', (err) => {
      console.error('❌ Mongoose connection error:', err);
    });

    db.on('disconnected', () => {
      console.log('⚠️ Mongoose disconnected');
    });
    }
    catch(err){
        console.log("Error",err);
    }

}

module.exports = connectDB;