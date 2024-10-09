import mongoose from "mongoose"
import { BookSchema } from "./BookSchema"

const book = new mongoose.Schema(BookSchema)
export default mongoose.model('Book', book)
