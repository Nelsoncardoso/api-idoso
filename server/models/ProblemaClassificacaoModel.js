'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProblemaClassificacao = sequelize.define('ProblemaClassificacao', {
    problema_id: DataTypes.INTEGER,
    descricao: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: 'ProblemaClassificacao',
    name: {
      singular: "ProblemaClassificacao",
      plural: "ProblemaClassificacoes"
    }
  });
  ProblemaClassificacao.associate = function(models) {
    // ProblemaClassificacao.belongsToMany(models.Problema, {
    //   targetKey: 'id',
    //   foreignKey: 'problema_id',
    //   as: 'ProblemaClassificacao'
    // });
  };
  return ProblemaClassificacao;
};