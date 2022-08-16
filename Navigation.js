import React from 'react';

import {
    BrowserRouter as Router,
    Switch, Route, Link
  } from "react-router-dom";

function Navigation ()  {
    return (
        
        
        <Router>
            <div className="navi">
           <h1 class="nav">
           <a href="../HomePage.js">   Home     </a>
          <a href="../CreatePage.js">    Add      </a>
       </h1>
        </div>
        </Router>
     );

}


export default Navigation;