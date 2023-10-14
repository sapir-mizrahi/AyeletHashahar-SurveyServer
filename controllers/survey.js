const express = require('express')

const Survey = require("../models/survey");

const createSurvey = async (req, res) => {
  let surveyDetails = req.body;
  console.log("create survey",surveyDetails);
  const newSurvey = new Survey(surveyDetails)
  try {
    await newSurvey.save();
    res.status(200);
    res.send({ data: newSurvey, message: "Create New Survey" });
  }
  
  catch (err) {
    console.log(err.message)
    return res.status(400).send(err.message)
  }

}


async function getAllSurveys(req, res) {
  try {
    let allSurveys = await Survey.find();
    res.status(200);
    res.send({ data: allSurveys, message: "all surveys" });
  }
  catch (err) {
    console.log(err.message)
    return res.status(400).send(err.message)
  }
}


function updateTask(req, res) {
  let { newTask } = req.body;
  newTask.deadline = new Date(`${newTask.deadline}Z`).toString();
  newTask.noticeDue = new Date(`${newTask.noticeDue}Z`).toString();
  task.updateOne({ _id: newTask.id }, newTask).then(function (task) {//מונגו מחזיר לנוד את הטאסק החדש
    res.send(task);
  }).catch(function (ex) {
    res.send(ex);
  })
}





module.exports = { createSurvey, getAllSurveys }