import React from 'react';
import './App.css';
import FirstImage from './Components/Container1/FirstImage';
import Navigation from './Components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import SecondImage from './Components/Container2/SecondImage';
import Logos from './Components/Container3/Logos';
import Container4 from './Components/Container4/Container4'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Menu from './Menu'
function App() {
  return (
    <Router>
    <div className="App">
    <Navigation/>
    <Switch>
    <Route path="/" exact component={Home} />
   <Route path="/Menu" component={Menu} />
    </Switch>
    </div>
    </Router>
  );
}


const Home =() =>(
    <div>
    <FirstImage/>
    <SecondImage/>
    <Logos/>
    <Container4/>


    </div>

);




export default App;
