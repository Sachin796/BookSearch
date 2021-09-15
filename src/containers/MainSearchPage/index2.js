import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

class MainSearchPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      bookName:'',
    };

    this.onFindButtonClick = this.onFindButtonClick.bind(this);
    this.onBookNameChange = this.onBookNameChange.bind(this);
  }

  onBookNameChange = (e) => {
    this.setState({bookName: e.target.value})
  };

  onFindButtonClick = async () => {
    // TODO make API call to find book from title
    // console.log(this.props);

    const apiData = await fetch(`https://openlibrary.org/search.json?q=the+great+gatsby`)
      .then(response => response.json())
      .then(data => data);
    // console.log(apiData);

    const returnedData = await this.props.successAPICall(apiData);
    // console.log(returnedData)
    if(returnedData.type === "SUCCESS_GET_BOOKS_CALL") {
        // console.log("SUCCESS")
      this.props.history.push({
            pathname:"/secondListingPage",
            state: {data: returnedData.payload}
        });
    }
  };

  render(){
    return(
        <div className="mainDivmainPage">
        <div id = "appName">
          <span >Application Name</span>
        </div>
        
        <div>
          <input type='text' aria-label="Search Book" aria-required="true" id="mainPageInput" name='bookName' value={this.state.bookName} onChange={this.onBookNameChange} />
        </div>
  
        <div>
          <button type='button' className="mainPageSearchButton" onClick = {this.onFindButtonClick}>Find Book</button>
        </div>
      </div>
    ); 
  }
}

const mapStateToProps = state => {

    // console.log("STATE INSIDE MAPSTATE TO PROPS")
    // console.log(state)
  return {
    author: state.author,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    successAPICall: (data) => dispatch({ type: 'SUCCESS_GET_BOOKS_CALL', payload: data})
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainSearchPage));