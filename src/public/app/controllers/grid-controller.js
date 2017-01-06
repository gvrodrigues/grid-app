var todo = angular.module('gridApp');

todo.controller('GridController', ['$scope', 'User', function($scope, User) {
	
	$scope.users = {};
	$scope.currentPage = 0;
	$scope.totalPages = 0;
	
	User.get(1).then(function(res){
		$scope.users = res.data.data;		
		$scope.currentPage = parseInt(res.data.page);
		$scope.totalPages = res.data.total_pages;

	}, function error(err){
		console.log(err);
	});

	$scope.listUsers = function(page){
		User.get(page).then(function(res){
			$scope.users = res.data.data;			
			$scope.currentPage = res.data.page;
			$scope.totalPages = res.data.total_pages;			
		}, function error(err){
			console.log(err);
		});		
	}
	
	$scope.prevPage = function(){
		if($scope.currentPage > 1) {
			$scope.currentPage--;
		}
		$scope.listUsers($scope.currentPage);		
	}

	$scope.nextPage = function(){
		if($scope.currentPage < $scope.totalPages) {
			$scope.currentPage++;
		}
		$scope.listUsers($scope.currentPage);
	}


}]);

todo.filter('capitalizeName', function() {
	return function(input) {
		return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
	}
});

todo.filter('capitalizeLastName', function() {
	return function(input) {
		return (!!input) ? input.charAt(0).toUpperCase() : '';
	}
});