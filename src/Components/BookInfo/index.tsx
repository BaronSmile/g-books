import React from 'react';
import {Button} from "reactstrap";

const BookInfo = (props: { history: { goBack: () => any; } }) => {

  return (
    <div>
      <Button onClick={() => props.history.goBack()}>Back</Button>
      Infos
    </div>
  );
};

export default BookInfo;
