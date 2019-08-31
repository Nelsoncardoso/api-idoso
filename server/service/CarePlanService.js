import models from "../models";
import _ from "lodash";
const {
    Acao,
    Instrucao,
    PlanoDeCuidados,
    RotinaDeCuidados
} = models;

class CarePlan {
    static Polypharmacy() {
        return Instrucao.findAll({
            include: [{
                model: Acao,
                as: 'Acao',
                where: {
                    problema_id: 6
                }
            }]
        }).then(actions => {
            return actions;
        })
    }

    static Problems(problems, idoso_id) {
        return Instrucao.findAll({
            include: [{
                model: Acao,
                as: 'Acao',
                where: {
                    problema_id: problems
                }
            }]
        }).then(actions => {
            if(actions.length > 0) {
                PlanoDeCuidados.create({
                    idoso_id: idoso_id
                }).then(carePlan => {
                    actions.forEach(async value => {
                        await RotinaDeCuidados.create({
                            instrucao_id: value.id,
                            planoDeCuidados_id: carePlan.id
                        })
                    });
                });
            }
        });
    }

    static ParseView(obj) {
        const groupTMP = [];
        obj.forEach(row => {
            let groupBy = row.acao_id;
            let indexGroup = _.findIndex(groupTMP, row => {
                return row.acao_id == groupBy;
            });
            if (!groupTMP[indexGroup]) {
                let indexGroup = groupTMP.length || 0;
                groupTMP.push({
                    acao_id: groupBy,
                    descricaoCuidador: row.descricaoCuidador,
                    descricaoProfissional: row.descricaoProssifional,
                    instrucoes: [{
                        id: row.instrucao_id,
                        descricao: row.instrucao
                    }]
                });
            } else {
                groupTMP[indexGroup].instrucoes.push({
                    id: row.instrucao_id,
                    descricao: row.instrucao
                });
            }
        });
        return groupTMP;
    }
}

export default CarePlan;