import models from "../models";
import MedicamentosService from '../service/MedicamentosSevice';
import CarePlan from '../service/CarePlanService';
const {
    Medicamentos,
    Posologia,
    AdministracaoMedicamento,
    UnidadeMedida,
    Frequencia,
    Duracao,
    PlanoDeCuidados,
    RotinaDeCuidados
} = models;
class MedicamentosController {
    static async Create(req, res, sequelize) {
        try {
            const data = MedicamentosService.ParseData(req.body);

            await models.sequelize.transaction(async (t) => {
                return await Posologia.create(data.dosage, {transaction: t}).then(dosage => {
                    data.medicament.posologia_id = dosage.id;
                    return Medicamentos.create(data.medicament, {transaction: t}).then(medicament => {
                        return Medicamentos.findAndCountAll({
                            where: {
                                idoso_id: data.medicament.idoso_id
                            }
                        })
                        .then(async result => {
                            if (result.count >= 4) {
                                return PlanoDeCuidados.create({
                                    idoso_id: data.medicament.idoso_id
                                }, {
                                    transaction: t
                                }).then(async carePlan => {
                                    const _polypharmacy = await CarePlan.Polypharmacy();
                                    _polypharmacy.forEach(instruction => {
                                        return RotinaDeCuidados.create({
                                            instrucao_id: instruction.id,
                                            planoDeCuidados_id: carePlan.id
                                        })
                                    });
                                });
                            }
                        });
                    });
                });
            });

            res.status(201).send({
                status: 'success',
                message: 'CreateMedicament'
            });
        } catch (err) {
            res.status(500).send({
                status: 'error',
                message: 'InternalError',
                data: err
            });
        }
    }

    static async Update(req, res, sequelize) {
        try {
            const data = MedicamentosService.ParseData(req.body);
            await models.sequelize.transaction(async (t) => {
                return await Medicamentos.update(data.medicament, {
                    where: {
                        id: req.body.id
                    },
                    transaction: t
                }).then(dosage => {
                    return Posologia.update(data.dosage, {
                        where: {
                            id: req.body.posologia_id
                        }, 
                        transaction: t
                    });
                });

            });
            res.status(200).send({
                status: 'success',
                message: 'UpdatedMedicament'
            });
        } catch (err) {
            res.status(500).send({
                status: 'error',
                message: 'InternalError',
                data: err
            });
        }
    }
    static Find(req, res) {
        try {
            const _data = req.params;
            Medicamentos.findOne({
                where: {
                    id: _data.id
                },
                include: [{
                    model: Posologia,
                    as: 'Posologia'
                }]
            }).then(result => {
                res.status(200).send({
                    status: 'success',
                    message: 'MedicamentData',
                    data: MedicamentosService.ParseDataEditView(result)
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

    static FindAll() {
        try {
            const _data = req.params;

            Medicamentos.findAll({
                where: {
                    idoso_id: _data.ElderID
                }
            }).then(elders => {
                
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
        } catch (error) {
            return error
        }
    }

    static async ListViewMedicaments(req, res) {
        try {
            const data = {
                administrationRoute: [],
                unitMeasure: [],
                frequency: [],
                duration: []
            }
            await AdministracaoMedicamento.findAll().then(response => {
                data.administrationRoute = response;
            });
            await UnidadeMedida.findAll().then(response => {
                data.unitMeasure = response
            });
            await Frequencia.findAll().then(response => {
                data.frequency = response
            });
            await Duracao.findAll().then(response => {
                data.duration = response
            });
            res.status(200).send({
                status: 'success',
                message: 'ListViewMedicaments',
                data: MedicamentosService.ParseDataListsPicker(data)
            });
        } catch (error) {
            res.status(500).send({
                status: 'error',
                message: 'InternalError',
                data: error
            });
        }
    }

    static async ListElderMedicaments(req, res) {
        try {
            const _data = req.params;

            await Medicamentos.findAll({
                where: {idoso_id: _data.ElderID}
            }).then(medicaments => {
                res.status(200).send({
                    status: 'success',
                    message: 'ListElderMedicaments',
                    data: medicaments
                });
            })
        } catch (err) {
            res.status(500).send({
                status: 'error',
                message: 'InternalError'
            });
        }
    }

    static async Delete(req, res) {
        try {
            const params = req.params;
            await Posologia.destroy({
                where: { id : params.id}
            }).then(response => {
                res.status(200).send({
                    status: 'success',
                    message: 'DeletedMedicaments',
                    data: response
                });
            });
        } catch (err) {
            console.warn(err);
            res.status(500).send({
                status: 'error',
                message: 'InternalError'
            });
        }
    }
}

export default MedicamentosController;