const StatisticAnswers = require("../models/StatisticAnswers");
const express = require('express')

const createSurveyAnswers = async (req, res) => {
  let surveyAnswersDetails = req.body;
  console.log("surveyAnswersDetails", surveyAnswersDetails);
  const newSurveyAnswers = new StatisticAnswers(surveyAnswersDetails)
  try {
    await newSurveyAnswers.save();
    res.status(200);
    res.send({ data: newSurveyAnswers, message: "Create New Survey Answers", status: 200 });
  }
  catch (err) {
    console.log(err.message)
    return res.status(400).send(err.message)
  }

}


async function getSurveysByUserCreated(req, res) {
  const userId = req.params.userId
  try {
    let surveysAnswers = await StatisticAnswers.find({ userId: userId });
    res.status(200);
    res.send({ data: surveysAnswers, status: 200 });
  }
  catch (err) {
    console.log(err.message)
    return res.status(400).send(err.message)
  }
}


// function updateTask(req, res) {
//   let { newTask } = req.body;
//   newTask.deadline = new Date(`${newTask.deadline}Z`).toString();
//   newTask.noticeDue = new Date(`${newTask.noticeDue}Z`).toString();
//   task.updateOne({ _id: newTask.id }, newTask).then(function (task) {
//     res.send(task);
//   }).catch(function (ex) {
//     res.send(ex);
//   })
// }

module.exports = { createSurveyAnswers, getSurveysByUserCreated }