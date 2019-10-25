const express = require("express");
const app = express();

app.set("view engine", "ejs");


app.get("/", function(req, res){
  res.render("main");
});
  
//Tell app to listen (superimportant)
app.listen(process.env.PORT || 4000, process.env.IP, function(){
	console.log("yelpQuotes has started on PORT 4000!")
});
//Tell app to listen (superimportant)
// app.listen(process.env.PORT || 4000, process.env.IP, function(){
// 	console.log("EXERCISE has started on PORT 4000!");
// });
// var server = app.listen(4000, function () {
//    var host = server.address().address
//    var port = server.address().port
//    console.log("Example app listening at http://%s:%s", host, port)
// })
