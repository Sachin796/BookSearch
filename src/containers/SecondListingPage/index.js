import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header'
// component
import DisplaySection from "./displaySection";
import FilterSection from "./filterSection"

const SecondListingPage = (props) => {
  return(
    <div>
      <Header />
      <div className="secondPageContent">
        <div className="sortsection">
        <FilterSection />  
        </div>
        <div className = "displaysection">        
        <DisplaySection />      
        </div>
      </div>          
    </div>
  );
};

const mapStateToProps = state => {
  // console.log("STATE INSIDE MAPSTATE TO PROPS")
  // console.log(state.docs[0][10])
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