'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('DoencaClassificacao', [{
        doenca_id: 4,
        descricao: 'Sem uso de insulina',
        createdAt: 'now()',
        updatedAt: 'now()'
      },
      {
        doenca_id: 4,
        descricao: 'Com uso de insulina',
        createdAt: 'now()',
        updatedAt: 'now()'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('DoencaClassificacao', null, {});
  }
};