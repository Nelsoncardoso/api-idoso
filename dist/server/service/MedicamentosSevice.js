'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Fields = require('../helpers/Fields');

var _Fields2 = _interopRequireDefault(_Fields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MedicamentosService = function () {
    function MedicamentosService() {
        _classCallCheck(this, MedicamentosService);
    }

    _createClass(MedicamentosService, null, [{
        key: 'ParseData',
        value: function ParseData(data) {
            return {
                medicament: {
                    idoso_id: data.idoso_id,
                    profissional_id: data.profissional_id,
                    posologia_id: data.posologia_id,
                    nome: data.nome,
                    instrucoes: _Fields2.default.setNull(data.instrucoes)
                },
                dosage: {
                    quantidade: Number(data.quantidade),
                    duracao_id: _Fields2.default.setNull(data.duracao),
                    administracao_medicamento_id: _Fields2.default.setNull(data.administracao_medicamento),
                    unidade_medida_id: _Fields2.default.setNull(data.unidade_medida),
                    frequencia_id: _Fields2.default.setNull(data.frequencia)
                }
            };
        }
    }, {
        key: 'ParseDataEditView',
        value: function ParseDataEditView(data) {
            return {
                id: data.id,
                posologia_id: data.Posologia.id,
                nome: data.nome,
                quantidade: data.Posologia.quantidade,
                administracao_medicamento: data.Posologia.administracao_medicamento_id,
                unidade_medida: data.Posologia.unidade_medida_id,
                frequencia: data.Posologia.frequencia_id,
                duracao: data.Posologia.duracao_id
            };
        }
    }, {
        key: 'ParseDataListsPicker',
        value: function ParseDataListsPicker(data) {
            var data_TMP = {};
            for (var property in data) {
                data_TMP[property] = [];
                data[property].forEach(function (row) {
                    data_TMP[property].push({
                        key: row.id,
                        label: row.descricao || row.tempo || row.periodo || ''
                    });
                });
            }
            return data_TMP;
        }
    }]);

    return MedicamentosService;
}();

exports.default = MedicamentosService;