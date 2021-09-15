const bookState = {
    docs: null,
    getBooksAPICallSuccess: true,
  };
  
  const bookStoreReducer = (state = bookState, action) => {
    switch(action.type) {
      //cases
      case 'SUCCESS_GET_BOOKS_CALL': {
        console.log('inside reducer-',action.payload);
        return {
          ...state,
          getBooksAPICallSuccess: true,
          docs:[{...action.payload.docs}]
        }
      }
  
      default:
        return state;
    }
  };
  
  export default bookStoreReducer;