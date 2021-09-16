const bookState = {
    docs: null,
    getBooksAPICallSuccess: true,
    dataCount:0,
    descriptionData: null,
    getDescriptionDataCall: false
  };
  
  const bookStoreReducer = (state = bookState, action) => {
    console.log(action)
    switch(action.type) {
      //cases
      case 'SUCCESS_GET_BOOKS_CALL': {
        return {
          ...state,
          getBooksAPICallSuccess: true,
          docs:[{...action.payload.docs}],
          dataCount:action.payload.num_found
        }
      }

      case 'SUCCESS_DESCRIPTION_DATA_CALL':{
        return{
          ...state,
          getDescriptionDataCall: true,
          descriptionData:[{...action.payload}]
        } 
      }

      case 'SORT_BY_TITLE':{
        console.log(state)
        let obj = Object.keys(action.payload).sort((a,b)=>action.payload[a].edition_count>action.payload[b].edition_count?1:-1)
        let finalData = obj.map(x=>action.payload[x])
        return{
          ...state,
          docs:[{...finalData}]
        }
        // break;
      }

      // case 'SORT_BY_YEAR':{
      //  console.log(action.payload)
      // // break;
      // }
  
      // case 'SORT_BY_EDITION':{
      //   console.log(action.payload)
      // // break;
      // }
  
      default:
        return state;
    }
  };
  
  export default bookStoreReducer;