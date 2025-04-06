const express = require("express");
const path = require("path");
const morgan = require("morgan"); 
require('ejs')

const app = express();
const port = 3000;

const homerouter = require(path.join(__dirname, "../routes/home.js"));
const userrouter = require(path.join(__dirname, "../routes/users.js"));

app.set("appName", "Express learning"); 
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../views'))

app.use(express.json()); 
app.use(morgan("dev"));

app.use(homerouter);
app.use(userrouter);

app.use("/static", express.static(path.join(__dirname, "../static"))); 
app.listen(port, () => console.log(`Server ${app.get("appName")} on port ${port}!`));