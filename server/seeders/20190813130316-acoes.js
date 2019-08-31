'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Acao', [{
        id: 1,
        problema_id: 4,
        descricao_profissional : 'Prevenir lesões de pele por pressão e/ou fricção',
        descricao_cuidador : 'Cuidados com a pele',
        createdAt: 'now()',
        updatedAt: 'now()'
      }, {
        id: 2,
        problema_id: 1,
        descricao_profissional: 'Garantir a hidratação adequada com o intuito de reduzir a possibilidade de complicações relacionadas a constipação',
        descricao_cuidador: 'Cuidados necessários para reduzir as complicações relacionadas a constipação intestinal',
        createdAt: 'now()',
        updatedAt: 'now()'
      }, {
        id: 3,
        problema_id: 14,
        descricao_profissional: 'Instruir sobre o manuseio adequado do traqueóstomo e quanto aos cuidados necessários',
        descricao_cuidador: 'Cuidados necessários de pessoas em uso de traqueóstomo',
        createdAt: 'now()',
        updatedAt: 'now()'
      }, {
        id: 4,
        problema_id: 6,
        descricao_profissional: 'Garantir o uso adequado dos medicamentos que devem ser administrados de acordo com a prescrição médica',
        descricao_cuidador: 'Cuidados necessários no manuseio e guarda dos medicamentos prescritos',
        createdAt: 'now()',
        updatedAt: 'now()'
      }, {
        id: 5,
        problema_id: 2,
        descricao_profissional: 'Prevenir infecção urinária e lesão de pele decorrente do contato prolongado da urina e/ou fezes',
        descricao_cuidador: 'Cuidados necessários de pessoas com incontinência',
        createdAt: 'now()',
        updatedAt: 'now()'
      }, {
        id: 6,
        problema_id: 3,
        descricao_profissional: 'Prevenir infecção urinária e lesão de pele decorrente do contato prolongado da urina e/ou fezes',
        descricao_cuidador: 'Cuidados necessários de pessoas com incontinência',
        createdAt: 'now()',
        updatedAt: 'now()'
      }, {
        id: 7,
        problema_id: 13,
        descricao_profissional: 'Garantir as orientações adequadas para administração da dieta e dos medicamentos prescritos e para o manuseio da sonda',
        descricao_cuidador: 'Cuidados necessários no manuseio da sonda utilizada para administração da dieta e dos medicamentos',
        createdAt: 'now()',
        updatedAt: 'now()'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Acao', null, {});
  }
};
