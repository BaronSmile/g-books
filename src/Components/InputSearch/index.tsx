import React, {useState} from 'react';
import {Button, Input, InputGroup, InputGroupAddon} from "reactstrap";
import './InputSearch.css';

interface SearchProps {
  handlerSearch: any,
}

const InputSearch = ({handlerSearch}: SearchProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault()
    handlerSearch(inputValue)
  };

  return (
    <div className='main-image d-flex justify-content-center align-items-center flex-column'>
      <div className="filter"/>
      <h1 className='display-2 text-white mb-3 fw-bolder' style={{zIndex: 2}}>Search for books</h1>
      <div style={{width: '60%', zIndex: 2}}>
        <form onSubmit={handleSubmit}>
          <InputGroup size='lg' className='mb-3'>
            <Input
              placeholder='Book Search'
              value={inputValue}
              onChange={event => setInputValue(event.target.value)}
            />
            <InputGroupAddon addonType='append'>
              <Button color='secondary' type="submit" style={{height: '100%'}}>
                <i className='fas fa-search'/>
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </form>
      </div>
    </div>
  );
};

export default InputSearch;
