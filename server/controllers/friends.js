console.log("entering friends controller");
var mongoose = require("mongoose");
var Friend = mongoose.model("Friend"); // getter
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below

module.exports = {
    index: function(req, res) {
        console.log("index method in backend");
        Friend.find({}, function(err, friends) {
            if (err) {
                res.json({ error: err });
            } else {
                res.json(friends);
            }
        });
    },
    create: function(req, res) {
        console.log("create method in backend");
        console.log(req.body)
        var newFriend = new Friend(
        	{ 	firstName: req.body.firstName,
        		lastName: req.body.lastName,
        		birthday: req.body.birthday });
        newFriend.save(function(err, data) {
            if (err) {
                res.json({ error: err });
            } else {
                res.json({ data: data }); // change later to simple success message
            }
        });
    },
    update: function(req, res) {
        console.log("update method in backend");
        Friend.findOne({ _id: req.params.id }, function(err, friend) {
            if (err) {
                res.json({ error: err }); // could not locate the entry
            }
            friend.firstName = req.body.firstName;
            friend.lastName = req.body.lastName;
            friend.birthday = req.body.birthday;
            friend.save(function(err) {
                if (err) {
                    res.json({ error: err }); // could not save into database
                } else {
                    res.json({ success: "update success" });
                }
            })

        });
    },
    delete: function(req, res) {
        console.log("delete method in backend");
        Friend.remove({ _id: req.params.id }, function(err, friend) {
            if (err) {
                res.json({ error: err });
            } else {
                res.json({ success: "succesfully deleted friend" })
            }
        });
    },
    show: function(req, res) {
        console.log("show method in backend");
        console.log(req.params.id);
        Friend.findOne({ _id: req.params.id }, function(err, friend) {
            if (err) {
                res.json({ error: err }); // could not find friend
            } else {
                res.json(friend);
            }
        })
    }
}


// function FriendsController(){
//   this.index = function(req,res){
//   	console.log("index method backend");

//     //your code here
//     res.json({placeholder:'index'});
//   };
//   this.create = function(req,res){
//   	console.log("create method backend");
//     //your code here
//     res.json({placeholder:'create'});
//   };
//   this.update = function(req,res){
//   	console.log("update method backend");
//     //your code here
//     res.json({placeholder:'update'});
//   };
//   this.delete = function(req,res){
//   	console.log("delete method backend");
//     //your code here
//     res.json({placeholder:'delete'});
//   };
//   this.show = function(req,res){
//   	console.log("show method backend");
//     //your code here
//     res.json({placeholder:'show'});
//   };
// }
// module.exports = new FriendsController(); // this exports an object
