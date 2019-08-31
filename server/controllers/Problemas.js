import models from '../models';

const {
    Problema,
    ProblemaClassificacao
} = models;

class ProblemasController {
    static async FindAll(req, res) {
        try {
            Problema.findAll({
                attributes: ['id', 'nome'],
                include: [{
                    model: ProblemaClassificacao,
                    as: 'ProblemaClassificacao'
                }],
                order: [
                    ['nome', 'ASC']
                ]
            }).then(response => {
                res.status(200).send({
                    status: 'success',
                    message: 'DiseasesData',
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
                message: "InternalError"
            });
        }
    }
}

export default ProblemasController;