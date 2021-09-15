const bookState = {
    docs: null,
    getBooksAPICallSuccess: true,
    descriptionData: null,
    getDescriptionDataCall: false
  };
  
  const bookStoreReducer = (state = bookState, action) => {
    switch(action.type) {
      //cases
      case 'SUCCESS_GET_BOOKS_CALL': {
        return {
          ...state,
          getBooksAPICallSuccess: true,
          docs:[{...action.payload.docs}]
        }
      }

      case 'SUCCESS_DESCRIPTION_DATA_CALL':{
        return{
          ...state,
          getDescriptionDataCall: true,
          descriptionData:[{...action.payload}]
        } 
      }
  
      default:
        return state;
    }
  };
  
  export default bookStoreReducer;