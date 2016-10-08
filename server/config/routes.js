var friendsController = require('../controllers/friends.js')

console.log("future routes loading");

module.exports = function(app){
	app.get("/friends", friendsController.index); // show all friends
	app.get("/friends/:id", friendsController.show); // show one friend
	app.post("/friends", friendsController.create); // create a new friend
	app.put("/friends/:id", friendsController.update); // update a friend info
	app.delete("/friends/:id", friendsController.delete); // delete a friend
}
// this adds route listeners to friends for 5 of 7 RESTful routes, excluding new and edit