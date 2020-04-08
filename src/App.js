import React from 'react';
import Home from './pages/Home'
import About from './pages/About'
import Master from './pages/Master'
import Details from './pages/Details'
import Visit from './pages/Visit'
import NavBar from './components/NavBar'
import Resources from './pages/Resources'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
       <NavBar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/visit">
            <Visit />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/master">
            <Master />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


// function App() {
//   return (
    
//     <div> 
//     <Home/>
//     <About/>
//     <Master/>
//     <Details/>
//     <Visit/>
//     <Resources/>

//     </div>
//   );
// }



