'use strict';
module.exports = (sequelize, DataTypes) => {
    const Problema = sequelize.define('Problema', {
        nome: DataTypes.STRING,
        definicao: DataTypes.STRING,
        observacao: DataTypes.STRING
    }, {
        freezeTableName: true,
        tableName: 'Problemas',
        name: {
            singular: "Problema",
            plural: "Problemas"
        }
    });
    Problema.associate = function (models) {
        Problema.hasMany(models.ProblemaClassificacao, {
            foreignKey: 'problema_id',
            as: 'ProblemaClassificacao'
        });
        Problema.belongsToMany(models.Idoso, {
            through: models.IdosoProblemas,
            as: 'IdosoProblema',
            foreignKey: 'problema_id'
        })
    };
    return Problema;
};