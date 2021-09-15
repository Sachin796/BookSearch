import React, { useState } from 'react';

const BookListItem = (props) => {
  return(
    <div>
      <div>
        <img src="https://via.placeholder.com/150/" alt="Girl in a jacket" />
      </div>
      <div>
        <h4>Title: {props.title}</h4>
        <h4>Author: {props.author}</h4>
      </div>
    </div>
  );
};

export default BookListItem;