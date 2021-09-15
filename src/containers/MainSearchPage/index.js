import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import backImage from "../../images/books.jpg"
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
    <div className="mainDivmainPage">
      <div id = "appName">
        <span >Application Name</span>
      </div>
      
      <div>
        <input type='text' aria-label="Search Book" aria-required="true" id="mainPageInput" name='bookName' value={bookName} onChange={onBookNameChange} />
      </div>

      <div>
        <button type='button' className="mainPageSearchButton" onClick = {onFindButtonClick}>Find Book</button>
      </div>
    </div>
  );
};

export default MainSearchPage;