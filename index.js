const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(__dirname + '/public'));
let userdb = []

app.listen(8000, () => {
    console.log("server is running on port 8000")
})
app.get("/", (req, res) => {
    res.redirect("/public")
})
app.post("/register", (req, res) => {
    userdb.push(req.body)
    res.send("user registered successfully")

})
app.post("/login", (req, res) => {

    let email = req.body.email
    let password = req.body.password
    let a = userdb.find((d) => {
        return ((d.email == email) && (d.password == password))
    })

    if (a) {
        res.send("logged in successfully")
    } else {
        res.send("wrong information")
    }

})