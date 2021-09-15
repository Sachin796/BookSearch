import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

const BookListItem = (props) => {

  let history = useHistory();

  const handleClick= async (e)=>{
    const fetchedDescriptionData = await fetch(`https://openlibrary.org${e.target.id}.json`).then(res=>res.json()).then(data=>data);
    const returnedData = await props.apiCallSuccess(fetchedDescriptionData);
    if(returnedData.type === "SUCCESS_DESCRIPTION_DATA_CALL")
    {
      history.push({pathname:"/thirdBookDetailPage",state:e.target.name})
    }
  }

  return(
    <>
    <div class="info">
      <span id={props.Key} onClick={(e)=>handleClick(e)} name={props.cover_id} >
        <img src={`${process.env.REACT_APP_COVERS_URL}/${props.cover_id}-M.jpg`} id={props.Key} name={props.cover_id}/>
        <h4 class="infoTitle" id={props.Key} name={props.cover_id}>Title: {props.title}</h4>
        <h4 class="infoAuthor" id={props.Key} name={props.cover_id}>Author: {props.author}</h4>
        <h4 class="infoPbYear" id={props.Key} name={props.cover_id}>First Published Year: {props.pbyear}</h4>
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
    apiCallSuccess: (data) => dispatch({ type: 'SUCCESS_DESCRIPTION_DATA_CALL', payload: data})
  };
  };

export default connect(mapStateToProps, mapDispatchToProps)(BookListItem);