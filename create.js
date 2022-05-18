const { DataProduk } = require("./models");

DataProduk.create({
  kategori_id: "108980",
  kode_produk: "809090",
  nama_produk: "VGA COLORFUL GTX 1030 2GB V2 NVIDIA",
  deskripsi_produk: "Chip Series GeForce® RTX 3060 Product Series iGame Series GPU Code Name GA106 Manufacturing Process 8nm",
  harga_produk: "8390000",
  gambar_produk: "./assets/colorful-RTX-3060,jpg",
}).then((DataProduk) => {
  console.log(DataProduk);
});
