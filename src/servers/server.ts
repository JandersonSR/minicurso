import express from 'express'
import connectToDatabase from '../database/minicursoDataBase'
import appRouter from '../routes/routes'
import { PORT } from '../config/globals'

/**
 * Inicializamos o servidor com o express
 */
const app = express()

/**
 * Utilizamos o Middleware para interpretar JSON
*/
app.use(express.json())


/**
 * Realizamos a conexão com o Banco de dados
*/
connectToDatabase()

/**
 * Aqui já iremos utilizar uma arquitetura um pouco mais corporativa deixando
 * as rotas num arquivo expecifico para os controllers
 *
 * Controller => é um controlador, como se fosse um meio de campo, ele mantém a rota que o
 * client irá consumir, recebe os parametros da requisição e encaminha esses parametros para
 * um Service "Classe ou Função de serviço", Bussiness "Classe ou Função de regras de negócios",
 * Ele pode conter validadores de entrada do usuário e irá retornar uma resposta conforme a
 * Feature "Funcionalidade" que o cliente acabou de consumir
 *
 */
app.use(appRouter)

// Aqui Dizemos ao Servidor para rodar "escutando" a porta definida pela variável PORT
app.listen(PORT, () => {
  console.log('Servidor rodando na porta 3000')
})
