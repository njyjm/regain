const Router = require('koa-router')
const router = new Router()
const loginCtrl = require('../control/login')
const listCtrl = require('../control/list')
const token = require('../token/token')

router.post('/login',loginCtrl.login)
router.post('/register',loginCtrl.register)
router.get('/noauthor-list',listCtrl.getList)

router.get('/error',listCtrl.getError)

router.get('/get-list',token.checkToken,listCtrl.getList)
router.post('/add-list',token.checkToken,listCtrl.addList)
router.post('/upload',token.checkToken,listCtrl.uploadFile)
router.post('/delete-list',token.checkToken,listCtrl.deleList)

module.exports = router