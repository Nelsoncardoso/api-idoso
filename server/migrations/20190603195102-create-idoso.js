module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Idosos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomeCompleto: {
        allowNull: false,
        type: Sequelize.STRING
      },
      apelido: {
        allowNull: true,
        type: Sequelize.STRING
      },
      cpf: {
        allowNull: true,
        type: Sequelize.STRING
      },
      dataDeNascimento: {
        allowNull: false,
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
    return queryInterface.dropTable('Idosos');
  }
};