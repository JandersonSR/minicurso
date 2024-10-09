import to from 'await-to-js'
import colors from 'colors/safe'
import mongoose from 'mongoose'

const { DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_CUSTERNAME } = require('../config/_variables')

const connectionString = `mongodb+srv://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_CUSTERNAME}.mongodb.net/?retryWrites=true&w=majority`
// mongodb+srv://<db_username>:<db_password>@cluster-node-teste.m87tj.mongodb.net/?retryWrites=true&w=majority&appName=cluster-node-teste
const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}



const databaseText =
  String(DATABASE_NAME).toLowerCase().includes('production')
    ? colors.red(DATABASE_NAME)
    : colors.blue(DATABASE_NAME)

const connectToDatabase = async () => {
  const [error, connection] = await to(mongoose.connect(connectionString))
  if (error) console.warn(`[DATABASE] Failed to connect to the ${databaseText} database: ${error.message} (user: ${DATABASE_USERNAME})`)
  if (connection) console.info(`[DATABASE] Connected ${colors.green('successfully')} to the ${databaseText} database! (user: ${DATABASE_USERNAME})`)

  return connection
}

export default connectToDatabase