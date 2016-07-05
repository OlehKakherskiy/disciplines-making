angular.module('application').controller('loginController', LoginController);

function LoginController($http){

	var vm = this;

	vm.signIn = signIn;
	vm.clearForm = clearForm;

	function signIn(){

		//user data with url type formatting
		var data = ['Username='+vm.login, 'Password='+vm.password,'Grant_type=password'].join("&");

		//request headers
		var config = {
			headers:{
				'Accept':'application/json',
				'Content-Type':'application/x-www-form-urlencoded'
			}
		}

		//processes while login was successfull
		var loginSuccess = function(response){
			alert("success="+JSON.stringify(response));
			//TODO: show next page
		}

		//login error handling
		var loginError = function(response){
			vm.error_description = response.error_description;
			vm.loginError=true;
		}

		// TODO: uncommit below to send request
		$http.post('http://api-campus-kpi-ua.azurewebsites.net/oauth/token',data,config).
			success(function(response){loginSuccess(response);}).
			error(function(response){loginError(response)});
	}

	function clearForm(){
		vm.loginError=false;
		vm.password = undefined;
		vm.login = undefined;
	}
}