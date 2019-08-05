var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    console.log("working in node");
    burger.all(function (result) {
        var data = {
            burger: result
        }
        res.render("index", data);
    })
});

router.get("/api/:id", function (req, res) {
    console.log("working in node");
    burger.update({
        devoured: true
    },
        {
            id: req.params.id

        }, function (result) {
            res.redirect("/")
        });
});

router.post("/api/burger", function (req, res) {
    burger.create(req.body.burger_name, function (db_data) {
        console.log(db_data);
        res.json(db_data);
    })
})

// router.put("/api/:id", function (req, res){
//     console.log("working in node");           
//     burger.update({
//                 devoured: true 
//                 },
//          {
//             id: req.params.id

//          },function(result){
//        res.redirect("/") 
//     });
// });









module.exports = router;