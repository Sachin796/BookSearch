import { types } from "../actions/types"

const bookState = {
    docs: null,
    getBooksAPICallSuccess: true,
    dataCount:0,
    descriptionData: null,
    getDescriptionDataCall: false,
    filteredData:null
  };
  
  const bookStoreReducer = (state = bookState, action) => {
    switch(action.type) {
      //cases
      case types.GET_BOOKS: {
        return {
          ...state,
          getBooksAPICallSuccess: true,
          filteredData:null,
          docs:[{...action.payload.docs}],
          dataCount:action.payload.num_found
        }
      }

      case types.GET_DESCRIPTION:{
        return{
          ...state,
          filteredData:null,
          getDescriptionDataCall: true,
          descriptionData:[{...action.payload}]
        } 
      }

      case types.SORT_BY_TITLE:{
        return{
          ...state,
          docs:[{...action.payload}],
          filteredData: null
        }        
      }

      case types.SORT_BY_YEAR:{
        return{
          ...state,
          docs:[{...action.payload}],
          filteredData: null
        }
      }
  
      case types.SORT_BY_EDITION:{
        return{
          ...state,
          docs:[{...action.payload}],
          filteredData: null
        }
      }

      case types.FILTER_BY_YEAR_PUBLISHED:{
        return{
          ...state,
          filteredData: [{...action.payload}]
        }
      }
  
      case types.FILTER_BY_EDITIONS:{
        return{
          ...state,
          filteredData: [{...action.payload}]
        }
      }
      default:
        return state;
    }
  };
  
  export default bookStoreReducer;