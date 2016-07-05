angular.module('application').config(RouteProviding);

function RouteProviding($routeProvider){
	$routeProvider.when('/login',{
		templateUrl: 'pages/login.html',
		controller: 'loginController',
		controllerAs:'loginVm'
	}).
	otherwise('/login');
}