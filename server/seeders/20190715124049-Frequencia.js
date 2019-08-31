'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Frequencia', [{
      quantidade: null, 
      periodo: '1 vez ao dia',
      createdAt: 'now()',
      updatedAt: 'now()',
    }, 
    {
      quantidade: null, 
      periodo: '2 vezes ao dia',
      createdAt: 'now()',
      updatedAt: 'now()',
    }, 
    {
      quantidade: null, 
      periodo: '3 vezes ao dia',
      createdAt: 'now()',
      updatedAt: 'now()',
    }, 
    {
      quantidade: null, 
      periodo: '4 vezes ao dia',
      createdAt: 'now()',
      updatedAt: 'now()',
    }, 
    {
      quantidade: null, 
      periodo: '5 vezes ao dia',
      createdAt: 'now()',
      updatedAt: 'now()',
    }, 
    {
      quantidade: null, 
      periodo: '6 vezes ao dia',
      createdAt: 'now()',
      updatedAt: 'now()',
    }, 
    {
      quantidade: null, 
      periodo: '12/12 horas',
      createdAt: 'now()',
      updatedAt: 'now()',
    }, 
    {
      quantidade: null, 
      periodo: '8/8 horas',
      createdAt: 'now()',
      updatedAt: 'now()',
    }, 
    {
      quantidade: null, 
      periodo: '6/6 horas',
      createdAt: 'now()',
      updatedAt: 'now()',
    }, 
    {
      quantidade: null, 
      periodo: '4/4 horas',
      createdAt: 'now()',
      updatedAt: 'now()',
    }, 
    {
      quantidade: null, 
      periodo: '2/2 horas',
      createdAt: 'now()',
      updatedAt: 'now()',
    }, 
    {
      quantidade: null,
      periodo: 'A cada hora',
      createdAt: 'now()',
      updatedAt: 'now()'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Frequencia', null, {});
  }
};
