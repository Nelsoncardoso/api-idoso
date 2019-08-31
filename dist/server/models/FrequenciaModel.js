'use strict';

module.exports = function (sequelize, DataTypes) {
  var Frequencia = sequelize.define('Frequencia', {
    quantidade: DataTypes.INTEGER,
    periodo: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: 'Frequencia',
    name: {
      singular: "Frequencia",
      plural: "Frequencia"
    }
  });
  Frequencia.associate = function (models) {
    // associations can be defined here
  };
  return Frequencia;
};