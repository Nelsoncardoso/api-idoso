'use strict';
module.exports = (sequelize, DataTypes) => {
  const Alertas = sequelize.define('Alertas', {
    descricao: DataTypes.STRING,
    padraoDaOcorrencia: DataTypes.BOOLEAN
  }, {});
  Alertas.associate = function(models) {
    // associations can be defined here
  };
  return Alertas;
};