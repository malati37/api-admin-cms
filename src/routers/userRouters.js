import express from 'express'
const Router = express.Router()

import { createUser } from '../models/user/User.model.js'
import { newUserFormValidation } from '../middlewares/validation.middleware.js'
import { hashPassword } from '../helpers/bcrypt.helper.js'

Router.all('/', newUserFormValidation, (req, res, next) => {
  console.log('got hit user router')
  next()
})

Router.post('/', async (req, res) => {
  try {
    //const t1 = Date.now()
    const hashPass = hashPassword(req.body.password)
    //const t2 = Date.now()
    //console.log(hashPass, 'time taken to hash the pass = ' + t2 - t1 + 'ms')

    req.body.password = hashPass
    const result = await createUser(req.body)
    if (result?._id) {
      return res.json({
        status: 'sucess',
        message:
          'user has been created, we have send an email verification to your email.please check the email and follow the instruction to verify',
        result,
      })
    }
    res.json({
      status: 'error',
      message: 'Unable to create new user, please try again later',
    })
  } catch (error) {
    console.log(error.message)

    let msg =
      'error ,unable to create new user, please contact user registration.'

    if (error.message.includes('E11000 duplicate key error collection')) {
      msg = 'the user already exits associated to your email.'
    }
    res.json({
      status: 'error',
      message: msg,
    })
  }
})
// Router.get('/', (req, res) => {
//   res.json({
//     status: 'ok',
//     message: 'get response',
//   })
// })
// Router.patch()
// Router.delete()

export default Router
