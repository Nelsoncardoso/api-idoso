'use strict';

module.exports = function (sequelize, DataTypes) {
  var AdministracaoMedicamento = sequelize.define('AdministracaoMedicamento', {
    descricao: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: 'AdministracaoMedicamento',
    name: {
      singular: "AdministracaoMedicamento",
      plural: "AdministracaoMedicamento"
    }
  });
  AdministracaoMedicamento.associate = function (models) {
    // associations can be defined here
  };
  return AdministracaoMedicamento;
};