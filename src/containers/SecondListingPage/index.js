import React, { useState } from 'react';

// component
import BookListItem from '../../components/BookListItem';

const SecondListingPage = () => {
  return(
    <div>
      <h1>SecondListingPage</h1>
      {[1,2,3,4,5].map(() => {
        return (
          <BookListItem/>
        );
      })}
    </div>
  );
};

export default SecondListingPage;