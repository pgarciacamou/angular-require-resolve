angular.module('mockService', ['ngMockE2E']);
angular.module('routeResolve', ['ngRoute', 'LazyLoad'])
.config(['$routeProvider', '$controllerProvider', '$provide', 'lazyProvider', function ($routeProvider, $controllerProvider, $provide, lazyProvider) {
	var $lazy = lazyProvider.$get();
	$routeProvider
	.when('/login', {
		templateUrl: 'components/login/partials/login.html'
		,resolve: [function (){
			return $lazy.load([
				'components/login/controllers/loginController'
				,'components/login/services/loginService'
			]);//
		}]
	})
	.when('/register', {
		templateUrl: 'components/register/partials/register.html',
		resolve: [function (){
			return $lazy.load([
				'components/register/controllers/registerController'
				,'components/register/services/registerService'
			]);//
		}]
	});

	angular.module('routeResolve')
	.components = {
		controller: $controllerProvider.register,
		service: $provide.service
	}

}]);
