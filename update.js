const { DataProduk } = require("./models");

DataProduk.update(
  {
    gambar_produk: "./assets/colorful-RTX-3060.jpg",
  },
  {
    where: {
      id: 5,
    },
  }
)
  .then(() => {
    console.log("Produk telah diupdate");
    process.exit();
  })
  .catch((err) => {
    console.log("Produk gagal diupdate");
  });
