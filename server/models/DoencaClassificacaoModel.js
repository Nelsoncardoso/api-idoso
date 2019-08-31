'use strict';
module.exports = (sequelize, DataTypes) => {
  const DoencaClassificacao = sequelize.define('DoencaClassificacao', {
    doenca_id: DataTypes.INTEGER,
    descricao: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: 'DoencaClassificacao',
    name: {
      singular: "DoencaClassificacao",
      plural: "DoencaClassificacoes"
    }
  });
  DoencaClassificacao.associate = function (models) {
    // associations can be defined here
  };
  return DoencaClassificacao;
};