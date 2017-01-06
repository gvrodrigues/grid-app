angular.module('userApi', [])

.factory('User', function($http){
	return {
		get: function(param) {
			return $http.get('https://reqres.in/api/users?page=' + param);
		}
	}
});