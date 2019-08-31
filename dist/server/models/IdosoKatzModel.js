'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (sequelize, DataTypes) {
    var IdosoKatz = sequelize.define('IdosoKatz', {
        profissional_id: {
            type: DataTypes.STRING
        },
        idoso_id: {
            type: DataTypes.STRING
        },
        isTomarBanho: {
            type: DataTypes.BOOLEAN
        },
        isVestir: {
            type: DataTypes.BOOLEAN
        },
        isIrAoBanheiro: {
            type: DataTypes.BOOLEAN
        },
        isTransferencia: {
            type: DataTypes.BOOLEAN
        },
        isContinencia: {
            type: DataTypes.BOOLEAN
        },
        isAlimentar: {
            type: DataTypes.BOOLEAN
        }
    }, {
        freezeTableName: true,
        tableName: 'IdosoKatz',
        name: {
            singular: "IdosoKatz",
            plural: "IdosoKatz"
        }
    });
    IdosoKatz.associate = function (models) {
        IdosoKatz.belongsTo(models.Profissional, {
            foreignKey: 'profissional_id',
            targetKey: 'id',
            as: 'Profissional'
        });
        IdosoKatz.belongsTo(models.Idoso, {
            foreignKey: 'idoso_id',
            targetKey: 'id',
            as: 'Idoso'
        });
    };
    return IdosoKatz;
};