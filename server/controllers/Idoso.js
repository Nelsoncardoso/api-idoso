import _ from 'lodash';
import models from '../models';
import IdosoKatz from './IdosoKatz';
import IdosoProblemas from './IdosoProblemas';
import IdosoDoencas from './IdosoDoencas';
import IdosoResponsavel from './IdosoResponsaveis';
import IdosoService from '../service/IdosoService';
import Form from '../helpers/Form';
import CarePlan from '../service/CarePlanService';

const {
    Idoso,
    IdosoResponsaveis,
    
} = models;
class IdosoController {
    static async Create(req, res) {
        try {
            // const _currentProfessional = req.session.Professional;
            const _currentProfessional = {id: 1};
            const responseParseData = IdosoService.ParseData(req.body);
            const _validForm = Form.Required(
                responseParseData.idoso,
                ['nomeCompleto', 'dataDeNascimento']
            );

            if (_validForm.length > 0) {
                res.status(422).send({
                    status: 'error',
                    message: 'InvalidValuesForm'
                });
                return;
            }
            Idoso.create(responseParseData.idoso).then(idoso => {
                idoso.addProfissionals(_currentProfessional.id);
                if (responseParseData.katz) {
                    responseParseData.katz.idoso_id = idoso.id;
                    responseParseData.katz.profissional_id = _currentProfessional.id;
                    IdosoKatz.Create(responseParseData.katz);
                }
                if (responseParseData.problemas) {
                    const problemsIDs = []
                    responseParseData.problemas.forEach(problema => {
                        if (problema.selected) {
                            let _problemClassification = _.find(problema.ProblemaClassificacao, ['selected', true]);
                            
                            IdosoProblemas.Create({
                                idoso_id: idoso.id,
                                profissional_id: _currentProfessional.id,
                                problema_id: problema.id,
                                problemaClassificacao_id: _problemClassification ? _problemClassification.id : null,
                                observacao: responseParseData.observacoes.problemsObs
                            });
                            problemsIDs.push(problema.id);
                        }
                    });
                    CarePlan.Problems(problemsIDs, idoso.id);
                }
                if (responseParseData.doencas) {
                    responseParseData.doencas.forEach(doenca => {
                        if (doenca.selected) {
                            let _doecaClassification = _.find(doenca.DoencaClassificacao, ['selected', true]);
                            let doencac_id = _doecaClassification ? _doecaClassification.id : null
                            console.error(JSON.stringify(doencac_id));
                            IdosoDoencas.Create({
                                idoso_id: idoso.id,
                                profissional_id: _currentProfessional.id,
                                doenca_id: doenca.id,
                                doencaClassificacao_id: _doecaClassification ? _doecaClassification.id : null,
                                observacao: responseParseData.observacoes.diseaseObs
                            });
                        }
                    });
                }
                
                if (responseParseData.responsavel) {
                    responseParseData.responsavel.idoso_id = idoso.id;
                    responseParseData.responsavel.profissional_id = _currentProfessional.id;
                    IdosoResponsavel.Create(responseParseData.responsavel);
                }

                res.status(201).send({
                    status: 'success',
                    message: 'ElderCreaate',
                    data: idoso
                })
            });

        } catch (error) {
            res.status(500).send({
                status: "error",
                message: "InternalError"
            });
        }

    }

    static FindAll(req, res) {
        try {
            Idoso.findAll().then(elders => {
                res.status(200).send({
                    status: 'success',
                    message: 'ElderData',
                    data: elders
                });
            }).catch(err => {
                res.status(500).send({
                    status: 'error',
                    message: 'InternalError'
                });
            });
        } catch (err) {
            res.status(500).send({
                status: 'error',
                message: "InternalError"
            });
        }
    }

    static Find(req, res) {
        try {
            const _data = req.params;
            Idoso.findOne({
                where: {id: _data.id},
                include: [{
                    model: IdosoResponsaveis,
                    as: 'IdosoResponsaveis'
                }]
            }).then(elders => {
                res.status(200).send({
                    status: 'success',
                    message: 'ElderData',
                    data: elders
                });
            }).catch(err => {
                res.status(500).send({
                    status: 'error',
                    message: 'InternalError',
                    data: err
                });
            });
        } catch (err) {
            res.status(500).send({
                status: 'error',
                message: "InternalError",
                data: err
            });
        }
    }

    static Update(req, res) {
        try {
            const id = req.params.id;
            const _data = req.body;

            Idoso.update(
                _data, {
                    where: {
                        id: id
                    }
                }
            ).then(response => {
                res.status(200).send({
                    status: 'success',
                    message: 'ElderEdited',
                    data: response
                });
            }).catch(error => {
                res.status(500).send({
                    status: 'error',
                    message: "InternalError"
                });
            });

        } catch (err) {
            res.status(500).send({
                status: 'error',
                message: "InternalError"
            });
        }
    }
    static async FindClinicalEvaluation(req, res){
        let _clinicalEvaluation = await IdosoService.GetClinicalEvaluation(req.params.id);
        res.status(200).send({
            status: 'success',
            message: 'DataClinicalEvaluation',
            data: _clinicalEvaluation
        })
        
    }
}

export default IdosoController;