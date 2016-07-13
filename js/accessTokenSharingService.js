angular.module('application').service('accessTokenSharingService', function () {
    var accessToken = {};

    function set(token) {
        accessToken = token;
    }

    function get() {
        return accessToken;
    }

    return {
        set: set,
        get: get,
        status: {
            logged: false
        }
    }
});