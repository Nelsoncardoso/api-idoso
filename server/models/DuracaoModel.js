'use strict';
module.exports = (sequelize, DataTypes) => {
  const Duracao = sequelize.define('Duracao', {
    quantidade: DataTypes.INTEGER,
    tempo: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: 'Duracao',
    name: {
      singular: "Duracao",
      plural: "Duracao"
    }
  });
  Duracao.associate = function(models) {
    // associations can be defined here
  };
  return Duracao;
};