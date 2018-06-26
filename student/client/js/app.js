var myApp= angular.module("myItems", ['lbServices']);
myApp.controller("myItemsController", function($scope, $http, Item){
	$scope.items=Item.find();
	$scope.newItem = '';
	$scope.pushItem = function() {
		if($scope.newItem != ""){
			Item.create({name: $scope.newItem}).$promise.then(function(name) {
				$scope.items.push(name);
				$scope.newItem = '';
				})
			}		

		}
	$scope.deleteItem = function(index) {
		Item.deleteById({id: $scope.items[index].id}).$promise.then(function(){
			$scope.items.splice(index, 1);		
		})
	}
});
