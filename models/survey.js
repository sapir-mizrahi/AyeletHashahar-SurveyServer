const mongoose = require("mongoose");
const surveySchema = new mongoose.Schema({
    id: {
        type: mongoose.SchemaTypes.String
    },
    userId:{
        type:String
    },
    title: {
        type: String
    },
    subTitle: {
        type: String
    },
    surveyType: {
        type: Boolean               
    },
    surveyGroup: {
        type: Array
    },
    // surveyColor: {
    //     type: String
    // },
    questions: [Object]
});
const Survey = mongoose.model("Survey", surveySchema);
module.exports = Survey;
