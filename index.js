const express = require("express");
const { DataProduk } = require("./models");
const app = express();

const PORT = 8000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/produk/", (req, res) => {
  DataProduk.findAll().then((DataProduk) => {
    res.render("./index", {
      DataProduk,
    });
  });
});

app.delete("/produk/:id", (req, res) => {
  DataProduk.destroy({
    where: { id: req.params.id },
  })
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      res.status(422).json("Produk gagal dihapus");
    });
});

// Endpoint untuk params tertentu
app.get("/produk/:id", (req, res) => {
  DataProduk.findOne({
    where: { id: req.params.id },
  }).then((DataProduk) => {
    res.render("./show", DataProduk.dataValues);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
