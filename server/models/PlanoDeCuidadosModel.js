'use strict';
module.exports = (sequelize, DataTypes) => {
  const PlanoDeCuidados = sequelize.define('PlanoDeCuidados', {
    idoso_id: DataTypes.INTEGER
  }, {});
  PlanoDeCuidados.associate = function(models) {
    PlanoDeCuidados.belongsTo(models.RotinaDeCuidados, {
      foreignKey: 'id',
      targetKey: 'planoDeCuidados_id',
      as: 'RotinaDeCuidados'
    });
  };
  return PlanoDeCuidados;
};