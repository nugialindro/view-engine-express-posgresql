const { DataProduk } = require("./models");

DataProduk.destroy({
  where: {
    id: 1,
  },
}).then(() => {
  console.log("Produk telah terhapus");
});
