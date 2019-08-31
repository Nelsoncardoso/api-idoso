module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Profissionais", {
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
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      senha: {
        allowNull: false,
        type: Sequelize.STRING
      },
      telefone: {
        allowNull: true,
        type: Sequelize.STRING
      },
      profissao: {
        allowNull: false,
        type: Sequelize.STRING
      },
      telefone: {
        allowNull: true,
        type: Sequelize.STRING
      },
      unidadeFederativa: {
        allowNull: true,
        type: Sequelize.STRING
      },
      numeroConselhoRegional: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      terms: {
        allowNull: false,
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable("Profissionais");
  }
};
