import models from '../models';
import moment from 'moment';
import CarePlanService from '../service/CarePlanService';

const {
    ViewPlanoDeCuidados,
    PlanoDeCuidados
} = models;

class PlanoDeCuidadosController {
    static async FindAll(req, res) {
        try {
            const _data = req.params;

            ViewPlanoDeCuidados.findAll({
                where: {
                    idoso_id: _data.ElderID
                }
            }).then(response => {
                res.status(200).send({
                    status: 'success',
                    message: 'CarePlanData',
                    data: response
                });
            }).catch(err => {
                res.status(501).send({
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

    static async FindLast(req, res) {
        try {
            const _data = req.params;
            PlanoDeCuidados.findOne({
                where: {
                    idoso_id: _data.ElderID
                },
                limit: 1,
                order: [["createdAt", "ASC"]]
            }).then(carePlan => {
                ViewPlanoDeCuidados.findAll({
                    where: {
                        idoso_id: _data.ElderID,
                        createdAt: moment(carePlan.createdAt).format('YYYY-MM-DD')
                    }
                }).then(response => {
                    res.status(200).send({
                        status: 'success',
                        message: 'CarePlanData',
                        data: CarePlanService.ParseView(response)
                    });
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
}

export default PlanoDeCuidadosController;