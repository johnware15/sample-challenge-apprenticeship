import signUp from 'src/actions/signUp.js'
import db from 'src/db/index.js'

const signUpRoute = db.post('/sign-up', (req, res) => {
  const newUser = req.body
  signUp(req.body.name, req.body.email, req.body.password)
    .then((newUser) => {
      if (newUser !== null) {
        res.render('/')
      } else {
        console.log('Fill everything out')
        res.render('/sign-up')
      }
    })
    .catch(error)
})

module.exports = signUpRoute
