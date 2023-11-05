const express =require('express')
const router= express.Router()
const userController= require('../controllers/user')

router.post('/signin', userController.signIn)
router.post('/signup', userController.signUp)
// router.get('/getById/:userId', userController.getUserById)
// router.get('/getAll', userController.getAllUsers);
// router.delete('/:_id', userController.deleteUser);
// router.post('/', userController.createUser)
// router.post('/update', userController.updateUser)
// router.post('/sendMessage', userController.sendMessage)

module.exports = router

