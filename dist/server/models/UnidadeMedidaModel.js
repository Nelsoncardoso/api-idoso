'use strict';

module.exports = function (sequelize, DataTypes) {
  var UnidadeMedida = sequelize.define('UnidadeMedida', {
    descricao: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: 'UnidadeMedida',
    name: {
      singular: "UnidadeMedida",
      plural: "UnidadeMedida"
    }
  });
  UnidadeMedida.associate = function (models) {
    // associations can be defined here
  };
  return UnidadeMedida;
};