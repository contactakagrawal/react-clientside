import express from 'express'
import bodyParser from 'body-parser';
import compress  from 'compression'

import frontendMiddleware from './middlewares/frontend-middleware'
import jwtMiddleware from './middlewares/jwt-middleware'
import routes from './routes'

const app = express();

app.use(compress())
//app.use(jwtMiddleware())
app.use(bodyParser())
app.use(frontendMiddleware())
app.use(routes)

module.exports = app
