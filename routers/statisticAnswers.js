const express =require('express')
const router= express.Router()
const statisticAnswersController = require('../controllers/statisticAnswers');

router.post('/', statisticAnswersController.createSurveyAnswers)
router.get('/:userId', statisticAnswersController.getSurveysByUserCreated)
// router.delete('/:id', statisticAnswersController.removeUserContact)

module.exports = router
