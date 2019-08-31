module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ProfissionalIdosos', {
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
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        allowNull: false
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
    return queryInterface.dropTable('ProfissionalIdosos');
  }
};