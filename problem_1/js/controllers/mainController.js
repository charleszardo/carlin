app.controller('mainController', ['$scope',
	function($scope) {
		$scope.firstName = "";
		
	  $scope.submitForm = function(isValid) {

	    if (isValid) {
	      alert('our form is amazing');
	    } else {
	    	alert('you\'re missing something...')
	    }

	  };
		
		$scope.reset = function(form) {
		    if (form) {
		      form.$setPristine();
		      form.$setUntouched();
		    }
		    $scope.user = angular.copy($scope.master);
		  };

		  $scope.reset();
}]);