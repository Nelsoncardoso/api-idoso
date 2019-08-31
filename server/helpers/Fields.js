const Fields = {
    setNull: value => {
        return (!value || value == '' || value == 0) ? null : value;
    }
}

export default Fields;