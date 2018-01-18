import express from 'express'
import signUp from '../actions'

const router = express.Router()

// const signUpRoute = router.post('/sign-up', (req, res) => {
//   const newUser = req.body
//   signUp(req.body.name, req.body.email, req.body.password)
//     .then(() => {
//       if (newUser !== null) {
//         res.render('/')
//       } else {
//         // console.log('Fill everything out')
//         res.render('/sign-up')
//       }
//     })
//     .catch(error => error)
// })
//
// module.exports = signUpRoute
router.get('/', (req, res, next) => {
  signUp()
    .then(newUser => res.render('/sign-up', {newUser}))
    .catch(next)
})

router.post('/sign-up', (req, res, next) => {
  const newUser = req.body
  signUp(req.body.name, req.body.email, req.body.password)
    .then(() => {
      if (newUser !== null) {
        res.render('/')
      } else {
        res.render('/sign-up')
      }
    })
    .catch(next)
})

export default router
