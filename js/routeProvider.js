angular.module('application').config(RouteProviding);

function RouteProviding($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'pages/login.html',
        controller: 'loginController',
        controllerAs: 'loginVm'
    }).when('/disciplineCatalogue', {
        templateUrl: 'pages/disciplineCatalogue.html',
        controller: 'disciplineCatalogController'
    }).when('/index', {
        templateUrl: 'pages/main.html',
        controller: 'mainPageController'
    }).when('/systemActions', {
        templateUrl: 'pages/systemActions.html',
        controller: 'systemActionsController'
    }).otherwise('/index');
}