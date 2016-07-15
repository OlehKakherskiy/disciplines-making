angular.module('application').service('loginHttpService', LoginHttpService);

function LoginHttpService($http, sessionObject) {

    function post(login, password, success, errorHandler) {

        var config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        var data = ['Username=' + login, 'Password=' + password, 'Grant_type=password'].join("&");

        $http.post('http://api-campus-kpi-ua.azurewebsites.net/oauth/token', data, config).success(function (response) {
            addToSession(response);
            console.log(response);
            success(response);

        }).error(function (response) {
            if (response === null) {
                response['error_description'] = "Час підключення вийшов. Можливо, сервер не є дійсним.";
                return;
            }
            switch (response.status) {
                case 400:
                    response['error_description'] = "Введені вамі дані не пов&#39язані з жодним обліковии записом.";
                    break;
                case 500:
                    response['error_description'] = "Помилка сервера";
                    break;
            }
            errorHandler(response);
        });
    }

    function getUserInfo(success, error) {
        //TODO: тут проблемы с запросом, нужно посмотреть API
        var config = {
            headers: {
                accept: "application/json",
                contentType: "application/json"
            }
        };
        var data = "Authorization=" + sessionObject.get('accessToken');
        $http.get('http://api-campus-kpi-ua.azurewebsites.net/Account/Info', data, config).success(function (response) {
            sessionObject.set('userInfo', response.data);
            success(response.data);
        }).error(function(response){
            error(response);
        });
    }

    var addToSession = function (response) {
        sessionObject.set('accessToken', 'bearer ' + response.access_token);
        sessionObject.get('status')['logged'] = true;
    };

    return {
        signIn: post,
        getUserInfo: getUserInfo

    };

}