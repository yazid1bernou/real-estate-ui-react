import { useState } from 'react'
import './layout.scss';
import Navbar from "./components/navbar/Navbar";
import homePage from "./pages/homePage";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='layout'> 
           <div className="navbar">
              <Navbar />
           </div>
           <div className="content">
              <homePage />
           </div>
          
        </div>
    </>
  )
}

export default App
