'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Doencas', [{
        id: 1,
        nome: 'Arritmia Cardíaca',
        createdAt: 'now()',
        updatedAt: 'now()',
      },
      {
        id: 2,
        nome: 'Demência Neurodegenerativa',
        createdAt: 'now()',
        updatedAt: 'now()',
      },
      {
        id: 3,
        nome: 'Depressão',
        createdAt: 'now()',
        updatedAt: 'now()',
      },
      {
        id: 4,
        nome: 'Diabetes Mellitus',
        createdAt: 'now()',
        updatedAt: 'now()',
      },
      {
        id: 5,
        nome: 'Doença Cerebrovascular',
        createdAt: 'now()',
        updatedAt: 'now()',
      },
      {
        id: 6,
        nome: 'Doença Coronariana',
        createdAt: 'now()',
        updatedAt: 'now()',
      },
      {
        id: 7,
        nome: 'Doença de Parkinson ou Parkinsonismos',
        createdAt: 'now()',
        updatedAt: 'now()',
      },
      {
        id: 8,
        nome: 'Doença Neoplásica',
        createdAt: 'now()',
        updatedAt: 'now()',
      },
      {
        id: 9,
        nome: 'Doença Pulmonar Crônica',
        createdAt: 'now()',
        updatedAt: 'now()',
      },
      {
        id: 10,
        nome: 'Doença Psiquiátrica, exceto Depressão',
        createdAt: 'now()',
        updatedAt: 'now()',
      },
      {
        id: 11,
        nome: 'Hipertensão Arterial Sistêmica',
        createdAt: 'now()',
        updatedAt: 'now()',
      },
      {
        id: 12,
        nome: 'Hipotireoidismo',
        createdAt: 'now()',
        updatedAt: 'now()',
      },
      {
        id: 13,
        nome: 'Insuficiência Cardíaca',
        createdAt: 'now()',
        updatedAt: 'now()',
      },
      {
        id: 14,
        nome: 'Insuficiência Hepática',
        createdAt: 'now()',
        updatedAt: 'now()',
      },
      {
        id: 15,
        nome: 'Insuficiência Renal',
        createdAt: 'now()',
        updatedAt: 'now()',
      },
      {
        id: 16,
        nome: 'Síndrome de Fragilidade',
        createdAt: 'now()',
        updatedAt: 'now()',
      },
      {
        id: 17,
        nome: 'Síndrome de Imobilidade',
        createdAt: 'now()',
        updatedAt: 'now()',
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('AdministracaoMedicamento', null, {});
  }
}