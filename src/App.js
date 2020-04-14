import React from 'react';
import Home from './pages/Home'
import About from './pages/About'
import Master from './pages/Master'
import Details from './pages/Details'
import Visit from './pages/Visit'
import NavBar from './components/NavBar'
import Resources from './pages/Resources'
import { petList } from './data/pet_list'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './components/Footer'

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
       <NavBar />
       <div style={{marginTop: '56px'}}>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/visit/:petId" component={Visit} />
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/details/:id" render={props => <Details {...props} pets={petList}/>}/>
          <Route path="/master">
            <Master />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
       </div>
        <Footer/>
      </div>
    </Router>
  );
}






