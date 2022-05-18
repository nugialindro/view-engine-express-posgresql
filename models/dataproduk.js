'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DataProduk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DataProduk.init({
    kategori_id: DataTypes.STRING,
    kode_produk: DataTypes.STRING,
    nama_produk: DataTypes.STRING,
    deskripsi_produk: DataTypes.TEXT,
    harga_produk: DataTypes.STRING,
    gambar_produk: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'DataProduk',
  });
  return DataProduk;
};