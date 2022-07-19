const express = require("express");
const app = express();
app.use(express.json());
const fs = require("fs");
const { allowedNodeEnvironmentFlags } = require("process");


app.use("/style.css", express.static("./public/css/style.css"));
app.use("/img", express.static("./public/img"));
app.use("/js", express.static("./public/js"));
app.use("/data", express.static("./app/data"))


app.get("/", function (req, res) {
    console.log(process.env);
    let doc = fs.readFileSync("./app/html/index.html", "utf8");
    res.send(doc);
});

// if page not found
app.use(function (req, res, next) {
    res.status(404).send("<html><head><title>Page not found!</title></head><body><p>Nothing here.</p></body></html>");
});


app.listen(8000, function () {
    console.log("Server started on port 8000");
});