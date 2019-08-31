import Profissionais from '../controllers/Profissional';
import Idosos from '../controllers/Idoso';
import Login from '../controllers/Login';
import Medicamentos from '../controllers/Medicamentos';
import Doencas from '../controllers/Doencas';
import Problemas from '../controllers/Problemas';
import PlanoDeCuidados from '../controllers/PlanoDeCuidados';
import IdosoKatz from '../controllers/IdosoKatz';
import AvaliacaoClinica from '../controllers/AvaliacaoClinica';
export default (app) => {
	const Router = "/api";
	app.get(Router, (req, res) => res.status(200).send({
		message: 'Bem Vindo à API do projeto idoso com autenticação!',
	}));

	// Routes Login 
	app.post(`${Router}/Login`, Login.SingIn);
	app.get("/api/logout", function (req, res) {
		req.logout();
		res.redirect("/api");
	});

	// // Routes Professional 
	const _professional = `${Router}/Professional`;
	app.post(`${_professional}/Create`, Profissionais.Create);
	app.get(`${_professional}/MyInformations`, Profissionais.FindMe);
	app.put(`${_professional}/Update`, Profissionais.Update);

	// Routes Elder
	const _elder = `${Router}/Elder`;
	app.post(`${_elder}/Create`, Idosos.Create);
	app.get(`${_elder}/FindAll`, Idosos.FindAll);
	app.get(`${_elder}/Find/:id`, Idosos.Find);
	app.put(`${_elder}/Update/:id`, Idosos.Update);
	app.get(`${_elder}/FindEvaluation/:id`, Idosos.FindClinicalEvaluation);

	// Routes Medicament
	const _medicament = `${Router}/Medicament`;
	app.post(`${_medicament}/Create`, Medicamentos.Create);
	app.get(`${_medicament}/FindAll/:ElderID`, Medicamentos.FindAll)
	app.get(`${_medicament}/ListViewMedicaments`, Medicamentos.ListViewMedicaments);
	app.get(`${_medicament}/Find/:id`, Medicamentos.Find);
	app.get(`${_medicament}/ListElderMedicaments/:ElderID`, Medicamentos.ListElderMedicaments);
	app.put(`${_medicament}/Update/:id`, Medicamentos.Update);
	app.delete(`${_medicament}/Delete/:id`, Medicamentos.Delete);

	// Routes Diseases
	const _diseases = `${Router}/Diseases`;
	app.get(`${_diseases}/FindAll`, Doencas.FindAll);

	// Routes Problems
	const _problems = `${Router}/Problems`;
	app.get(`${_problems}/FindAll`, Problemas.FindAll);

	// Routes CarePlan

	const _carePlan = `${Router}/CarePlan`;
	app.get(`${_carePlan}/FindAll/:ElderID`, PlanoDeCuidados.FindAll);
	app.get(`${_carePlan}/FindLast/:ElderID`, PlanoDeCuidados.FindLast);

	// Routes Katz

	const _katz = `${Router}/Katz`
	app.put(`${_katz}/UpdateEvaluation/:id`, IdosoKatz.Update);

	// Routes AvaliacaoClinica
	const _clinicalEvaluation = `${Router}/ClinicalEvaluation`
	app.put(`${_clinicalEvaluation}/UpdateProblems/:id`, AvaliacaoClinica.SoftUpdateProblemas);
	app.put(`${_clinicalEvaluation}/UpdateDiseases/:id`, AvaliacaoClinica.SoftUpdateDoencas);
};