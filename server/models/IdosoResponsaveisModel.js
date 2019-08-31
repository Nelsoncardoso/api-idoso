
'use strict';
module.exports = (sequelize, DataTypes) => {
    const IdosoResponsaveis = sequelize.define('IdosoResponsaveis', {
        profissional_id: {
            type: DataTypes.STRING
        },
        idoso_id: {
            type: DataTypes.STRING
        },
        nomeCompleto: {
            type: DataTypes.STRING
        },
        telefone: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        }
    }, {
        freezeTableName: true,
        tableName: 'IdosoResponsaveis',
        name: {
            singular: "IdosoResponsaveis",
            plural: "IdosoResponsaveis"
        }
    });
    IdosoResponsaveis.associate = function (models) {
        IdosoResponsaveis.belongsTo(models.Profissional, {
            foreignKey: 'profissional_id',
            targetKey: 'id',
            as: 'Profissional'
        });
        IdosoResponsaveis.belongsTo(models.Idoso, {
            foreignKey: 'idoso_id',
            targetKey: 'id',
            as: 'Idoso'
        });
    };
    
    return IdosoResponsaveis;
};