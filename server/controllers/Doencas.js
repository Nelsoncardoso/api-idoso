import models from '../models';

const {
    Doenca,
    DoencaClassificacao
} = models;

class DoencasController {
    static async FindAll(req, res) {
        try {
            Doenca.findAll({
                    attributes: ['id', 'nome'],
                    include: [{
                        model: DoencaClassificacao,
                        as: 'DoencaClassificacao'
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
                    error: err
                });
            });
        } catch (err) {
            res.status(500).send({
                status: 'error',
                message: "InternalError",
                error: err
            });
        }
    }
}

export default DoencasController;