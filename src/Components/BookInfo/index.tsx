import React, {useEffect} from 'react';
import {Button} from "reactstrap";
import {useActions} from "../../hooks-actions/useActions";
import {useTypedSelector} from "../../hooks-actions/usetypedSelector";

const BookInfo = (props: { history: { goBack: () => any; }, match: any }) => {
  const id = props.match.params.id
  const {fetchBook} = useActions()
  const {book} = useTypedSelector(state => state.books)

  const {title, imageLinks, authors, description, categories} = book.volumeInfo


  const categoriesItem = categories ? categories.map((category?: string, index?: number) => <li
    key={index}>{category}</li>) : 'no category';

  const authorsItem = authors ? authors.map((author?: string, index?: number) => <li
    key={index}>{author}</li>) : 'no author'
  useEffect(() => {
    fetchBook(id)
  }, [])

  return (
    <div className='container m-4'>
      <Button onClick={() => props.history.goBack()}>Back</Button>
      <h1>{title}</h1>
      <img src={imageLinks?.thumbnail} alt="picture book"/>
      <p><b>Category:</b> {categoriesItem}</p>
      <p><b>Authors:</b> {authorsItem}</p>
      <h4>Description:</h4>
      <div dangerouslySetInnerHTML={{__html: description}}/>
    </div>
  );
};

export default BookInfo;
