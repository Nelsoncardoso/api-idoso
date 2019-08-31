import Fields from '../helpers/Fields';

class MedicamentosService {
    static ParseData(data) {
        return {
            medicament: {
                idoso_id: data.idoso_id,
                profissional_id: data.profissional_id,
                posologia_id: data.posologia_id,
                nome: data.nome,
                instrucoes: Fields.setNull(data.instrucoes)
            },
            dosage: {
                quantidade: Number(data.quantidade),
                duracao_id: Fields.setNull(data.duracao),
                administracao_medicamento_id: Fields.setNull(data.administracao_medicamento),
                unidade_medida_id: Fields.setNull(data.unidade_medida),
                frequencia_id: Fields.setNull(data.frequencia)
            }
        }
    }
    static ParseDataEditView(data) {
        return {
            id: data.id,
            posologia_id: data.Posologia.id,
            nome: data.nome,
            quantidade: data.Posologia.quantidade,
            administracao_medicamento: data.Posologia.administracao_medicamento_id,
            unidade_medida: data.Posologia.unidade_medida_id,
            frequencia: data.Posologia.frequencia_id,
            duracao: data.Posologia.duracao_id,
            instrucoes: data.instrucoes
        }
    }
    static ParseDataListsPicker(data) {
        const data_TMP = {};
        for (var property in data) {
            data_TMP[property] = [];
            data[property].forEach(row => {
                data_TMP[property].push({
                    key: row.id,
                    label: row.descricao || row.tempo || row.periodo || ''
                })
            });
        }
        return data_TMP;
    }
}

export default MedicamentosService;