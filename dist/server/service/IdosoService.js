"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IdosoService = function () {
    function IdosoService() {
        _classCallCheck(this, IdosoService);
    }

    _createClass(IdosoService, null, [{
        key: "ParseData",
        value: function ParseData(data) {
            var SizeData = Object.keys(data).length;
            if (SizeData === 1 || data.dataJSON) {
                data = IdosoService.ConvertJson(data.dataJSON);
            } else {
                data = data;
            }
            return data;
        }
    }, {
        key: "ConvertJson",
        value: function ConvertJson(jsonData) {
            var _data = JSON.parse(jsonData);
            return _data;
        }
    }]);

    return IdosoService;
}();

exports.default = IdosoService;