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

var IdosoDoencas = _models2.default.IdosoDoencas;

var IdosoDoencasController = function () {
    function IdosoDoencasController() {
        _classCallCheck(this, IdosoDoencasController);
    }

    _createClass(IdosoDoencasController, null, [{
        key: 'Create',
        value: function Create(data) {
            try {
                return IdosoDoencas.create(data).then(function (response) {
                    return response;
                });
            } catch (error) {
                return error;
            }
        }
    }]);

    return IdosoDoencasController;
}();

exports.default = IdosoDoencasController;