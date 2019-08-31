'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (sequelize, DataTypes) {
    var IdosoProblemas = sequelize.define('IdosoProblemas', {
        profissional_id: {
            type: DataTypes.STRING
        },
        idoso_id: {
            type: DataTypes.STRING
        },
        constipacao: {
            type: DataTypes.BOOLEAN
        },
        incontinenciaUrinaria: {
            type: DataTypes.BOOLEAN
        },
        incontinenciaFecal: {
            type: DataTypes.BOOLEAN
        },
        imobilidade: {
            type: DataTypes.BOOLEAN
        },
        insonia: {
            type: DataTypes.BOOLEAN
        },
        polifarmacia: {
            type: DataTypes.BOOLEAN
        },
        riscoDesidratacao: {
            type: DataTypes.BOOLEAN
        },
        riscoQuedas: {
            type: DataTypes.BOOLEAN
        },
        depressivo: {
            type: DataTypes.BOOLEAN
        },
        visaoReduzida: {
            type: DataTypes.BOOLEAN
        },
        colostomizado: {
            type: DataTypes.BOOLEAN
        },
        dietaPorSonda: {
            type: DataTypes.BOOLEAN
        },
        tipoDieta: {
            allowNull: true,
            type: DataTypes.INTEGER
        },
        traqueostomizado: {
            type: DataTypes.BOOLEAN
        },
        audicaoReduzida: {
            type: DataTypes.BOOLEAN
        }
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
    };
    return IdosoProblemas;
};