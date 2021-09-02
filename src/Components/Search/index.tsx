import React, {useEffect, useState} from 'react';
import InputSearch from "../InputSearch";
import Books from "../Books";
import {useTypedSelector} from "../../hooks-actions/usetypedSelector";
import {useActions} from "../../hooks-actions/useActions";

const Search = () => {
  const {books} = useTypedSelector(state => state.books);
  const {fetchBooks} = useActions();
  const [state, setState] = useState({
    searchTitle: '',
    index: 0,
    maxResult: 16
  })
  useEffect(() => {
    if (state.searchTitle) {
      fetchBooks(state.searchTitle, state.maxResult, state.index)
    }
  }, [state.searchTitle, state.index])

  const handlerSearch = (title: string) => {
    setState(prevState => ({...prevState, searchTitle: title}))
  }
  const paginate = (pageNumber: {}) => {
    if (pageNumber) {
      const {selected}: any = pageNumber
      const indexNumber = (state.maxResult * (selected + 1) - state.maxResult);
      setState(prevState => {
        return {
          ...prevState, index: indexNumber
        }
      })
    }

  };
  return (
    <>
      <InputSearch handlerSearch={handlerSearch}/>
      <Books paginate={paginate}
             books={books?.items}
             index={state.index}
             totalItems={books.totalItems}
             maxResult={state.maxResult}
      />
    </>
  );
};

export default Search;
