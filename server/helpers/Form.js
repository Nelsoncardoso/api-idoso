const Form = {
    Required: (object, fields) => {
        return fields.filter(field => {
            return !object[field] || object[field] === "";
        });
    }
}

export default Form;