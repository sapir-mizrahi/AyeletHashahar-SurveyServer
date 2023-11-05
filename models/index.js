
const mongoose = require("mongoose");

let url = "mongodb+srv://AyeletSurvey:8p0V3bATrkUxorRD@ayelet-survey.ugyosfr.mongodb.net/";
// let url = "mongodb+srv://sapir:5RWupXv3OYajEf4J@cluster0.1ghrpjo.mongodb.net/";
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = url;
db.diary = require("./survey");
db.user = require("./user");
module.exports = db;