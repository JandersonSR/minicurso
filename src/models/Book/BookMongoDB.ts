import mongoose from "mongoose"
import { BookSchema } from "./BookSchema"

const book = new mongoose.Schema(BookSchema)
export const BookMongoDB = mongoose.model('Book', book)
