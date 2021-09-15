import '../../App.css'

function Searchandbutton(){
return(
    <>
    <div className="page3Div2">
        <div>
          <input type='text' aria-label="Search Book" aria-required="true" id="mainPageInput" name='bookName' />
          <input type='button' aria-label="Button" name="searchButton" value="Search Books" />                                                          
        </div>
    </div>
    </>
)
}

export default Searchandbutton