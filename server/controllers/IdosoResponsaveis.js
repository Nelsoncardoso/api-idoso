import models from "../models";
import Form from "../helpers/Form";
const { IdosoResponsaveis } = models;
class IdosoResponsaveisController {
  static Create(data) {
    try {
      return IdosoResponsaveis.create(data).then(response => {
        return response;
      });
    } catch (error) {
      return error;
    }
  }
}

export default IdosoResponsaveisController;
