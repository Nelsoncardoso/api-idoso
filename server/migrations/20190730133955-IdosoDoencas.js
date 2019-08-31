module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('IdosoDoencas', {
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
      doenca_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Doencas',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      doencaClassificacao_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'DoencaClassificacao',
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