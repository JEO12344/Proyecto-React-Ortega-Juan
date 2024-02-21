import { useState } from "react";


function SearchBar({enSubmit}){

    const [term , setTerm ] = useState("");

    function handleFormSubmit(event){

        event.preventDefault();
        enSubmit(term);
    }

    const handleChange = (event)=>{
        setTerm(event.target.value);
    }


    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input onChange={handleChange} value={term}/>
            </form>  
        </div>
    )

}


export default SearchBar;