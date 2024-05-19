const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`MongoDB connected: ${db.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectdb;
