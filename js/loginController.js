angular.module('application').controller('loginController', LoginController);

function LoginController($http, $location, loginHttpService) {

    var vm = this;

    vm.signIn = signIn;
    vm.clearForm = clearForm;

    function signIn() {
        loginHttpService.post(vm.login, vm.password, loginSuccess, loginError);
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