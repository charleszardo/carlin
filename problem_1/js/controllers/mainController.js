app.controller('mainController', ['$scope',
	function($scope) {
	  $scope.submitForm = function(isValid) {
			$scope.submitted = true;
			
	    if (isValid) {
	      alert('Form submit successful!');
	    } else {
	    	alert('You\'re missing something...')
	    }
	  };
		
		$scope.namePattern = (function() {
		    var regexp = /^([^0-9]*)$/;
		    return {
		        test: function(value) {
		            return regexp.test(value);
		        }
		    };
		})();
		
		$scope.phonePattern = (function() {
		    var regexp = /^\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})$/;
		    return {
		        test: function(value) {
		            return regexp.test(value);
		        }
		    };
		})();
		
		$scope.zipPattern = (function() {
		    var regexp = /^(\d{5}-\d{4}|\d{5})$/;
		    return {
		        test: function(value) {
		            return regexp.test(value);
		        }
		    };
		})();
		
		
		$scope.states = [
			{stateValue: "AL", stateName: "Alabama"},
			{stateValue: "AK", stateName: "Alaska"},
			{stateValue: "AZ", stateName: "Arizona"},
			{stateValue: "AR", stateName: "Arkansas"},
			{stateValue: "CA", stateName: "California"},
			{stateValue: "CO", stateName: "Colorado"},
			{stateValue: "CT", stateName: "Connecticut"},
			{stateValue: "DE", stateName: "Delaware"},
			{stateValue: "FL", stateName: "Florida"},
			{stateValue: "GA", stateName: "Georgia"},
			{stateValue: "HI", stateName: "Hawaii"},
			{stateValue: "ID", stateName: "Idaho"},
			{stateValue: "IL", stateName: "Illinois"},
			{stateValue: "IN", stateName: "Indiana"},
			{stateValue: "IA", stateName: "Iowa"},
			{stateValue: "KS", stateName: "Kansas"},
			{stateValue: "KY", stateName: "Kentucky"},
			{stateValue: "LA", stateName: "Louisiana"},
			{stateValue: "ME", stateName: "Maine"},
			{stateValue: "MD", stateName: "Maryland"},
			{stateValue: "MA", stateName: "Massachusetts"},
			{stateValue: "MI", stateName: "Michigan"},
			{stateValue: "MN", stateName: "Minnesota"},
			{stateValue: "MI", stateName: "Mississippi"},
			{stateValue: "MO", stateName: "Missouri"},
			{stateValue: "MT", stateName: "Montana"},
			{stateValue: "NE", stateName: "Nebraska"},
			{stateValue: "NV", stateName: "Nevada"},
			{stateValue: "NH", stateName: "New Hampshire"},
			{stateValue: "NJ", stateName: "New Jersey"},
			{stateValue: "NM", stateName: "New Mexico"},
			{stateValue: "NY", stateName: "New York"},
			{stateValue: "NC", stateName: "North Carolina"},
			{stateValue: "ND", stateName: "North Dakota"},
			{stateValue: "OH", stateName: "Ohio"},
			{stateValue: "OK", stateName: "Oklahoma"},
			{stateValue: "OR", stateName: "Oregon"},
			{stateValue: "PA", stateName: "Pennsylvania"},
			{stateValue: "RI", stateName: "Rhode Island"},
			{stateValue: "SC", stateName: "South Carolina"},
			{stateValue: "SD", stateName: "South Dakoka"},
			{stateValue: "TN", stateName: "Tennessee"},
			{stateValue: "TX", stateName: "Texas"},
			{stateValue: "UT", stateName: "Utah"},
			{stateValue: "VT", stateName: "Vermont"},
			{stateValue: "VA", stateName: "Virginia"},
			{stateValue: "WA", stateName: "Washington"},
			{stateValue: "WV", stateName: "West Virginia"},
			{stateValue: "WI", stateName: "Wisconsin"},
			{stateValue: "WY", stateName: "Wyoming"}
		]
}]);