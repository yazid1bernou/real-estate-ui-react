import "./homePage.scss";
import SearchBar from "../components/searchBar/SearchBar"
function HomePage () {
    return (
        <div className="homePage">
              <div className="textContainer">
                 <div className="wrapper">
                    <h1 className="title"> Find Real Estate & Get Your Dream Place</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis labore, incidunt dicta nesciunt facere repellat provident, quasi dignissimos temporibus error ratione deserunt libero molestiae nulla voluptas maxime minima rem magnam.</p>
                    <SearchBar />
                    <div className="boxes">
                        <div className="boxe">
                          <h1>+16</h1>
                          <h2>Years of experience</h2>
                        </div>
                        <div className="boxe">
                          <h1>200</h1>
                          <h2>Award gained</h2>
                        </div>
                        <div className="boxe">
                          <h1>2000</h1>
                          <h2>Property ready</h2>
                        </div>
                    </div>
                 </div> 
              </div>
              <div className="imgContainer"> 
                <img src="/bg.png" alt="" />
              </div>
        </div>
    )
}

export default HomePage ;