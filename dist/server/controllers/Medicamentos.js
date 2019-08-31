'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

var _MedicamentosSevice = require('../service/MedicamentosSevice');

var _MedicamentosSevice2 = _interopRequireDefault(_MedicamentosSevice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Medicamentos = _models2.default.Medicamentos,
    Posologia = _models2.default.Posologia,
    AdministracaoMedicamento = _models2.default.AdministracaoMedicamento,
    UnidadeMedida = _models2.default.UnidadeMedida,
    Frequencia = _models2.default.Frequencia,
    Duracao = _models2.default.Duracao;

var MedicamentosController = function () {
    function MedicamentosController() {
        _classCallCheck(this, MedicamentosController);
    }

    _createClass(MedicamentosController, null, [{
        key: 'Create',
        value: async function Create(req, res, sequelize) {
            try {
                var data = _MedicamentosSevice2.default.ParseData(req.body);
                await _models2.default.sequelize.transaction(async function (t) {
                    return await Posologia.create(data.dosage, { transaction: t }).then(function (dosage) {
                        console.warn(data);
                        data.medicament.posologia_id = dosage.id;
                        return Medicamentos.create(data.medicament, { transaction: t });
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
    }, {
        key: 'Update',
        value: async function Update(req, res, sequelize) {
            try {
                var data = _MedicamentosSevice2.default.ParseData(req.body);
                await _models2.default.sequelize.transaction(async function (t) {
                    return await Medicamentos.update(data.medicament, {
                        where: {
                            id: req.body.id
                        },
                        transaction: t
                    }).then(function (dosage) {
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
    }, {
        key: 'Find',
        value: function Find(req, res) {
            try {
                var _data = req.params;
                Medicamentos.findOne({
                    where: {
                        id: _data.id
                    },
                    include: [{
                        model: Posologia,
                        as: 'Posologia'
                    }]
                }).then(function (result) {
                    res.status(200).send({
                        status: 'success',
                        message: 'MedicamentData',
                        data: _MedicamentosSevice2.default.ParseDataEditView(result)
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
        key: 'FindAll',
        value: function FindAll() {
            try {
                Medicamentos.findAll({
                    where: {
                        idoso_id: 1,
                        profissional_id: 1
                    }
                }).then(function (elders) {

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
            } catch (error) {
                return error;
            }
        }
    }, {
        key: 'ListViewMedicaments',
        value: async function ListViewMedicaments(req, res) {
            try {
                var data = {
                    administrationRoute: [],
                    unitMeasure: [],
                    frequency: [],
                    duration: []
                };
                await AdministracaoMedicamento.findAll().then(function (response) {
                    data.administrationRoute = response;
                });
                await UnidadeMedida.findAll().then(function (response) {
                    data.unitMeasure = response;
                });
                await Frequencia.findAll().then(function (response) {
                    data.frequency = response;
                });
                await Duracao.findAll().then(function (response) {
                    data.duration = response;
                });
                res.status(200).send({
                    status: 'success',
                    message: 'ListViewMedicaments',
                    data: _MedicamentosSevice2.default.ParseDataListsPicker(data)
                });
            } catch (error) {
                res.status(500).send({
                    status: 'error',
                    message: 'InternalError',
                    data: error
                });
            }
        }
    }, {
        key: 'ListElderMedicaments',
        value: async function ListElderMedicaments(req, res) {
            try {
                var _data = req.params;

                await Medicamentos.findAll({
                    where: { idoso_id: _data.ElderID }
                }).then(function (medicaments) {
                    res.status(200).send({
                        status: 'success',
                        message: 'ListElderMedicaments',
                        data: medicaments
                    });
                });
            } catch (err) {
                res.status(500).send({
                    status: 'error',
                    message: 'InternalError'
                });
            }
        }
    }, {
        key: 'Delete',
        value: async function Delete(req, res) {
            try {
                var params = req.params;
                await Posologia.destroy({
                    where: { id: params.id }
                }).then(function (response) {
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
    }]);

    return MedicamentosController;
}();

exports.default = MedicamentosController;