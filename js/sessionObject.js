angular.module('application').service('sessionObject', function () {

    var session = {};

    var addParam = function (name, value) {
        session[name] = value;
    };

    var getParam = function (name) {
        return session[name];
    };

    var status = {
        logged: false
    };

    addParam('status', status);

    return {
        set: addParam,
        get: getParam
    }
});