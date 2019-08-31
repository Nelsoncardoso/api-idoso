'use strict';
module.exports = (sequelize, DataTypes) => {
  const Frequencia = sequelize.define('Frequencia', {
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
  Frequencia.associate = function(models) {
    // associations can be defined here
  };
  return Frequencia;
};