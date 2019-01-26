let express = require("express");
let express_handles_bars = require("express-handlebars");

let app = express();

let PORT = 3011;

app.engine("handlebars", express_handles_bars({ defaultLayout : "main"}));
app.set("view engine", "handlebars");

let ice_cream = [
    {
        name : "phish food", 
        price: 8,
    }, 
    {
        name : "rocky road",
        price : 7
    },
    {
        name : "moose tracks",
        price : 6
    },
    {
        name : "mint pistachio",
        price : 8
    }
];

app.get("/", function(req, res){
    res.render("index");
});

app.get("/all", function(req, res){
    res.render("all", {
        flavors : ice_cream
    });
});

app.get("/all/:name", function(req, res){
    for(let i = 0; i < ice_cream.length; i++){
        if(ice_cream[i].name === req.params.name){
            return res.render("flavor", ice_cream[i]);
        }
    }
});

app.listen(PORT);