angular.module('mainApp', ['ngRoute', 'LazyLoad'])
.config(['$routeProvider', 'lazyProvider', function ($routeProvider, lazyProvider) {
	var $lazy = lazyProvider.$get();
	$routeProvider
	.when('/login', {
		templateUrl: 'components/login/partials/login.html'
		,resolve: {
			load: function (){
				return $lazy('mainApp').load([
					'components/login/controllers/loginController'
					,'components/login/services/loginService'
				]);//
			}
		}
	})
	.when('/register', {
		templateUrl: 'components/register/partials/register.html'
		,resolve: {
			load: function (){
				return $lazy('mainApp').load([
					'components/register/controllers/registerController'
					,'components/register/services/registerService'
				]);//
			}
		}
	});
}]);
