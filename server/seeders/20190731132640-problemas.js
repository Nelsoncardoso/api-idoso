'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Problemas', [{
        id: 1,
        nome: 'Constipação Intestinal',
        createdAt: 'now()',
        updatedAt: 'now()'
      },
      {
        id: 2,
        nome: 'Incontinência Urinária',
        createdAt: 'now()',
        updatedAt: 'now()'
      },
      {
        id: 3,
        nome: 'Incontinência Fecal',
        createdAt: 'now()',
        updatedAt: 'now()'
      },
      {
        id: 4,
        nome: 'Imobilidade',
        createdAt: 'now()',
        updatedAt: 'now()'
      },
      {
        id: 5,
        nome: 'Insônia',
        createdAt: 'now()',
        updatedAt: 'now()'
      },
      {
        id: 6,
        nome: 'Polifarmácia',
        createdAt: 'now()',
        updatedAt: 'now()'
      },
      {
        id: 7,
        nome: 'Risco para Desidratação',
        createdAt: 'now()',
        updatedAt: 'now()'
      },
      {
        id: 8,
        nome: 'Risco para Quedas',
        createdAt: 'now()',
        updatedAt: 'now()'
      },
      {
        id: 9,
        nome: 'Sintomas Depressivos',
        createdAt: 'now()',
        updatedAt: 'now()'
      },
      {
        id: 10,
        nome: 'Acuidade Visual Reduzida',
        createdAt: 'now()',
        updatedAt: 'now()'
      },
      {
        id: 11,
        nome: 'Audição Reduzida',
        createdAt: 'now()',
        updatedAt: 'now()'
      },
      {
        id: 12,
        nome: 'Colostomizado',
        createdAt: 'now()',
        updatedAt: 'now()'
      },
      {
        id: 13,
        nome: 'Dieta por Sonda',
        createdAt: 'now()',
        updatedAt: 'now()'
      },
      {
        id: 14,
        nome: 'Traqueostomizado',
        createdAt: 'now()',
        updatedAt: 'now()'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Problemas', null, {});
  }
};