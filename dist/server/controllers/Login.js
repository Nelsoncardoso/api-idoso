'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Profissional = _models2.default.Profissional;

var Login = function () {
    function Login() {
        _classCallCheck(this, Login);
    }

    _createClass(Login, null, [{
        key: 'SingIn',
        value: function SingIn(req, res) {
            try {
                var _data = req.body;
                Profissional.findOne({
                    where: {
                        email: _data.email
                    }
                }).then(function (response) {
                    if (!response) {
                        res.status(422).send({
                            mensage: 'EmailNotFound'
                        });
                        return;
                    }
                    if (!response.validPassword(_data.password)) {
                        res.status(412).send({
                            mensage: 'InvalidPassword'
                        });
                        return;
                    }
                    req.session.Professional = response;
                    console.log(req.session);
                    res.send(response);
                });
            } catch (error) {
                res.status(500).send({
                    mensage: 'InternalError',
                    details: error
                });
            }
        }
    }]);

    return Login;
}();

exports.default = Login;