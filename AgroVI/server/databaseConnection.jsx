import * as mongoose from 'mongoose';

const connectDB = async ()=>{
    await mongoose.connect('mongodb://localhost:27017/testBase',{
        useNewUrlParser: true,
        useUnifiedTopology: true
      }).then(() => {
    console.log('Successfully connected to the database');
  }).catch((error) => {
    console.error('Error connecting to the database:', error);
  });
}

export default connectDB;


