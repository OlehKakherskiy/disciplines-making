angular.module('application').controller('menuController', MenuController);

function MenuController($scope, $location, sessionObject) {

    $scope.singIn = function () {
        $location.path('/login');
    };

    $scope.logOut = function () {
        alert('Функція знаходиться в стадії розробки');
    };

    $scope.index = function () {
        $location.path('/index');
    };

    $scope.status = {
        logged: sessionObject.get('status').logged
    }
}