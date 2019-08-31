module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('IdosoResponsaveis', {
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
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        allowNull: false
      },
      nomeCompleto: {
        allowNull: true,
        type: Sequelize.STRING
      },
      telefone: {
        allowNull: true,
        type: Sequelize.STRING
      },
      email: {
        allowNull: true,
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
    return queryInterface.dropTable('IdosoResponsaveis');
  }
};