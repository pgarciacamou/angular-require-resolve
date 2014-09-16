(function(){
	'use strict';
	var components;
	angular.module('LazyLoad', [])
	.config(['$controllerProvider', '$provide', function ($controllerProvider, $provide){
		components = {
			controller: $controllerProvider.register
			,service: $provide.service
		};
	}])
	.factory('lazy', function (){
		var $injector = angular.injector(['ng'])
		,$rootScope = $injector.get('$rootScope')
		,$q = $injector.get('$q');

		return function(moduleName){
			angular.module(moduleName).components = angular.module(moduleName).components || components;
			return {
				load: function (arr){
					arr = arr || [];
					var deferred = $q.defer();
					require(arr, function () {
						$rootScope.$apply(function (){deferred.resolve();});
					});
					return deferred.promise;
				}
			};
		}
	});
})();