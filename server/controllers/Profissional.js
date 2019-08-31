import models from '../models';
import Form from '../helpers/Form';
const { Profissional } = models;
class ProfissionalController {
    static Create(req, res) {
        try {
            const _data = req.body;
            const _validForm = Form.Required(
                _data,
                ['nomeCompleto', 'email', 'senha', 'profissao']
            );
            if (_validForm.length > 0) {
                res.status(422).send({
                    status: 'error',
                    message: 'InvalidValuesForm'
                });
                return;
            }
            
            Profissional.findOne({
                where: {
                    email: _data.email
                }
            }).then(response => {
                if (response) {
                    res.status(422).send({
                        status: 'error',
                        message: 'DuplicateEmail'
                    });
                    return;
                }

                Profissional.create(_data).then(userData => {
                    res.status(201).send({
                        status: 'success',
                        message: 'ProfessionalCreate',
                        data: userData
                    })
                });
            });
        } catch(error) {
            res.status(500).send({
                status: 'error',
                message: "InternalError"
            });
        }
        
    }
    
    static CheckEmail(email, res) {
        Profissional.findOne({
            where: {
                email: email
            }
        }).then(response => {
            if (response) {
                res.status(422).send({
                    status: 'error',
                    message: 'DuplicateEmail'
                });
            }
        });
    }

    static FindMe(req, res) {
        try {
            // const _dataFind = (req.body.length) ? {
            //     id: req.session.Profissional.id
            // } : req.body;
            // if (_dataFind == '') {
            //     throw '';
            // 
            Profissional.findOne({
                where: {
                    id: req.session.Professional.id
                }
            }).then(response => {
                response.senha = null;
                res.status(200).send({
                    status: 'success',
                    message: "DataProfessional",
                    data: response
                });
            }).catch(function (err) {
                res.status(500).send({
                    status: 'error',
                    message: "InternalError",
                    data: err
                });
            });
        } catch (err) {
            console.log(err);
            res.status(500).send({
                status: 'error',
                message: "InternalError",
                data: err
            });
        }
        
    }

    static Update(req, res) {
        try {
            const _data = req.body;
            console.warn(_data)
            Profissional.update(
                _data,
                {
                    where: {id: req.session.Professional.id}
                }
                ).then(response => {
                res.status(200).send({
                    status: 'success',
                    message: 'ProfessionalEdited',
                    data: response
                });
            }).catch(error => {
                res.status(501).send({
                    status: 'error',
                    message: "InternalError"
                });
            });

        } catch(err) {
            res.status(500).send({
                status: 'error',
                message: "InternalError"
            });
        }
    }

    static CheckValidForm(_data, res) {
        const _validForm = Form.Required(
            _data,
            ['nomeCompleto', 'email', 'senha', 'telefone', 'profissao', 'unidadeFederativa', 'numeroConselhoRegional', 'terms']
        );
        if (_validForm.length > 0) {
            res.status(422).send({
                status: 'error',
                message: 'InvalidValuesForm'
            });
        }
    }
}

export default ProfissionalController;