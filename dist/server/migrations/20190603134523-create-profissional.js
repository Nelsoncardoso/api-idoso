"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = {
  up: function up(queryInterface, Sequelize) {
    var _queryInterface$creat;

    return queryInterface.createTable("Profissionais", (_queryInterface$creat = {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomeCompleto: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      senha: {
        allowNull: false,
        type: Sequelize.STRING
      },
      telefone: {
        allowNull: true,
        type: Sequelize.STRING
      },
      profissao: {
        allowNull: false,
        type: Sequelize.STRING
      }
    }, _defineProperty(_queryInterface$creat, "telefone", {
      allowNull: true,
      type: Sequelize.STRING
    }), _defineProperty(_queryInterface$creat, "unidadeFederativa", {
      allowNull: true,
      type: Sequelize.STRING
    }), _defineProperty(_queryInterface$creat, "numeroConselhoRegional", {
      allowNull: true,
      type: Sequelize.INTEGER
    }), _defineProperty(_queryInterface$creat, "terms", {
      allowNull: false,
      type: Sequelize.BOOLEAN
    }), _defineProperty(_queryInterface$creat, "createdAt", {
      allowNull: false,
      type: Sequelize.DATE
    }), _defineProperty(_queryInterface$creat, "updatedAt", {
      allowNull: false,
      type: Sequelize.DATE
    }), _queryInterface$creat));
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable("Profissionais");
  }
};