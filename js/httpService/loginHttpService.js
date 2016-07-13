angular.module('application').service('loginHttpService', LoginHttpService);

function LoginHttpService($http, sessionObject) {

    //request headers
    var config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    function post(login, password, success, error) {

        var data = ['Username=' + login, 'Password=' + password, 'Grant_type=password'].join("&");

        $http.post('http://api-campus-kpi-ua.azurewebsites.net/oauth/token', data, config).success(function (response) {
            addToSession(response);
            success(response);
        }).error(function (response) {
            if (response === null) {
                response['error_description'] = "Час підключення вийшов. Можливо, сервер не є дійсним."
            }
            error(response);
        });
    }

    var addToSession = function (response) {
        sessionObject.set('accessToken', response);
        sessionObject.get('status').logged = true;
    };

    return {
        post: post
    };

}