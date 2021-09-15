import React, { useState } from 'react';

const BookListItem = (props) => {
  return(
    <div id="info">
        <h4 id="infoTitle">Title: {props.title}</h4>
        <h4 id="infoAuthor">Author: {props.author}</h4>
    </div>
  );
};

export default BookListItem;