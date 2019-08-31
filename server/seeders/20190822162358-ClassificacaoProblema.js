'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ProblemaClassificacao', [{
        problema_id: 13  ,
        descricao: 'Sonda nasoenteral',
        createdAt: 'now()',
        updatedAt: 'now()'
      },
      {
        problema_id: 13,
        descricao: 'Gastrostomia',
        createdAt: 'now()',
        updatedAt: 'now()'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProblemaClassificacao', null, {});
  }
};