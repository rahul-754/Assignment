const app = require('./app');
const dotenv = require('dotenv');
const connectDb = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to the database
connectDb();

const server = app.listen(process.env.PORT, () => {
    console.log(`The app is listening on port number ${process.env.PORT}`);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to uncaught exception');
    server.close(() => {
        process.exit(1);
    });
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to unhandled promise rejection');
    server.close(() => {
        process.exit(1);
    });
});
