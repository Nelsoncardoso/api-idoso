'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

var _IdosoKatz = require('./IdosoKatz');

var _IdosoKatz2 = _interopRequireDefault(_IdosoKatz);

var _IdosoProblemas = require('./IdosoProblemas');

var _IdosoProblemas2 = _interopRequireDefault(_IdosoProblemas);

var _IdosoDoencas = require('./IdosoDoencas');

var _IdosoDoencas2 = _interopRequireDefault(_IdosoDoencas);

var _IdosoResponsaveis = require('./IdosoResponsaveis');

var _IdosoResponsaveis2 = _interopRequireDefault(_IdosoResponsaveis);

var _IdosoService = require('../service/IdosoService');

var _IdosoService2 = _interopRequireDefault(_IdosoService);

var _Form = require('../helpers/Form');

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Idoso = _models2.default.Idoso;

var IdosoController = function () {
    function IdosoController() {
        _classCallCheck(this, IdosoController);
    }

    _createClass(IdosoController, null, [{
        key: 'Create',
        value: async function Create(req, res) {
            try {
                var _currentProfessional = req.session.Professional;
                var responseParseData = _IdosoService2.default.ParseData(req.body);
                var _validForm = _Form2.default.Required(responseParseData.idoso, ['nomeCompleto', 'dataDeNascimento']);
                console.log(_validForm);

                if (_validForm.length > 0) {
                    res.status(422).send({
                        status: 'error',
                        message: 'InvalidValuesForm'
                    });
                    return;
                }
                Idoso.create(responseParseData.idoso).then(function (idoso) {
                    _currentProfessional.id = 1;
                    idoso.addProfissionals(_currentProfessional.id);
                    if (responseParseData.katz) {
                        responseParseData.katz.idoso_id = idoso.id;
                        responseParseData.katz.profissional_id = _currentProfessional.id;
                        _IdosoKatz2.default.Create(responseParseData.katz);
                    }
                    if (responseParseData.problemas) {
                        responseParseData.problemas.idoso_id = idoso.id;
                        responseParseData.problemas.profissional_id = _currentProfessional.id;
                        _IdosoProblemas2.default.Create(responseParseData.problemas);
                    }
                    if (responseParseData.doencas) {
                        responseParseData.doencas.idoso_id = idoso.id;
                        responseParseData.doencas.profissional_id = _currentProfessional.id;
                        _IdosoDoencas2.default.Create(responseParseData.doencas);
                    }
                    if (responseParseData.responsavel) {
                        responseParseData.responsavel.idoso_id = idoso.id;
                        responseParseData.responsavel.profissional_id = _currentProfessional.id;
                        _IdosoResponsaveis2.default.Create(responseParseData.responsavel);
                    }

                    res.status(201).send({
                        status: 'success',
                        message: 'ElderCreaate',
                        data: idoso
                    });
                });
            } catch (error) {
                res.status(500).send({
                    status: "error",
                    message: "InternalError"
                });
            }
        }
    }, {
        key: 'FindAll',
        value: function FindAll(req, res) {
            try {
                Idoso.findAll().then(function (elders) {
                    res.status(200).send({
                        status: 'success',
                        message: 'ElderData',
                        data: elders
                    });
                }).catch(function (err) {
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
    }, {
        key: 'Find',
        value: function Find(req, res) {
            try {
                var _data = req.params;
                Idoso.findAll({ where: { id: _data.id } }).then(function (elders) {
                    res.status(200).send({
                        status: 'success',
                        message: 'ElderData',
                        data: elders
                    });
                }).catch(function (err) {
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
    }, {
        key: 'Update',
        value: function Update(req, res) {
            try {
                var id = req.params.id;
                var _data = req.body;

                Idoso.update(_data, {
                    where: {
                        id: id
                    }
                }).then(function (response) {
                    res.status(200).send({
                        status: 'success',
                        message: 'ElderEdited',
                        data: response
                    });
                }).catch(function (error) {
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
    }]);

    return IdosoController;
}();

exports.default = IdosoController;