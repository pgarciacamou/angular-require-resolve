angular.module('LazyLoad', [])
.factory('lazy', function (){
	var $injector = angular.injector(['ng'])
	,$rootScope = $injector.get('$rootScope')
	,$q = $injector.get('$q');
	
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
});