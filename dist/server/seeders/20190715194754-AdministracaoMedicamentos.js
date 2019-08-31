'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('AdministracaoMedicamento', [{
      descricao: 'Oral',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      descricao: 'Sublingual',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      descricao: 'Parental',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      descricao: 'Retal',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      descricao: 'Tópico',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      descricao: 'Intravenoso',
      createdAt: 'now()',
      updatedAt: 'now()'
    }], {});
  },

  down: function down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('AdministracaoMedicamento', null, {});
  }
};