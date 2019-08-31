'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (sequelize, DataTypes) {
    var IdosoDoencas = sequelize.define('IdosoDoencas', {
        profissional_id: {
            type: DataTypes.STRING
        },
        idoso_id: {
            type: DataTypes.STRING
        },
        demencia: {
            type: DataTypes.BOOLEAN
        },
        depressao: {
            type: DataTypes.BOOLEAN
        },
        diabetes: {
            type: DataTypes.BOOLEAN
        },
        usoInsulina: {
            type: DataTypes.BOOLEAN
        },
        doencaCerebrovascular: {
            type: DataTypes.BOOLEAN
        },
        doencaCoronariana: {
            type: DataTypes.BOOLEAN
        },
        parkinson: {
            type: DataTypes.BOOLEAN
        },
        doencaNeoplasica: {
            type: DataTypes.BOOLEAN
        },
        doencaPulmonar: {
            type: DataTypes.BOOLEAN
        },
        doencaPsiquiatrica: {
            type: DataTypes.BOOLEAN
        },
        hipertensao: {
            type: DataTypes.BOOLEAN
        },
        hipotireoidismo: {
            type: DataTypes.BOOLEAN
        },
        insuficienciaCardiaca: {
            type: DataTypes.BOOLEAN
        },
        insuficienciaHepatica: {
            allowNull: true,
            type: DataTypes.INTEGER
        },
        insuficienciaRenal: {
            type: DataTypes.BOOLEAN
        },
        sindromeFragilidade: {
            type: DataTypes.BOOLEAN
        },
        sindromeImobilidade: {
            type: DataTypes.BOOLEAN
        }
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
    };
    return IdosoDoencas;
};