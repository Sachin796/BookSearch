import '../../App.css'
import { connect } from 'react-redux';
import { types } from '../../actions/types';

function FilterSection(props){

    const handleYearChange= async (event)=>{
        let filteredData = props.completeData.filter(ele=>ele["first_publish_year"] == event.target.value)
        console.log(filteredData)
        await props.filterYearPublished(filteredData)
    }

    const handleEditionChange = async (event)=>{
        let filteredData = props.completeData.filter(ele=>ele["edition_count"] == event.target.value)
        console.log(filteredData)
        await props.filterUniqueEditions(filteredData)
    }
    return(
 <div>
     {console.log(props)}
      <p>Filter</p>
      <form>
        {/* <label name='author'>Author</label> */}
        {/* <select name='author' onChange={props.handleChange}> */}
        {/* <select name='author'>
          <option value=''>None</option>
          <option value='J.K. Rowling'>J.K. Rowling</option>
        </select> */}

        <label name='tags'>Editions</label>
        <select name='tags' onChange={handleEditionChange}>
            <option value="SELECT"> --- SELECT ---</option>
            {props.uniqueEditions.map(ele=>{
                return <option value={ele}>{ele}</option>
            })}
        </select>

        <label name='year'>Year Published</label>
        <select name='year' onChange={handleYearChange}>
            <option value="SELECT">---SELECT---</option>
            {props.uniqueYearPublished.map(ele=>{
                return <option value={ele}>{ele}</option>
            })}
        </select>
      </form>
    </div>
    )

}

const mapStateToProps = state => {
    var resArr = [];
    Object.keys(state.docs[0]).map(ele=>{
        if(state.docs[0][`${ele}`] !== undefined)
        {
            resArr.push(state.docs[0][`${ele}`])
        }
    })
    var allPublishYears=resArr.map(e=>e["first_publish_year"])
    var allEditionCounts=resArr.map(e=>e["edition_count"])

    const uniqueYP = Array.from(new Set(allPublishYears)).filter(x=>x!== undefined)
    const uniqueEC = Array.from(new Set(allEditionCounts)).filter(x=>x!== undefined)
    
    return{
        uniqueYearPublished:uniqueYP,
        uniqueEditions:uniqueEC,
        completeData:resArr
    }
};

const mapDispatchToProps = dispatch => {
return {
     filterYearPublished: (data) => dispatch({ type: types.FILTER_BY_YEAR_PUBLISHED, payload: data}),
     filterUniqueEditions: (data)=> dispatch({ type:types.FILTER_BY_EDITIONS, payload:data}),
};
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSection)