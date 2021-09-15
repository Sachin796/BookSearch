import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const MainSearchPage = () => {
  const history = useHistory();

  // state
  const [bookName, setBookName] = useState('');
  
  const onBookNameChange = (e) => {
    setBookName(e.target.value);
  };

  const onFindButtonClick = () => {
    // TODO make API call to find book from title

    // if successful redirect to SecondListingPage
    history.push('/secondListingPage');
  };

  return(
    <div>
      <div>
        <h1>Application Name</h1>
      </div>
      
      <div>
        <input type='text' name='bookName' value={bookName} onChange={onBookNameChange} />
      </div>

      <div>
        <button type='button' onClick = {onFindButtonClick}>Find Book</button>
      </div>
    </div>
  );
};

export default MainSearchPage;