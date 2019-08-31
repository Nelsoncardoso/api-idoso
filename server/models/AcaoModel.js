'use strict';
module.exports = (sequelize, DataTypes) => {
  const Acao = sequelize.define('Acao', {
    descricao_profissional: DataTypes.STRING,
    descricao_cuidador: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: 'Acao',
    name: {
      singular: "Acao",
      plural: "Acoes"
    }
  });
  Acao.associate = function(models) {
    Acao.belongsTo(models.Problema, {
      foreignKey: 'problema_id',
      targetKey: 'id',
      as: 'Problemas'
    });
  };
  return Acao;
};