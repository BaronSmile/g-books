export interface BooksState {
  books: {
    totalItems:number,
    items:[]
  }
  loading: boolean;
  error: null | string;
  booksPerPage: number
  page:number
}

export interface BooksData{
  id: string,
  volumeInfo:{
    title:string,
    categories:[],
    authors:[]
    imageLinks:{
      thumbnail:string
    }
    infoLink:string
  }
}

export interface BookCardProps{
  thumbnail:string,
  item:{}
}

export enum BooksActionTypes {
  FETCH_BOOKS = 'FETCH_BOOKS',
  FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS',
  FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR',
  BOOKS_PAGE = 'BOOKS_PAGE'
}

interface FetchBooksAction {
  type: BooksActionTypes.FETCH_BOOKS;
}

interface FetchBooksSuccessAction {
  type: BooksActionTypes.FETCH_BOOKS_SUCCESS;
  payload: {
    totalItems: 0,
    items:[]
  }
}

interface FetchBooksErrorAction {
  type: BooksActionTypes.FETCH_BOOKS_ERROR
  payload: string;
}

interface BooksPage{
  type:BooksActionTypes.BOOKS_PAGE;
  payload: number
}

export type BooksAction = FetchBooksAction | FetchBooksSuccessAction | FetchBooksErrorAction | BooksPage
