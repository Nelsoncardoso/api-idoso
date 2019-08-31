'use strict';
module.exports = (sequelize, DataTypes) => {
  const RotinaDeCuidados = sequelize.define('RotinaDeCuidados', {
    instrucao_id: DataTypes.INTEGER,
    planoDeCuidados_id: DataTypes.INTEGER
  }, {});
  RotinaDeCuidados.associate = function(models) {
    RotinaDeCuidados.belongsTo(models.Instrucao, {
      foreignKey: 'instrucao_id',
      targetKey: 'id',
      as: 'Acao'
    });
  };
  return RotinaDeCuidados;
};