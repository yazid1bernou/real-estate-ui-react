import { useState } from "react";
import "./searchBar.scss";

function SearchBar () {
    const types = ["buy" , "rent"];
    const [query , setQuery] = useState({
        type : "buy",
        location : "" ,
        minPrice : 0 ,
        maxPrice : 0
      })
    const switchType = (val) => {
       setQuery ((prev) => ({...prev ,  type : val}))
    }
    return (
        <div className="searchBar">
            <div className="type">
               {types.map((type) => (
                     <button key={type} onClick={() => switchType(type) } className={query.type === type ? "active" : ""}>{type}</button>
               ))}
              
            </div>
            <form action="">
                <input type="text" name="location" placeholder="City location"/>
                <input type="number" name="minPrice" min={0} max={1000000} placeholder="Min price"/>
                <input type="number" name="maxPrice" min={0} max={1000000} placeholder="Max price"/>
                <button><img src="/search.png" alt="" /></button> 
            </form>

            <p> State on type : {query.type}</p>
        </div>
      
    )
}

export default SearchBar ;

