'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('UnidadeMedida', [{
      descricao: 'unidade(s)',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      descricao: 'gota(s)',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      descricao: 'ml',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      descricao: 'comprimidos',
      createdAt: 'now()',
      updatedAt: 'now()'
    }], {});
  },

  down: function down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('UnidadeMedida', null, {});
  }
};