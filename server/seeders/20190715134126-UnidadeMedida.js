'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UnidadeMedida', [
      {
        descricao: 'unidade(s)',
        createdAt: 'now()',
        updatedAt: 'now()',
      },
      {
        descricao: 'gota(s)',
        createdAt: 'now()',
        updatedAt: 'now()',
      },
      {
        descricao: 'ml',
        createdAt: 'now()',
        updatedAt: 'now()',
      },
      {
        descricao: 'comprimido(s)',
        createdAt: 'now()',
        updatedAt: 'now()',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('UnidadeMedida', null, {});
  }
};
