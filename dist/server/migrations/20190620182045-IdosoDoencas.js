'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('IdosoDoencas', {
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
      demencia: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      depressao: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      diabetes: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      usoInsulina: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      doencaCerebrovascular: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      doencaCoronariana: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      parkinson: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      doencaNeoplasica: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      doencaPulmonar: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      doencaPsiquiatrica: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      hipertensao: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      hipotireoidismo: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      insuficienciaCardiaca: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      insuficienciaHepatica: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      insuficienciaRenal: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      sindromeFragilidade: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      sindromeImobilidade: {
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