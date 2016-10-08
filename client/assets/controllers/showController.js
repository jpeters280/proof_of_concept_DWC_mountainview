app.controller('showController', ['$scope','friendsFactory', '$location', '$routeParams', function($scope, friendsFactory, $location, routeParams) {

    $scope.show = function(){
        friendsFactory.getOneFriend(routeParams.id, function(data){
            $scope.friend = data;
        });
    };
    $scope.show();
/*
  OUR $scope.create function goes here <-- $scope because we need to access this method 
  with ng-submit or ng-click (from the form in the previous assignment).  
  Want to all of the friends when we get back?  We can re-run index.
*/
  
}]);