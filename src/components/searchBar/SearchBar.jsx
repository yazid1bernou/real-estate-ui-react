import "./searchBar.scss";

function SearchBar () {
    return (
        <div className="searchBar">
            <div className="type">
                <button>Buy</button>
                <button>Rent</button>
            </div>
            <form action="">
                <input type="text" name="location" placeholder="City location"/>
                <input type="number" name="minPrice" min={0} max={1000000} placeholder="Min price"/>
                <input type="number" name="maxPrice" min={0} max={1000000} placeholder="Max price"/>
                <button><img src="/search.png" alt="" /></button> 
            </form>
        </div>
      
    )
}

export default SearchBar ;

