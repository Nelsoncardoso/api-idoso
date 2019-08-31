'use strict';
module.exports = (sequelize, DataTypes) => {
  const Medicamentos = sequelize.define('Medicamentos', {
    nome: DataTypes.STRING,
    data: DataTypes.DATE,
    instrucoes: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: 'Medicamentos',
    name: {
      singular: "Medicamento",
      plural: "Medicamentos"
    }
  });
  Medicamentos.associate = function (models) {
    Medicamentos.belongsTo(models.Posologia, {
      foreignKey: 'posologia_id',
      targetKey: 'id',
      as: 'Posologia'
    });
    Medicamentos.belongsTo(models.Idoso, {
      foreignKey: 'idoso_id',
      targetKey: 'id',
      as: 'Idoso'
    });
    Medicamentos.belongsTo(models.Profissional, {
      foreignKey: 'profissional_id',
      targetKey: 'id',
      as: 'Profissional'
    });
  };
  return Medicamentos;
};