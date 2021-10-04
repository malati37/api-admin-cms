import joi from 'joi'

export const newUserFormValidation = (req, res, next) => {
  console.log(req.body)

  const schema = joi.object({
    fname: joi.string().alphanum().max(30).required(),
    lname: joi.string().alphanum().max(30).required(),
    dob: joi.date(),
    email: joi.string().email({ minDomainSegments: 2 }),
    password: joi.string().min(6).required(),
    phone: joi.string().max(30),
    address: joi.string().max(50),
    gender: joi.string().max(10),
  })

  const result = schema.validate(req.body)
  console.log(result)
  if (result.error) {
    return res.json({
      string: 'error',
      message: result.error.message,
    })
  }
  next()
}
