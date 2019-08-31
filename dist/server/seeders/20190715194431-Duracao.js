'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Duracao', [{
      tempo: 'USO CONTÍNUO',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      tempo: 'USO CONTÍNUO',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      tempo: 'por 01 dia',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      tempo: 'por 02 dias',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      tempo: 'por 03 dias',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      tempo: 'por 04 dias',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      tempo: 'por 05 dias',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      tempo: 'por 06 dias',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      tempo: 'por 07 dias',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      tempo: 'por 08 dias',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      tempo: 'por 09 dias',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      tempo: 'por 10 dias',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      tempo: 'por 02 semanas',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      tempo: 'por 04 semanas',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      tempo: 'por 02 meses',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      tempo: 'por 03 meses',
      createdAt: 'now()',
      updatedAt: 'now()'
    }], {});
  },

  down: function down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Duracao', null, {});
  }
};