import bcrypt from 'bcrypt'

const saltround = 5

export const hashPassword = (plainPass) => {
  return bcrypt.hashSync(plainPass, saltround)
}
