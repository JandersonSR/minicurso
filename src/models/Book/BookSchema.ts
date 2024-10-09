
export const BookSchema = {
  title: String,
  author: String,
  year: Number,
  canRent: {
    type: Boolean,
    default: true
  }
}
