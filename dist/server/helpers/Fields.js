'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Fields = {
    setNull: function setNull(value) {
        return !value || value == '' || value == 0 ? null : value;
    }
};

exports.default = Fields;