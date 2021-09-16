import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header'
import DisplaySection from "./displaySection";
import FilterSection from "./filterSection"
import { types } from '../../actions/types';

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
return {
  author: state.author,
  data: state.docs[0]
};
};

const mapDispatchToProps = dispatch => {
return {
  successAPICall: (data) => dispatch({ type: types.GET_BOOKS, payload: data})
};
};

export default connect(mapStateToProps, mapDispatchToProps)(SecondListingPage);