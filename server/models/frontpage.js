console.log('frontpages model');
var mongoose = require('mongoose');
// build your frontpage schema and add it to the mongoose.models
var FrontPageSchema = new mongoose.Schema({
	top: {
		type: String,
		required: [true, "Require top"],
		trim: true,
		minlength: 2
	},
	middle: {
		type: String,
		required: [true, "Require middle"],
		trim: true,
		minlength: 2
	},
	bottom: {
		type: String,
		required: [true, "Require bottom"],
		trim: true,
		minlength: 2
	},
	picture: {
		type: String,
		required: [true, "Require picture"],
		trim: true,
		minlength: 2
	},
	link: {
		type: String,
		required: [true, "Require link"],
		trim: true,
		minlength: 2
	}

});

mongoose.model("FrontPage", FrontPageSchema);