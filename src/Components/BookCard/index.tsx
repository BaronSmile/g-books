
import React from 'react';
import {Card, CardBody, CardImg, CardTitle} from "reactstrap";

import {BooksData} from "../../types/books";

const BookCard = (props: { books: [] }) => {

  const dataBooks = props.books.map((book: []) => {
    // @ts-ignore
    const {id, volumeInfo}: BooksData = book;
    const {title, categories, authors,infoLink} = volumeInfo;

    // @ts-ignore
    const tag = (categories !== undefined) ? categories[0] : '';

    const writerAuthors = authors?.map((author, index) =>
      <span className='fst-italic' key={index}>{author}</span>
    );

    let thumbnail = volumeInfo?.imageLinks?.thumbnail || '';

    return (
      <div className='col-lg-3 mb-3' key={id}>
        <Card style={{width: '240px'}} className='m-auto'>
          <a href={infoLink} style={{textDecoration:'none',color:'#111'}} target="_blank" rel="noreferrer">
          <CardImg
            top
            style={{width: '100%', height: '240px'}}
            src={thumbnail}
            alt={title}
          />
          <CardBody>
            <span style={{fontSize: '14px'}}>{tag}</span>
            <CardTitle className='card-title fw-bolder'>{title}</CardTitle>
            {writerAuthors}
          </CardBody>
          </a>
        </Card>
      </div>
    )
  });

  return (
    <>{dataBooks}</>
  );
};

export default BookCard;
