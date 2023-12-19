const mongoose = require("mongoose");
const url = "mongodb+srv://muhammadumar8741:GAEpYFIPHMZKfdv6@cluster0.kgymreg.mongodb.net/";
// const url="mongodb+srv://fayyaz6578:carcar@cluster0.x8tjlir.mongodb.net/"
const connectDatabase = async () => {
  let db = false
  await mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Mongodb is connect to ${data.connection.host}`);
      db = true;
      return db;

    }).catch((err) => {
      console.log(err);
      db = false;
      return db;
    });

};
module.exports = connectDatabase;
