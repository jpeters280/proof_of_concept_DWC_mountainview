app.controller('editController', ['$scope','friendsFactory', '$location', '$routeParams', function($scope, friendsFactory, $location, routeParams) {

    $scope.update = function(){
        friendsFactory.updateFriend(routeParams.id, $scope.friend, function(data){
            $scope.friends = data;
        });
    };
    friendsFactory.getOneFriend(routeParams.id, function(data){
    	console.log(data.birthday);
        data.birthday = new Date(data.birthday);
		$scope.friend = data;
	});
/*
  OUR $scope.create function goes here <-- $scope because we need to access this method 
  with ng-submit or ng-click (from the form in the previous assignment).  
  Want to all of the friends when we get back?  We can re-run index.
*/
  
}]);