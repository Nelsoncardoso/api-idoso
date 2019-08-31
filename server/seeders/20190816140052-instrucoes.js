'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Instrucao', [{
      acao_id: 1,
      descricao: 'Aplicar hidratante na pele',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      acao_id: 1,
      descricao: 'Verificar se há sinais de “calor” localizado e/ou “vermelhidão” e/ou endurecimento e/ou lesão na pele',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      acao_id: 1,
      descricao: 'Alternar o lado que a pessoa idosa está deitada na cama a cada 3 horas: lado direito, lado esquerdo e barriga para cima',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      acao_id: 1,
      descricao: 'Manter os calcanhares elevados, afastados da superfície da cama',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      acao_id: 1,
      descricao: 'Manter os lençóis da cama bem esticados e sem dobras',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      acao_id: 1,
      descricao: 'Colocar os pés da pessoa idosa sobre um banquinho ou outro apoio quando os pés não alcançarem o chão na posição sentada',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      acao_id: 1,
      descricao: 'Manter as unhas aparadas e lixadas, tanto as da pessoa idosa quanto as de outras pessoas que realizam cuidados diretos',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      acao_id: 2,
      descricao: 'Manter a oferta ou a administração de água (líquidos em geral) de acordo com a orientação médica',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      acao_id: 3,
      descricao: 'Lavar as mãos sempre antes e após o manuseio do traqueóstomo',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      acao_id: 3,
      descricao: 'Lavar a cânula uma vez ao dia ou sempre que necessário',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      acao_id: 3,
      descricao: 'Limpar a pele em torno do traqueóstomo, uma vez ao dia ou sempre que necessário',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      acao_id: 3,
      descricao: 'Trocar as gazes que ficam entre a pele e as abas da cânula, bem como os cadarços de fixação do traqueóstomo',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      acao_id: 3,
      descricao: 'Manter a entrada do traqueóstomo protegida por um avental pequeno (gaze) para evitar a entrada de poeira ou corpo estranho',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      acao_id: 4,
      descricao: 'Manter os medicamentos nas embalagens originais para facilitar sua identificação e controle da validade',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      acao_id: 4,
      descricao: 'Verificar se os medicamentos em uso estão no prazo de validade',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      acao_id: 4,
      descricao: 'Manter os medicamentos de uso contínuo em locais separado dos outros medicamentos que foram suspensos',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      acao_id: 5,
      descricao: 'Verificar a cada 2 horas se a pessoa idosa está com urina ou fezes e, se necessário, trocar fralda e roupa de cama',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      acao_id: 5,
      descricao: 'Aplicar uma fina camada de creme emoliente apropriado, após cada troca de fralda, principalmente após banho e à noite',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      acao_id: 6,
      descricao: 'Observar, antes de administrar a dieta ou medicação, se o comprimento da sonda está mantido. Se a sonda sair, não tentar recolocá-la',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      acao_id: 6,
      descricao: 'Diluir os medicamentos separadamente',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      acao_id: 6,
      descricao: 'Triturar os comprimidos em 20 ml de água filtrada. Medicamentos líquidos também devem ser misturados em água',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      acao_id: 6,
      descricao: 'Lavar a sonda, com 20 ml de água, antes e após cada administração de medicamento',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, {
      acao_id: 6,
      descricao: 'Elevar a cabeceira 45 graus ou sentar a pessoa idosa para administrar a dieta ou medicação. Aguardar pelo menos 30 minutos após a administração para deitá-lo(a) novamente',
      createdAt: 'now()',
      updatedAt: 'now()'
    }, ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Instrucao', null, {});
  }
};
