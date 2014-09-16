angular.module('routeResolve')
.controller('homeController', ['$scope', '$location', function ($scope, $location) {
	$scope.showComponent = function (name) {
		$location.path(name);
	};
}]);
