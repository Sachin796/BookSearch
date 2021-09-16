import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { types } from '../../actions/types';
const BookListItem = (props) => {

  let history = useHistory();

  const handleClick= async (e)=>{
    const fetchedDescriptionData = await fetch(`https://openlibrary.org${e.target.id}.json`).then(res=>res.json()).then(data=>data);
    const returnedData = await props.apiCallSuccess(fetchedDescriptionData);
    if(returnedData.type === types.GET_DESCRIPTION)
    {
      history.push({pathname:"/thirdBookDetailPage",state:e.target.getAttribute('name')})
    }
  }

  return(
  <>
    <div className="info">
      <span id={props.Key} onClick={(e)=>handleClick(e)} name={props.cover_id} >
       <div id="bookmain">
          <div id="bookcover">
          <img src={`${process.env.REACT_APP_COVERS_URL}/${props.cover_id}-M.jpg`} id={props.Key} name={props.cover_id} alt="Book Cover"/>
          </div>
          <div id="bookdetails">
          <h4 className="infoTitle" id={props.Key} name={props.cover_id}>Title: </h4><p>{props.title}</p>
          <h4 className="infoAuthor" id={props.Key} name={props.cover_id}>Author: </h4><p>{props.author}</p>
          <h4 className="infoPbYear" id={props.Key} name={props.cover_id}>First Published Year: </h4><p>{props.pbyear}</p>
          <h4 className="infoEditions" id={props.Key} name={props.cover_id}>Number of Editions: </h4><p>{props.editionCount}</p>
          </div>
        </div>
      </span>
    </div>
  </>
  );
};

const mapStateToProps = state => {
  return {
    // author: state.author,
    // data: state.docs[0]
  };
  };
  
  const mapDispatchToProps = dispatch => {
  return {
    apiCallSuccess: (data) => dispatch({ type: types.GET_DESCRIPTION, payload: data})
  };
  };

export default connect(mapStateToProps, mapDispatchToProps)(BookListItem);