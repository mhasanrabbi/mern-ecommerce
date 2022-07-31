require("dotenv").config();

const mongoose = require("mongoose");

const connectionStr = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.5osbr.mongodb.net/ecommern?retryWrites=true&w=majority`;

mongoose
  .connect(
    connectionStr,
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

mongoose.connection.on("error", (err) => {
  console.log("Mongoose connection error: " + err);
});
