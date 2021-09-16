import React from 'react';
import Header from '../../components/Header'
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

const ThirdBookDetailPage = (props) => {
  
  let history = useHistory();

  return(
    <>
  <Header />
  <div>
    <div className="page3Main2">
      <div className="page3Div3">
      <img src={`${process.env.REACT_APP_COVERS_URL}/${history.location.state}-L.jpg`} style={{width:"90%",height:"80%",objectFit:"contain"}} alt="Book Cover" />
      </div>
      <div className="page3Div4">
        <div id="bookTitle">{props.data.title}</div>
        <p id="revision">Latest Revision - {props.data.revision}</p>

        <div id="description">
        <p>DESCRIPTION</p>
        <p id="descriptionSection">{props.data.description != undefined?props.data.description.value:"No Data"}</p>
        </div>

        <div id="referenceLinks">
          <p>REFERENCES</p>
          {props.data.links != undefined?props.data.links.map(data=>{
            return <p>{data.title} - {data.url}</p>
          }):"No Data"}
        </div>

      </div>
    </div>
  </div>
</>
  );
};
const mapStateToProps = state => {
  return {
    // author: state.author,
    data: state.descriptionData[0]
  };
  };
  
  const mapDispatchToProps = dispatch => {
  return {
    apiCallSuccess: (data) => dispatch({ type: 'SUCCESS_DESCRIPTION_DATA_CALL', payload: data})
  };
  };
export default connect(mapStateToProps, mapDispatchToProps)(ThirdBookDetailPage);