import express from 'express'
const app = express()
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

const PORT = process.env.PORT || 8000

//middleware
app.use(helmet())
app.use(cors())
app.use(morgan())

app.use('/', (req, res) => {
  res.send('you have reach the end of the router list')
})

app.listen(PORT, (error) => {
  if (error) {
    console.log(error)
  }
  console.log(`server is running at http://localhost:${PORT}`)
})
