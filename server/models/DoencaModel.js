'use strict';
module.exports = (sequelize, DataTypes) => {
    const Doenca = sequelize.define('Doenca', {
        nome: DataTypes.STRING,
        definicao: DataTypes.STRING,
        observacao: DataTypes.STRING
    }, {
        freezeTableName: true,
        tableName: 'Doencas',
        name: {
            singular: "Doenca",
            plural: "Doencas"
        }
    });
    Doenca.associate = function (models) {
        Doenca.belongsToMany(models.Idoso, {
            through: models.IdosoDoencas,
            as: 'Doenca',
            foreignKey: 'doenca_id'
        });
        Doenca.hasMany(models.DoencaClassificacao, {
            foreignKey: 'doenca_id',
            as: 'DoencaClassificacao'
        });
    };
    return Doenca;
};