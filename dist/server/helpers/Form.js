"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Form = {
    Required: function Required(object, fields) {
        return fields.filter(function (field) {
            return !object[field] || object[field] === "";
        });
    }
};

exports.default = Form;