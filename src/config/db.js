import Mongoose from 'mongoose'
const mongoClient = async () => {
  try {
    //console.log('connecting mongodb ......')

    //const mongoUrl = "mongodb://localhost:27017/a_task_list"
    const mongoUrl = process.env.MONGO_CLIENT
    if (!mongoUrl) {
      console.log('please add mongodb variables in env variables MONGO_client')
    }
    const con = await Mongoose.connect(mongoUrl)
    if (con) {
      console.log('mongodb connected')
    }
  } catch (error) {
    console.log(error)
  }
}
export default mongoClient
