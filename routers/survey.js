const express = require('express')
const router = express.Router()
const surveyController = require('../controllers/survey')

router.post('/', surveyController.createSurvey)
router.get('/', surveyController.getAllSurveys)

module.exports = router

