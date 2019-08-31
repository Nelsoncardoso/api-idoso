export default (sequelize, DataTypes) => {
  const Idoso = sequelize.define('Idoso', {
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
  Idoso.associate = function(models) {
    Idoso.belongsToMany(models.Profissional, {
      through: models.ProfissionalIdoso,
      as: 'profissionals',
      foreignKey: 'idoso_id'
    })
    Idoso.hasMany(models.IdosoResponsaveis, {
      as: 'IdosoResponsaveis',
      foreignKey: 'idoso_id'
    })
    Idoso.belongsToMany(models.Problema, {
       through: models.IdosoProblemas,
       as: 'IdosoProblema',
       foreignKey: 'idoso_id'
     })
    Idoso.belongsToMany(models.Doenca, {
      through: models.IdosoDoencas,
      as: 'IdosoDoenca',
      foreignKey: 'idoso_id'
    })
    Idoso.hasMany(models.IdosoKatz, {
      as: 'IdosoKatz',
      foreignKey: 'idoso_id'
    })
  };
  // Idoso.associate = function (models) {
  //   Idoso.belongsToMany(models.Profissional, {
  //     through: models.ProfissionalIdoso,
  //     as: 'profissionals',
  //     foreignKey: 'idoso_id'
  //   })
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
  // };
  return Idoso;
};