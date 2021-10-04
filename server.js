import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
const app = express()
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

// connect the mongodb
import mongoClient from './src/config/db.js'
mongoClient()

const PORT = process.env.PORT || 8000

//middleware
app.use(helmet())
app.use(cors())
app.use(morgan('tiny'))

app.use(express.urlencoded())
app.use(express.json())

//console.log(process.env)

//load routers
import userRouter from './src/routers/userRouters.js'

//user routers
app.use('/api/v1/user', userRouter)

app.use('/', (req, res) => {
  res.send('you have reach the end of the router list')
})

app.listen(PORT, (error) => {
  if (error) {
    console.log(error)
  }
  console.log(`server is running at http://localhost:${PORT}`)
})
