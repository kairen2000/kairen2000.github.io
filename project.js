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
    let doc = fs.readFileSync("./index.html", "utf8");
    res.send(doc);
});

// if page not found
app.use(function (req, res, next) {
    res.status(404).send("<html><head><title>Page not found!</title></head><body><p>Nothing here.</p></body></html>");
});

app.get("/izabelle-resume", function (req, res) {
    let resume = fs.readFile("./izabelle_resume.pdf");
    res.contentType("application/pdf");
    res.send(resume);
});

let port = process.env.PORT || 5000;

app.listen(port, function () {
    // console.log("Server started on port 8000");
});