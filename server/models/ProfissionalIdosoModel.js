export default (sequelize, DataTypes) => {
  const ProfissionalIdoso = sequelize.define('ProfissionalIdoso', {
    profissional_id: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Por Favor Insira o Nome Completo!'
      }
    },
    idoso_id: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Por Favor Insira o Nome Completo!'
      }
    }
  }, {});
  ProfissionalIdoso.associate = function(models) {
    ProfissionalIdoso.belongsTo(models.Profissional, {as: 'Profissionais', foreignKey: 'profissional_id', targetKey: 'id'});
    ProfissionalIdoso.belongsTo(models.Idoso, {as: 'Idoso', foreignKey: 'idoso_id', targetKey: 'id' });
  };
  return ProfissionalIdoso;
};