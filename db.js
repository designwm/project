import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/audits')
.then( async () => {
    console.log("Database connected failed");

    await mongoose.connection.db.collection('test').insertOne({
        message: "Database insert successfuly",
        date: new Date()
    })

    console.log("Database insert successfuly");

}).catch((error) => {

    console.log("Database connection failed");

});

const db = mongoose.connection;

db.on('disconnected', (req, res) => {
    console.log("Database connection disconnected");
});

export default db;