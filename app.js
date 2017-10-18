angular.module('ToDo',[])
   .controller('MainCtrl', [
   '$scope', function($scope) {
	$scope.events = [];
	$scope.addEvent = function() {
	  $scope.events.push({toDo: $scope.formEvent, day: $scope.formDay});
	  $scope.formEvent = '';
	  $scope.formDay = '';
	  console.log($scope.events);
        }
    }
    ]);
