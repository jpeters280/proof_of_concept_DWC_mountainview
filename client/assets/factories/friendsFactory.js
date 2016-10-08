console.log("Friends Factory");
app.factory('friendsFactory', ['$http', function($http){
    var factory = {};
    var friends = [];
    var friend = [];

    factory.getAllFriends = function(callback){
        $http.get("/friends").then(function(data){
            console.log(data);
            friends = data.data;
            callback(friends);
        });
    }

    factory.getOneFriend = function(id, callback){
        console.log(id);
        $http.get("/friends/"+id).then(function(data){
            console.log(data);
            friends = data.data;
            callback(friends);
        });
    }

    factory.createFriend = function(newFriend, callback){
        $http.post("/friends", newFriend).then(function(returned_data){
            console.log(returned_data);
            if(typeof(callback) == 'function'){
                callback(returned_data.data);
            }
        });
    };
    factory.updateFriend = function(id, updatedFriend, callback){
        console.log(id);
        $http.put("/friends/"+id, updatedFriend).then(function(returned_data){
            console.log(returned_data);
            if(typeof(callback) == 'function'){
                callback(returned_data.data);
            }
        });
    }
    factory.deleteFriend = function(id, callback){
        console.log(id);
        $http.delete("/friends/"+id).then(function(){
            if(typeof(callback) == 'function'){
                callback();
            }
        });
    }



    return factory;
}]);