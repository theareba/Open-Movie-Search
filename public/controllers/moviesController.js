var app = angular.module('OMDbSearch', []);

app.controller('MoviesCtrl', ['$scope', '$http',
function($scope, $http){

	$scope.movie = '[]';

	$scope.submit = function() {
        $http({method : 'GET', url : 'http://www.omdbapi.com/?t=' + $scope.movieSearch})
	    .success(function(data, status) {
	        $scope.movie = data;
	        $scope.image = data["Poster"].replace(/\"/g, "");
	    })
	    .error(function(data, status) {
	        alert("Error");
	    });
    
    };
    
}]);