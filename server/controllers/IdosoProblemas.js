import models from '../models';
import Form from '../helpers/Form';
const {
    IdosoProblemas
} = models;
class IdosoProblemasController {
    static Create(data) {
        try {
            return IdosoProblemas.create(data).then(response => {
                return response;
            });

        } catch (error) {
            return error;
        }
    }
    static Delete(data) {
        try {
            return IdosoProblemas.destroy(
                { where: { idoso_id: data}}).then(response => {
                return response;
            });

        } catch (error) {
            return error;
        }
    }
    
}

export default IdosoProblemasController;