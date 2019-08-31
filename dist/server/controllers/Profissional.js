'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

var _Form = require('../helpers/Form');

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Profissional = _models2.default.Profissional;

var ProfissionalController = function () {
    function ProfissionalController() {
        _classCallCheck(this, ProfissionalController);
    }

    _createClass(ProfissionalController, null, [{
        key: 'Create',
        value: function Create(req, res) {
            try {
                var _data = req.body;
                var _validForm = _Form2.default.Required(_data, ['nomeCompleto', 'email', 'senha', 'profissao']);
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
                }).then(function (response) {
                    if (response) {
                        res.status(422).send({
                            status: 'error',
                            message: 'DuplicateEmail'
                        });
                        return;
                    }

                    Profissional.create(_data).then(function (userData) {
                        res.status(201).send({
                            status: 'success',
                            message: 'ProfessionalCreate',
                            data: userData
                        });
                    });
                });
            } catch (error) {
                res.status(500).send({
                    status: 'error',
                    message: "InternalError"
                });
            }
        }
    }, {
        key: 'CheckEmail',
        value: function CheckEmail(email, res) {
            Profissional.findOne({
                where: {
                    email: email
                }
            }).then(function (response) {
                if (response) {
                    res.status(422).send({
                        status: 'error',
                        message: 'DuplicateEmail'
                    });
                }
            });
        }
    }, {
        key: 'FindMe',
        value: function FindMe(req, res) {
            try {
                // const _dataFind = (req.body.length) ? {
                //     id: req.session.Profissional.id
                // } : req.body;
                // if (_dataFind == '') {
                //     throw '';
                // 
                Profissional.findOne({
                    where: {
                        id: req.session.Profissional.id
                    }
                }).then(function (response) {
                    response.senha = null;
                    res.send(response);
                }).catch(function (err) {
                    res.status(500).send({
                        status: 'error',
                        message: "InternalError",
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
    }, {
        key: 'Update',
        value: function Update(req, res) {
            try {
                var _data = req.body;
                console.warn(_data);
                Profissional.update(_data, {
                    where: { id: req.session.Professional.id }
                }).then(function (response) {
                    res.status(200).send({
                        status: 'success',
                        message: 'ProfessionalEdited',
                        data: response
                    });
                }).catch(function (error) {
                    res.status(501).send({
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
    }, {
        key: 'CheckValidForm',
        value: function CheckValidForm(_data, res) {
            var _validForm = _Form2.default.Required(_data, ['nomeCompleto', 'email', 'senha', 'telefone', 'profissao', 'unidadeFederativa', 'numeroConselhoRegional', 'terms']);
            if (_validForm.length > 0) {
                res.status(422).send({
                    status: 'error',
                    message: 'InvalidValuesForm'
                });
            }
        }
    }]);

    return ProfissionalController;
}();

exports.default = ProfissionalController;