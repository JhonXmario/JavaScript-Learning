const {Router} = require('express')
const router = Router()

router.get('/username', (req, res) => {
    res.send('Username page')
})

router.get('/profile', (req, res) => {
    res.send('This is the profile page')
})

module.exports = router 