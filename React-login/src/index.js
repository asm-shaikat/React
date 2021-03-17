import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


ReactDOM.render(<>
 <div className="box">
   <h2>Log in</h2>
   <div className="text">
     <input type="text" placeholder="Username"></input>
   </div>
   <div className="text1">
     <input type="passwors" placeholder="Password"></input>
   </div>
   <br></br>
   <button className="btn">Login</button>
 </div>
  </>,
  document.getElementById('root')
);


