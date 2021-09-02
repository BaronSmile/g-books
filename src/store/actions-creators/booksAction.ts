import {BooksAction, BooksActionTypes} from "../../types/books";
import type {Dispatch} from "redux";
import axios from "axios";

export const fetchBooks = (query: string, maxResult: number = 40, startIndex: number = 0) => {

  return async (dispatch: Dispatch<BooksAction>) => {
    try {
      dispatch({type: BooksActionTypes.FETCH_BOOKS})

      const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResult}&startIndex=${startIndex}`)
      dispatch({type: BooksActionTypes.FETCH_BOOKS_SUCCESS, payload: res.data})


    } catch (err) {
      dispatch({
        type: BooksActionTypes.FETCH_BOOKS_ERROR,
        payload: 'An error occurred while loading books'
      })
    }
  }
}

export const fetchBook = (id?: string) => {
  return async (dispatch: Dispatch<BooksAction>) => {
    try {
      const res = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
      dispatch({type: BooksActionTypes.FETCH_BOOK, payload: res.data})
    } catch (e) {
      console.log(e);
    }
  }
}
