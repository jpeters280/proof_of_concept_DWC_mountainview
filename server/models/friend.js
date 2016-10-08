console.log('friends model');
var mongoose = require('mongoose');
// build your friend schema and add it to the mongoose.models
var FriendSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: [true, "Require first name"],
		trim: true,
		minlength: 2
	},
	lastName: {
		type: String,
		required: [true, "Require last name"],
		trim: true,
		minlength: 2
	},
	birthday: Date
});

mongoose.model("Friend", FriendSchema); // Setter, connecting schema and model handle


/* What pre does prior to saving:
    Starting with an instance of our model:
      e.g.  var MyModel = mongoose.model('myModelName');
            var myModelInstance = new MyModel({name: "The Amazing "});
    When we try to save our model:
      e.g.  myModelInstance.save();
    Pre runs before saving.  In the example below: It would add "Jay to our current name ("The Amazing")" and "The Amazing Jay" would be stored in our DB.
*/

// validations
// FriendSchema.pre('save', function(done){
// 	this.firstName = do something to the first name and return it
//	done();
// });

