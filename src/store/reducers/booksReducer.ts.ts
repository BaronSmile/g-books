import {BooksAction, BooksActionTypes, BooksState} from "../../types/books";

const defaultState: BooksState = {
  books: {
    totalItems: 0,
    items: []
  },
  book: {
    volumeInfo:{}
  },
  loading: false,
  error: null,
  booksPerPage: 16,
  page: 1,
}

export const booksReducer = (state = defaultState, action: BooksAction): BooksState => {
  switch (action.type) {
    case BooksActionTypes.FETCH_BOOKS:
      return {...state, loading: true}
    case BooksActionTypes.FETCH_BOOKS_SUCCESS:
      return {...state, books: action.payload, loading: false}
    case BooksActionTypes.FETCH_BOOKS_ERROR:
      return {...state, error: action.payload,  loading: false}
    case BooksActionTypes.BOOKS_PAGE:
      return {...state, page: action.payload}
    case BooksActionTypes.FETCH_BOOK:
      return {...state, book: action.payload}
    default:
      return state
  }
}

