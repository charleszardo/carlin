app.controller('mainController', ['$scope',
	function($scope) {
		$scope.firstName = "";
		
		$scope.reset = function(form) {
		    if (form) {
		      form.$setPristine();
		      form.$setUntouched();
		    }
		    $scope.user = angular.copy($scope.master);
		  };

		  $scope.reset();
}]);