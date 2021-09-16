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
            {console.log("Inside Display Section")}
            {console.log(this.props)}
            {Object.keys(this.props.data).map((key) => {
        return (
          <>
          {(this.props.data[key]["author_name"] !== undefined && this.props.data[key]["cover_edition_key"] !== undefined && this.props.data[key]["key"] !== undefined && this.props.data[key]["cover_i"] !== undefined && this.props.data[key]["first_publish_year"] !== undefined)?
          (
            <BookListItem title={this.props.data[key].title} author={this.props.data[key]["author_name"][0]} cek={this.props.data[key]["cover_edition_key"]} Key={this.props.data[key]["key"]} cover_id={this.props.data[key]["cover_i"]} pbyear={this.props.data[key]["first_publish_year"]}/>
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
  console.log(state)
  return {
    author: state.author,
    data: state.docs[0],
    count: state.data_count
  };
  };
  
  const mapDispatchToProps = dispatch => {
  return {
    successAPICall: (data) => dispatch({ type: 'SUCCESS_GET_BOOKS_CALL', payload: data})
  };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(DisplaySection);