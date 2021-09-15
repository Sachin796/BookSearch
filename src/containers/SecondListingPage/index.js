import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';
// component
import BookListItem from '../../components/BookListItem';

const SecondListingPage = (props) => {


  return(
    <div>
      <h1>SecondListingPage</h1>
      {/* {console.log("Props data is")}
      {console.log(Object.keys(props.data))} */}

      {Object.keys(props.data).map((key) => {
        return (
          <>
          {props.data[key]["author_name"] !== undefined?
          (
            <BookListItem title={props.data[key].title} author={props.data[key]["author_name"][0]}/>
          )
          :null}
        </>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {

  console.log("STATE INSIDE MAPSTATE TO PROPS")
  // console.log(state.docs[0][0].author_name[0])
return {
  author: state.author,
  data: state.docs[0]
};
};

const mapDispatchToProps = dispatch => {
return {
  successAPICall: (data) => dispatch({ type: 'SUCCESS_GET_BOOKS_CALL', payload: data})
};
};

export default connect(mapStateToProps, mapDispatchToProps)(SecondListingPage);