angular.module('userApi', [])

.factory('User', function($http){
	return {
		get: function(page) {
			return $http.get('/api/users/' + page);
		}
	}
});