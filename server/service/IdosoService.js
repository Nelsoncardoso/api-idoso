import models from '../models';
const {
    Doenca,
    Problema,
    Idoso,
    IdosoResponsaveis,
    IdosoKatz,
    IdosoDoencas,
    IdosoProblemas,
    ProblemaClassificacao,
    DoencaClassificacao
} = models;
class IdosoService {
    static ParseData(data) {
        let SizeData = Object.keys(data).length;
        if (SizeData === 1 || data.dataJSON) {
            data = IdosoService.ConvertJson(data.dataJSON);
        } else {
            data = data;
        }
        return data;
    }
    static ConvertJson(jsonData) {
        const _data = JSON.parse(jsonData);
        return _data;
    }
    static async GetClinicalEvaluation(idoso_id){
        let _data = {};

        _data.Katz = await IdosoService.SelectClinicalEvaluation({
            model: IdosoKatz,
            where: { idoso_id: idoso_id}
        });
        _data.Doenca = await IdosoService.SelectClinicalEvaluation({
            model: IdosoDoencas,
            where: { idoso_id: idoso_id },
            include: [Doenca, DoencaClassificacao]
        })
        _data.Problema = await IdosoService.SelectClinicalEvaluation({
            model: IdosoProblemas,
            where: { idoso_id: idoso_id },
            include: [Problema, ProblemaClassificacao]
        })
        return _data;
    }
    static async SelectClinicalEvaluation(params){
        let _data = {
            where: params.where
        }
        if (params.include) {
            if (typeof (params.include) == 'function') {
                _data.include = [{
                    model: params.include,
                    as: params.include.name
                }]
            }else{
                _data.include = [];
                for (let index = 0; index < params.include.length; index++) {
                    const modelInclude = params.include[index];
                    _data.include.push({
                        model: eval(modelInclude),
                        as: modelInclude.name
                    })
                }
            }
        }
        console.log(JSON.stringify(_data));
        return await params.model.findAll(_data).then(response =>{
            return response;
        });
    }
}

export default IdosoService;