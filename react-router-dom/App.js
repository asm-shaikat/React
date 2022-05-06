import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Help from './components/Help';
import { BrowserRouter,Link,Route, Routes} from 'react-router-dom';
// import Navbar from './components/Navbar';
function App(){
  return(
    <>
   <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Users</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route  path='/services' element={<Services/>}></Route>
          <Route path='/help' element={<Help/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
