import '../../App.css'
import React , {Component} from 'react';
import { connect } from 'react-redux';
import BookListItem from '../../components/BookListItem';
import SortSection from "./sortSection"

class DisplaySection extends Component{ 
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
            <>
            <SortSection />
                 <h1>SecondListingPage</h1>
            {console.log("Inside Display Section")}
            {console.log(this.props)}
            {Object.keys(this.props.data).map((key) => {
        return (
          <>
          {this.props.data[key]["author_name"] !== undefined?
          (
            <BookListItem title={this.props.data[key].title} author={this.props.data[key]["author_name"][0]}/>
          )
          :null}
        </>
        );
      })}
            </>
        )
    }
}

const mapStateToProps = state => {
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(DisplaySection);