const mongoose = require("mongoose");
const categories = require("./categories");
const Product = require("../models/products");
const productNames = require("./productNames");

mongoose
  .connect("mongodb://localhost:27017/umarket", {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Ups... Error!");
    console.log(err);
  }); // Chequear el nuevo metodo de Colt

const sample = (array) => array[Math.floor(Math.random() * array.length)];
const seedDB = async () => {
  await Product.deleteMany({});
  console.log(process.env.CLOUDINARY_CLOUD_NAME);
  for (let i = 0; i < 7; i++) {
    const ran = Math.floor(Math.random() * productNames.length);
    const ranCat = Math.floor(Math.random() * categories.length);
    const price = Math.floor((Math.random() * 1000) / 2) * 2;
    const product = new Product({
      title: productNames[ran],
      price: price,
      categories: "Technology",
      stock: 5, // By default I set the stock to 5
      author: "6164cd179eaefaf833614fe4",
      images: [
        {
          url: `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/v1631403556/Umarket/photo-1573376671570-bc0e9aab13a1_rfnxiv.jpg`,
        },
      ],
      description: "Umarket originals.",
    });
    await product.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
