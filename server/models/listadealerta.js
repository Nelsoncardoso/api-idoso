'use strict';
module.exports = (sequelize, DataTypes) => {
  const ListaDeAlerta = sequelize.define('ListaDeAlerta', {
    horario: DataTypes.STRING,
    resposta: DataTypes.STRING,
    data: DataTypes.DATE,
    instrucao_id: DataTypes.INTEGER,
    alerta_id: DataTypes.INTEGER
  }, {});
  ListaDeAlerta.associate = function(models) {
    // associations can be defined here
  };
  return ListaDeAlerta;
};