const mongoose = require('mongoose');

async function main() {
    try {
        mongoose.set('strictQuery', true);

        await mongoose.connect('mongodb+srv://Wender:iivlCSeYZJ6K3MpI@cluster0.g5gksb6.mongodb.net/')

        console.log('Connected to MongoDB');

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = main;