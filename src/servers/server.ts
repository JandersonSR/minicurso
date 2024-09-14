import express from 'express'
import connectToDatabase from '../database/minicursoDataBase'
import appRouter from '../routes/routes'
import { PORT } from '../config/_variables'

connectToDatabase()

const app = express()

// Middleware para interpretar JSON
app.use(express.json())


app.use(appRouter)

// Servidor escutando na porta 3000
app.listen(PORT, () => {
  console.log('Servidor rodando na porta 3000')
})
