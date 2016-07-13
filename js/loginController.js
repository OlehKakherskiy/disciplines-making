angular.module('application').controller('loginController', LoginController);

function LoginController($http, $location, accessTokenSharingService) {

    var vm = this;

    vm.signIn = signIn;
    vm.clearForm = clearForm;

    function signIn() {

        //user data with url type formatting
        var data = ['Username=' + vm.login, 'Password=' + vm.password, 'Grant_type=password'].join("&");

        //request headers
        var config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        //processes while login was successfull
        var loginSuccess = function (response) {
            accessTokenSharingService.set(response);
            accessTokenSharingService.status.logged = true;
            $location.path('/disciplineCatalogue');
        };

        //login error handling
        var loginError = function (response) {
            vm.error_description = response.error_description;
            vm.loginError = true;
        };

        $http.post('http://api-campus-kpi-ua.azurewebsites.net/oauth/token', data, config).success(function (response) {
            loginSuccess(response);
        }).error(function (response, status) {
            if (response === null) {
                response.error_description = "Час підключення вийшов. Можливо, сервер не є дійсним."
            }
            loginError(response);
        });
    }

    function clearForm() {
        vm.loginError = false;
        vm.password = undefined;
        vm.login = undefined;
    }
}