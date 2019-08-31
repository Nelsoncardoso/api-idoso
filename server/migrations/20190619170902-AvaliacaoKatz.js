module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('IdosoKatz', {
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
      isTomarBanho: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      isVestir: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      isIrAoBanheiro: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      isTransferencia: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      isContinencia: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      isAlimentar: {
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('IdosoKatz');
  }
};