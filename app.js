angular.module('ToDo',[])
   .controller('MainCtrl', [
   '$scope', function($scope) {
	$scope.events = [];
	$scope.addEvent = function() {
	  $scope.events.push({toDo: $scope.formEvent, day: $scope.formDay, checked: false, 
				priority: $scope.formPriority});
	  $scope.formEvent = '';
	  $scope.formDay = '';
	  $scope.formPriority = '';
	  console.log($scope.events);
        };
	$scope.doneEvent = function(event) {
	  event.checked = true;
	  event.priority = 0;
	};
	$scope.incrementPriority = function(event) {
	  event.priority += 1;
	};
    }
    ]);
