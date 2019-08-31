'use strict';
module.exports = (sequelize, DataTypes) => {
  const Posologia = sequelize.define('Posologia', {
    quantidade: DataTypes.INTEGER,
    duracao_id: DataTypes.INTEGER,
    administracao_medicamento_id: DataTypes.INTEGER,
    unidade_medida_id: DataTypes.INTEGER,
    frequencia_id: DataTypes.INTEGER
  }, {
    freezeTableName: true,
    tableName: 'Posologia',
    name: {
      singular: "Posologia",
      plural: "Posologias"
    }

  });
  Posologia.associate = function(models) {
    // associations can be defined here
  };
  return Posologia;
};