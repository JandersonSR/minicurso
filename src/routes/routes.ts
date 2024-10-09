import cors from 'cors'
import express from 'express'

import BookController from '../controller/BookController'

const app = express.Router()

// Criamos um roteador para rotas sem autenticação de usuário, ou seja, unauth
const unauthRouter = express.Router()

// Criamos um roteador para rotas com autenticação de usuário, ou seja, auth
const authRouter = express.Router()


// Falamos para o express que caso a rota do usuário comece com unauth iremos utilizar o roteador unauthRouter
app.use('/unauth', cors({}), unauthRouter)

// Falamos para o express que caso a rota do usuário comece com auth iremos utilizar o roteador authRouter
app.use('/auth', cors({}), authRouter)

/**
 * Note que nas rotas acima nos passamos o Cors como Middleware,
 *
 * "Middleware" => alguma função que fica no meio e irá fazer algo para a gente
 *
 * o cors é necessário para que você possa definir quem pode acessar a sua aplicação =>
 * por exemplo poderia colocar que queremos apenas o site "google.com" (vulgo origin: "google.com")
 * possa consumir nossas rotas
 *
 * */

/**
 *  Aqui falamos que todas as rotas unauth que tiverem books como segundo parametro da rota
 * irá utilizar as funções/ métodos encontrados no nosso arquivo BookController
 *
 * rota: /unauth/books
 * a url inteira para acessar esta rota ficaria: http://localhost:3000/unauth/books
 * (A porta será a porta que você definiu como porta da sua aplicação)
 */
unauthRouter.use('/books', BookController)

export default app
