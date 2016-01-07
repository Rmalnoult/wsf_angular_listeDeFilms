angular.module('App', []).controller('AppController', function ($scope) {

	$scope.films = [];

	$scope.newFilm = function($event) {
		$event.preventDefault();

		var film = {
			title : $scope.title,
			synopsis : $scope.synopsis,
			genre : $scope.genre,
			url : $scope.url,
			actors : $scope.actors,
		}
		$scope.films.push(film);
		console.log($scope.films);

	};

});
