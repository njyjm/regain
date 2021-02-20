const crypto = require('crypto')

const secret = require('../config/token-secret')

const md5 = text=>{
    return crypto.createHash('md5').update(secret).update(text).digest('hex')
}


module.exports = md5