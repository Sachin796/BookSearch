import '../../App.css'
import React , {Component} from 'react';
import { connect } from 'react-redux';
import BookListItem from '../../components/BookListItem';
import SortSection from "./sortSection"
import { types } from '../../actions/types';

class DisplaySection extends Component{ 
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
            <>
            <SortSection />
            {Object.keys(this.props.data).map((key) => {
        return (
          <>
          {(this.props.data[key]["author_name"] !== undefined && this.props.data[key]["cover_edition_key"] !== undefined && this.props.data[key]["key"] !== undefined && this.props.data[key]["cover_i"] !== undefined && this.props.data[key]["first_publish_year"] !== undefined && this.props.data[key]["edition_count"] !== undefined)?
          (
            <BookListItem title={this.props.data[key].title} author={this.props.data[key]["author_name"][0]} cek={this.props.data[key]["cover_edition_key"]} Key={this.props.data[key]["key"]} cover_id={this.props.data[key]["cover_i"]} pbyear={this.props.data[key]["first_publish_year"]} editionCount={this.props.data[key]["edition_count"]}/>
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
  let newstate;
  if(state.filteredData !== null){
    newstate = state.filteredData
  }
  else if(state.filteredData === null){
    newstate = state.docs
  }
  return {
    author: newstate.author,
    data: newstate[0],
    count: newstate.data_count
  };
  };
  
  const mapDispatchToProps = dispatch => {
  return {
    successAPICall: (data) => dispatch({ type: types.GET_BOOKS, payload: data})
  };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(DisplaySection);