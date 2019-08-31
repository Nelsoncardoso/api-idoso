import models from '../models';
import Form from '../helpers/Form';
const {
    IdosoDoencas
} = models;
class IdosoDoencasController {
    static Create(data) {
        try {
            return IdosoDoencas.create(data).then(response => {
                return response;
            });

        } catch (error) {
            return error;
        }

    }
    static Delete(data) {
        try {
            return IdosoDoencas.destroy(
                { where: { idoso_id: data } }).then(response => {
                    return response;
                });

        } catch (error) {
            return error;
        }
    }
}

export default IdosoDoencasController;