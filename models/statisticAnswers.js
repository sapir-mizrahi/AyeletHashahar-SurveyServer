const mongoose = require("mongoose");
const statisticAnswersSchema = new mongoose.Schema({
    id: {
        type: mongoose.SchemaTypes.String
    },
    userId:{
        type:String
    },
    surveyId: {
        type: String
    },
    title: {
        type: String
    },
    subTitle: {
        type: String
    },
    answers: {
        type: Array
    }
});
const StatisticAnswers = mongoose.model("StatisticAnswers", statisticAnswersSchema);
module.exports = StatisticAnswers;
