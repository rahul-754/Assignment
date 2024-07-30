const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Ensure this is called at the top

const URL = process.env.URL;

const connectDB = async () => {
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to the database", err);
        process.exit(1); // Exit the process with a failure code
    }
};

module.exports = connectDB;
