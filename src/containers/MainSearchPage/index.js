import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { types } from "../../actions/types"
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
    let formattedData = this.state.bookName.split(' ').join("+");

    const apiData = await fetch(`https://openlibrary.org/search.json?q=${formattedData}`)
      .then(response => response.json())
      .then(data => data);
    await this.props.successAPICall(apiData);
    if(apiData.num_found === 0) {
      // TODO Popup or Change to a new page.
      console.log("Equal")
    }else{
      this.props.history.push("/secondListingPage");
    }
  };

  render(){
    return(
        <div className="mainDivmainPage">
        <div id = "appName">
          <span >Book Finder</span>
        </div>
        <div>
          <input type='text' aria-label="Search Book" aria-required="true" id="mainPageInput" name='bookName' placeholder="Search Here" value={this.state.bookName} onChange={this.onBookNameChange} />
        </div>
        <div>
          <button type='button' className="mainPageSearchButton" onClick = {this.onFindButtonClick}>Find Book</button>
        </div>
      </div>
    ); 
  }
}

const mapStateToProps = state => {
  return {
    author: state.author,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    successAPICall: (data) => dispatch({ type: types.GET_BOOKS, payload: data})
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainSearchPage));