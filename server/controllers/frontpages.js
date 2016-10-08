console.log("entering frontpages controller");
var mongoose = require("mongoose");
var FrontPage = mongoose.model("FrontPage"); // getter
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the frontpagesControllers below

module.exports = {
    index: function(req, res) {
        console.log("index method in backend");
        FrontPage.find({}, function(err, frontpages) {
            if (err) {
                res.json({ error: err });
            } else {
                res.json(frontpages);
            }
        });
    },
    create: function(req, res) {
        console.log("create method in backend");
        console.log(req.body)
        var newFrontPage = new FrontPage(
        	{ 	firstName: req.body.firstName,
        		lastName: req.body.lastName,
        		birthday: req.body.birthday });
        newFrontPage.save(function(err, data) {
            if (err) {
                res.json({ error: err });
            } else {
                res.json({ data: data }); // change later to simple success message
            }
        });
    },
    update: function(req, res) {
        console.log("update method in backend");
        FrontPage.findOne({ name: "front" }, function(err, frontpage) {
            if (err) {
                res.json({ error: err }); // could not locate the entry
            }
            frontpage.top = req.body.firstName;
            frontpage.lastName = req.body.lastName;
            frontpage.birthday = req.body.birthday;
            frontpage.save(function(err) {
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
        FrontPage.remove({ _id: req.params.id }, function(err, frontpage) {
            if (err) {
                res.json({ error: err });
            } else {
                res.json({ success: "succesfully deleted frontpage" })
            }
        });
    },
    show: function(req, res) {
        console.log("show method in backend");
        console.log(req.params.id);
        FrontPage.findOne({ _id: req.params.id }, function(err, frontpage) {
            if (err) {
                res.json({ error: err }); // could not find frontpage
            } else {
                res.json(frontpage);
            }
        })
    }
}