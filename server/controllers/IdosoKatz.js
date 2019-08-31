import models from '../models';
import Form from '../helpers/Form';
const {
    IdosoKatz
} = models;
class IdosoKatzController {
    static Create(data) {
        try {
            return IdosoKatz.create(data).then(response => {
                return response;
            });

        } catch (error) {
            return error;
        }

    }

    static Update(req, res){
        const _evaluation_id = req.params.id;
        let _data = req.body
        IdosoKatz.update(_data, {
            where: {
                id: _evaluation_id
            }
        }).then(response => {
            res.status(200).send({
                status: 'success',
                message: 'ElderEdited',
                data: response
            });
        })
    }
}

export default IdosoKatzController;