module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('IdosoProblemas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      profissional_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Profissionais',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      idoso_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Idosos',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      problema_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Problemas',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      problemaClassificacao_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ProblemaClassificacao',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      observacao: {
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('IdosoProblemas');
  }
};