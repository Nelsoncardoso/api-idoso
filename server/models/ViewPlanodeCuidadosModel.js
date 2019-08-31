'use strict';
module.exports = (sequelize, DataTypes) => {
  const ViewPlanoDeCuidados = sequelize.define('ViewPlanoDeCuidados', {
    idoso_id: DataTypes.INTEGER,
    rotinaDeCuidados_id: DataTypes.INTEGER,
    instrucao_id: DataTypes.INTEGER,
    acao_id: DataTypes.INTEGER,
    planoDeCuidados_id: DataTypes.INTEGER,
    instrucao: DataTypes.STRING,
    descricaoCuidador: DataTypes.STRING,
    descricaoProssifional: DataTypes.STRING
  }, {});
  ViewPlanoDeCuidados.associate = function(models) {
    // associations can be defined here
  };
  return ViewPlanoDeCuidados;
};