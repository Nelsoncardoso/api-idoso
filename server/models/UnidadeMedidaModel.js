'use strict';
module.exports = (sequelize, DataTypes) => {
  const UnidadeMedida = sequelize.define('UnidadeMedida', {
    descricao: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: 'UnidadeMedida',
    name: {
      singular: "UnidadeMedida",
      plural: "UnidadeMedida"
    }
  });
  UnidadeMedida.associate = function(models) {
    // associations can be defined here
  };
  return UnidadeMedida;
};