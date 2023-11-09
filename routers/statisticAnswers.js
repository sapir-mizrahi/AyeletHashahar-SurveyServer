const express =require('express')
const router= express.Router()
const statisticAnswersController = require('../controllers/statisticAnswers');

router.post('/', statisticAnswersController.createSurveyAnswers)
router.get('/:userId', statisticAnswersController.getSurveysByUserCreated)

module.exports = router
