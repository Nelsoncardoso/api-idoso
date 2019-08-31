'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('IdosoProblemas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idoso_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Idosos',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      profissional_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Profissionais',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        allowNull: false
      },
      constipacao: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      incontinenciaUrinaria: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      incontinenciaFecal: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      imobilidade: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      insonia: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      polifarmacia: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      riscoDesidratacao: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      riscoQuedas: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      depressivo: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      visaoReduzida: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      colostomizado: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      dietaPorSonda: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      tipoDieta: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      traqueostomizado: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      audicaoReduzida: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('IdosoProblemas');
  }
};