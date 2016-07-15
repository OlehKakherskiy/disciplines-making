angular.module('application').controller('loginController', LoginController);

function LoginController($http, $location, loginHttpService) {

    var vm = this;

    vm.signIn = signIn;
    vm.clearForm = clearForm;

    function signIn() {
        loginHttpService.signIn(vm.login, vm.password, loginSuccess, loginError);
        loginHttpService.getUserInfo(function (data) { //TODO: запрос пока что не работает
            console.log(data);
        }, function (response) {
            console.log(response);
        })
    }

    //processes while login was successful
    var loginSuccess = function (response) {
        $location.path('/systemActions');
    };

    //login error handling
    var loginError = function (response) {
        vm.error_description = response.error_description;
        vm.loginError = true;
    };

    function clearForm() {
        vm.loginError = false;
        vm.password = undefined;
        vm.login = undefined;
    }
}