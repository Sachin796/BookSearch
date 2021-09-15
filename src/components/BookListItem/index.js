import React, { useState } from 'react';
import { connect } from 'react-redux';

const BookListItem = (props) => {

 const handleClick= async (e)=>{
    console.log(e.target.id)
    const fetchedDescriptionData = await fetch(`https://openlibrary.org${e.target.id}.json`).then(res=>res.json()).then(data=>data);
    console.log("FETCHED DESC DATA");
    console.log(fetchedDescriptionData)
  }

  return(
    <>
    <div class="info">
      <span id={props.Key} onClick={(e)=>handleClick(e)} >
        <img src={`${process.env.REACT_APP_COVERS_URL}/${props.cover_id}-M.jpg`} id={props.Key}/>
        <h4 class="infoTitle" id={props.Key}>Title: {props.title}</h4>
        <h4 class="infoAuthor" id={props.Key}>Author: {props.author}</h4>
        <h4 class="infoPbYear" id={props.Key}>First Published Year: {props.pbyear}</h4>
      </span>
    </div>
    </>
  );
};

const mapStateToProps = state => {
  console.log("STATE INSIDE BOOKLIST ITEM");
  console.log(state)
  return {
    // author: state.author,
    // data: state.docs[0]
  };
  };
  
  const mapDispatchToProps = dispatch => {
  return {
    successAPICall: (data) => dispatch({ type: 'SUCCESS_GET_BOOKS_CALL', payload: data})
  };
  };

export default connect(mapStateToProps, mapDispatchToProps)(BookListItem);