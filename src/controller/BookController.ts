import { Router, Request, Response } from 'express'
import { BookMongoDB } from '../models/Book/BookMongoDB'

const BookController = Router()

// GET ALL
BookController.get('/', async (req: Request, res: Response) => {
  const books = await BookMongoDB.find()

    res.send({ books })
})

// GET ONE
BookController.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  console.log({ id })
  // const book = await BookMongoDB.findById(id)
  const book = await BookMongoDB.findOne({ id })

    res.send({ book })
})

BookController.post('/', async (req: Request, res: Response) => {
  const { title, author } = req.body
  const year = req.body.year

  const newBook = new BookMongoDB({ title, author, year })
    await newBook.save()

    res.status(201).send(newBook)
})

export default BookController