'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`
    CREATE OR REPLACE VIEW public."ViewPlanoDeCuidados"
    AS SELECT rc.id,
        rc.id AS "rotinaDeCuidados_id",
        pc.idoso_id,
        i.id AS instrucao_id,
        a.id AS acao_id,
        pc.id AS "planoDeCuidados_id",
        pc."createdAt"::date AS "createdAt",
        pc."updatedAt"::date AS "updatedAt",
        i.descricao AS instrucao,
        a.descricao_cuidador AS "descricaoCuidador",
        a.descricao_profissional AS "descricaoProssifional"
      FROM "RotinaDeCuidados" rc
        LEFT JOIN "Instrucao" i ON i.id = rc.instrucao_id
        LEFT JOIN "Acao" a ON a.id = i.acao_id
        LEFT JOIN "PlanoDeCuidados" pc ON pc.id = rc."planoDeCuidados_id"
      ORDER BY pc.id, a.id, i.id;
    `);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize('DROP VIEW "ViewPlanoDeCuidados"');
  }
};