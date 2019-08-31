'use strict';
module.exports = (sequelize, DataTypes) => {
  const Instrucao = sequelize.define('Instrucao', {
    acao_id: DataTypes.INTEGER,
    descricao: DataTypes.STRING,
    periodicidade: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: 'Instrucao',
    name: {
      singular: "Instrucao",
      plural: "Instrucoes"
    }
  });
  Instrucao.associate = function(models) {
    Instrucao.belongsTo(models.Acao, {
      foreignKey: 'acao_id',
      targetKey: 'id',
      as: 'Acao'
    });
  };
  return Instrucao;
};