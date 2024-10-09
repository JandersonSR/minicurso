const variables = {
  /* Environment */
  ENV: process.env.ENV,
  PORT: process.env.PORT,


  /* Database */
  DATABASE_NAME: process.env.DATABASE_NAME,
  DATABASE_USERNAME: process.env.DATABASE_USERNAME,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  DATABASE_CUSTERNAME: process.env.DATABASE_CUSTERNAME
}

module.exports = !process.env.PORT ? require('./_localVars') : variables