import models from '../models';
import IdosoProblemasController from '../controllers/IdosoProblemas';
import IdosoDoencasController from '../controllers/IdosoDoencas';
import CarePlanService from '../service/CarePlanService';
var loadash = require("lodash");
class AvaliacaoClinicaController {
    
    static async SoftUpdateDoencas(req, res) {
        await IdosoDoencasController.Delete(req.params.id);
        await req.body.forEach(element => {
            if (element.selected) {
                let _doencaClassificacao = loadash.find(element.DoencaClassificacao,["selected", true]);
                let doenca = {
                    profissional_id: req.session.Professional.id,
                    idoso_id: req.params.id,
                    doenca_id: element.id,
                    doencaClassificacao_id: _doencaClassificacao ? _doencaClassificacao.id : null,
                    observacao: element.observacoes
                }
                IdosoDoencasController.Create(doenca)
            }
        });
        res.status(200).send({
            status: 'success',
            message: 'ProblemsUpdated',
            data: req.body
        })
    }  
    static async SoftUpdateProblemas(req, res) {
        // console.log(JSON.stringify(req.body));
        let problemsId = [];
        await IdosoProblemasController.Delete(req.params.id);
        await req.body.forEach( element => {
            if (element.selected){
                let _problemaClassificacao = loadash.find(element.ProblemaClassificacao, ["selected", true]);
                let problem = {
                    profissional_id: req.session.Professional.id,
                    idoso_id: req.params.id,
                    problema_id: element.id,
                    ProblemaClassificacao_id: _problemaClassificacao ? _problemaClassificacao.id : null,
                    observacao: element.observacoes
                }
                IdosoProblemasController.Create(problem);
                problemsId.push(element.id); 
            }
        });
        CarePlanService.Problems(problemsId,req.params.id);
        res.status(200).send({
            status: 'success',
            message: 'ProblemsUpdated',
            data: req.body
        })
    }
}

export default AvaliacaoClinicaController;