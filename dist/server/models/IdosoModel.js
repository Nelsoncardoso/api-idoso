'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, DataTypes) {
  var Idoso = sequelize.define('Idoso', {
    nomeCompleto: {
      type: DataTypes.STRING
    },
    dataDeNascimento: {
      type: DataTypes.STRING
    },
    cpf: {
      type: DataTypes.STRING
    },
    apelido: {
      type: DataTypes.STRING
    }
  }, {});
  Idoso.associate = function (models) {
    Idoso.belongsToMany(models.Profissional, {
      through: models.ProfissionalIdoso,
      foreignKey: 'idoso_id'
    });
  };
  Idoso.associate = function (models) {
    Idoso.belongsToMany(models.Profissional, {
      through: models.ProfissionalIdoso,
      as: 'profissionals',
      foreignKey: 'idoso_id'
    });
    // Idoso.belongsToMany(models.Problema, {
    //   through: models.IdosoProblema,
    //   as: 'problemas',
    //   foreignKey: 'idoso_id'
    // })
    // Idoso.belongsToMany(models.Diagnostico, {
    //   through: models.IdosoDiagnostico,
    //   as: 'diagnosticos',
    //   foreignKey: 'idoso_id'
    // })
    // Idoso.belongsToMany(models.AvaliacaoDeKatz, {
    //   through: models.IdosoAvaliacao,
    //   as: 'avaliacaos',
    //   foreignKey: 'idoso_id'
    // })
  };
  return Idoso;
};