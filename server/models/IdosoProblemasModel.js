export default (sequelize, DataTypes) => {
    const IdosoProblemas = sequelize.define('IdosoProblemas', {
        idoso_id: DataTypes.INTEGER,
        problema_id: DataTypes.INTEGER,
        problemaClassificacao_id: DataTypes.INTEGER,
        observacao: DataTypes.STRING
    }, {
        freezeTableName: true,
        tableName: 'IdosoProblemas',
        name: {
            singular: "IdosoProblemas",
            plural: "IdosoProblemas"
        }
    });
    IdosoProblemas.associate = function (models) {
        IdosoProblemas.belongsTo(models.Profissional, {
            foreignKey: 'profissional_id',
            targetKey: 'id',
            as: 'Profissional'
        });
        IdosoProblemas.belongsTo(models.Idoso, {
            foreignKey: 'idoso_id',
            targetKey: 'id',
            as: 'Idoso'
        });
        IdosoProblemas.belongsTo(models.Problema, {
            foreignKey: 'problema_id',
            targetKey: 'id',
            as: 'Problema'
        });
        IdosoProblemas.belongsTo(models.ProblemaClassificacao, {
            foreignKey: 'problemaClassificacao_id',
            targetKey: 'id',
            as: 'ProblemaClassificacao'
        });
    };
    return IdosoProblemas;
};