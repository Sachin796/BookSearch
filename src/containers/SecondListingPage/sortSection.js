import '../../App.css'
import { connect } from 'react-redux';
function SortSection(props){

    const sortByTitle = async (event)=>{
        event.preventDefault();
        // Object.keys(props.data).map(data=>{
        //     console.log(props.data[data])
        // })

    const sortedData = await props.sortByTitle(props.data);
    console.log(sortedData)
    }

    const sortByPublishYear = ()=>{

    }

    const sortByEditionCount = () =>{

    }

    return(
        <div>
        <button type='button' className="" onClick = {sortByTitle}>Title</button>
        {/* <button type='button' className="" onClick = {sortByPublishYear}>Publish Year</button>
        <button type='button' className="" onClick = {sortByEditionCount}>Editions</button> */}
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
      sortByTitle: (data) => dispatch({ type: 'SORT_BY_TITLE', payload: data}),
    //   sortByYear: (data)=> dispatch({ type:'SORT_BY_YEAR', payload:data}),
    //   sortByEdition: (data)=> dispatch({type:'SORT_BY_EDITION', payload:data})  
    };
    };

export default connect(mapStateToProps, mapDispatchToProps)(SortSection)