'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Profissional = require('../controllers/Profissional');

var _Profissional2 = _interopRequireDefault(_Profissional);

var _Idoso = require('../controllers/Idoso');

var _Idoso2 = _interopRequireDefault(_Idoso);

var _Login = require('../controllers/Login');

var _Login2 = _interopRequireDefault(_Login);

var _Medicamentos = require('../controllers/Medicamentos');

var _Medicamentos2 = _interopRequireDefault(_Medicamentos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
	var Router = "/api";
	app.get(Router, function (req, res) {
		return res.status(200).send({
			message: 'Bem Vindo à API do projeto idoso com autenticação!'
		});
	});

	// Routes Login 
	app.post(Router + '/Login', _Login2.default.SingIn);
	app.get("/api/logout", function (req, res) {
		req.logout();
		res.redirect("/api");
	});

	// // Routes Professional 
	var _professional = Router + '/Professional';
	app.post(_professional + '/Create', _Profissional2.default.Create);
	app.get(_professional + '/MyInformations', _Profissional2.default.FindMe);
	app.put(_professional + '/Update', _Profissional2.default.Update);

	// Routes Elder
	var _elder = Router + '/Elder';
	app.post(_elder + '/Create', _Idoso2.default.Create);
	app.get(_elder + '/FindAll', _Idoso2.default.FindAll);
	app.get(_elder + '/Find/:id', _Idoso2.default.Find);
	app.put(_elder + '/Update/:id', _Idoso2.default.Update);

	// Routes Medicament
	var _medicament = Router + '/Medicament';
	app.post(_medicament + '/Create', _Medicamentos2.default.Create);
	app.get(_medicament + '/FindAll', _Medicamentos2.default.FindAll);
	app.get(_medicament + '/ListViewMedicaments', _Medicamentos2.default.ListViewMedicaments);
	app.get(_medicament + '/Find/:id', _Medicamentos2.default.Find);
	app.get(_medicament + '/ListElderMedicaments/:ElderID', _Medicamentos2.default.ListElderMedicaments);
	app.put(_medicament + '/Update/:id', _Medicamentos2.default.Update);
	app.delete(_medicament + '/Delete/:id', _Medicamentos2.default.Delete);
};