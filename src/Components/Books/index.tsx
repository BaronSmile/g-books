import React from 'react';
import ReactPaginate from 'react-paginate';
import './BookCard.css';
import BookCard from '../BookCard';

const Books = (props: { books: [], paginate: any, index: number, totalItems: number, maxResult: number }) => {
  const {totalItems, paginate, maxResult} = props

  let total = Math.floor(totalItems / maxResult) || 0
  const arrTotal: any = []
  arrTotal && (function clcTotal() {
    for (let i = 1; i <= total; i++) {
      arrTotal.push(i)
    }
  }());

  return (
    <div className='container my-5 text-center'>
      <h3 className='mb-5'>Total Items: {props.totalItems} results</h3>
      <div className='w-100 h-100 row'>
        <BookCard books={props.books}/>
      </div>
      <ReactPaginate
        pageCount={total}
        containerClassName='pagination'
        initialPage={0}
        onPageChange={i=>paginate(i)}
        breakClassName='page-item'
        pageClassName='page-link'
        marginPagesDisplayed={3}
        pageRangeDisplayed={3}
        nextLinkClassName='d-none'
        previousClassName='d-none'
      />
    </div>
  )
};

export default Books;

