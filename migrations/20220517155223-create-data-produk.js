'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DataProduks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kategori_id: {
        type: Sequelize.STRING
      },
      kode_produk: {
        type: Sequelize.STRING
      },
      nama_produk: {
        type: Sequelize.STRING
      },
      deskripsi_produk: {
        type: Sequelize.TEXT
      },
      harga_produk: {
        type: Sequelize.STRING
      },
      gambar_produk: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('DataProduks');
  }
};