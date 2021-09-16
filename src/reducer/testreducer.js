// import { types } from "../actions/types";
import bookStoreReducer from "./book"

describe('Post Reducer',()=>{

    it('should return default state',()=>{
        const newstate = bookStoreReducer(undefined,{});
        console.log(newstate)
        // expect(newstate)
    })

})