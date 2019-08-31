export default (sequelize, DataTypes) => {
    const IdosoDoencas = sequelize.define('IdosoDoencas', {
        idoso_id: DataTypes.INTEGER,
        doenca_id: DataTypes.INTEGER,
        doencaClassificacao_id: DataTypes.INTEGER,
        observacao: DataTypes.STRING
    }, {
        freezeTableName: true,
        tableName: 'IdosoDoencas',
        name: {
            singular: "IdosoDoencas",
            plural: "IdosoDoencas"
        }
    });
    IdosoDoencas.associate = function (models) {
        IdosoDoencas.belongsTo(models.Profissional, {
            foreignKey: 'profissional_id',
            targetKey: 'id',
            as: 'Profissional'
        });
        IdosoDoencas.belongsTo(models.Idoso, {
            foreignKey: 'idoso_id',
            targetKey: 'id',
            as: 'Idoso'
        });
        IdosoDoencas.belongsTo(models.Doenca, {
            foreignKey: 'doenca_id',
            targetKey: 'id',
            as: 'Doenca'
        });
        IdosoDoencas.belongsTo(models.DoencaClassificacao, {
            foreignKey: 'doencaClassificacao_id',
            targetKey: 'id',
            as: 'DoencaClassificacao'
        });
    };
    return IdosoDoencas;
};