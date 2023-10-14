const mongoose = require("mongoose");
const surveySchema = new mongoose.Schema({
    id: {
        type: mongoose.SchemaTypes.String
    },
    title: {
        type: String
    },
    subTitle: {
        type: String
    },
    Identification: {
        type: Boolean
    },
    surveyColor: {
        type: String
    },
    companyName: {
        type: String
    },
    questions: [Object]

});
const Survey = mongoose.model("Survey", surveySchema);
module.exports = Survey;


// const diaryByUserSchema = new mongoose.Schema({
//     _id: {
//         type: mongoose.SchemaTypes.String
//     },
//     userId: {
//         type: String
//     },
//     diaryDays: [{
//         date: Date,
//         foods: [String]
//     }]
// });
// const DiaryByUser = mongoose.model("DiaryByUser", diaryByUserSchema);
// module.exports = DiaryByUser;