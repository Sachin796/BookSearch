import '../../App.css'
import { connect } from 'react-redux';
import { types } from '../../actions/types';

function SortSection(props){

    const sortByTitle = async (event)=>{
        event.preventDefault();
        let obj = Object.keys(props.data).sort((a,b)=>props.data[a].title>props.data[b].title?1:-1)
        let finalData = obj.map(x=>props.data[x])
        await props.sortByTitle(finalData);
    }

    const sortByPublishYear = async (event)=>{
        event.preventDefault();
        let obj = Object.keys(props.data).sort((a,b)=>props.data[a].first_publish_year>props.data[b].first_publish_year?1:-1)
        let finalData = obj.map(x=>props.data[x])
        await props.sortByYear(finalData);
    }

    const sortByEditionCount = async(event) =>{
        event.preventDefault();
        let obj = Object.keys(props.data).sort((a,b)=>props.data[a].edition_count>props.data[b].edition_count?1:-1)
        let finalData = obj.map(x=>props.data[x])
        await props.sortByEdition(finalData);

    }

    return(
        <div>
        <button type='button' className="" onClick = {sortByTitle}>Title</button>
        <button type='button' className="" onClick = {sortByPublishYear}>Publish Year</button>
        <button type='button' className="" onClick = {sortByEditionCount}>Editions</button>
        </div>
    )
}

    const mapStateToProps = state => {
        return{
            data:state.docs[0]
        }
    };
    
    const mapDispatchToProps = dispatch => {
    return {
      sortByTitle: (data) => dispatch({ type: types.SORT_BY_TITLE, payload: data}),
      sortByYear: (data)=> dispatch({ type:types.SORT_BY_YEAR, payload:data}),
      sortByEdition: (data)=> dispatch({type:types.SORT_BY_EDITION, payload:data})  
    };
    };

export default connect(mapStateToProps, mapDispatchToProps)(SortSection)