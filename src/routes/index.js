import express from 'express'

import albums from './albums'
import signUpRoute from './users'
import signInRoute from './authentication'

const routes = express.Router()

routes.get('/', (req, res) => res.redirect('/albums'))
routes.use('/users', signUpRoute)
routes.use('/authentication', signInRoute)
routes.use('/albums', albums)

export default routes
