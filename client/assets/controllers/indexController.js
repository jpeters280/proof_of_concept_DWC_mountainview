app.controller('indexController', ['$scope','friendsFactory', '$location', function($scope, friendsFactory, $location) {
/*
  THIS INDEX METHOD ACCESSES THE FRIENDS FACTORY AND RUNS THE FRIENDS INDEX.
  WE MIGHT RE USE INDEX A FEW TIMES, SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
*/
    $scope.index = function(){
        friendsFactory.getAllFriends(function(returnedData){
            $scope.friends = returnedData;
            console.log($scope.friends);
        });
    };
    $scope.delete = function(friend_id){
        friendsFactory.deleteFriend(friend_id, function(){
          console.log("friend deleted");
        });
        $scope.index();
    };
    $scope.index();
/*
  OUR $scope.create function goes here <-- $scope because we need to access this method 
  with ng-submit or ng-click (from the form in the previous assignment).  
  Want to all of the friends when we get back?  We can re-run index.
*/
  
}]);