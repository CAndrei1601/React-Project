import React from 'react';
import './App.css';
import FirstImage from './Components/Container1/FirstImage';
import Navigation from './Components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import SecondImage from './Components/Container2/SecondImage';
import Logos from './Components/Container3/Logos';
import Container4 from './Components/Container4/Container4'

function Home() {
  return (
    <div className="App">
      
    <Navigation/>
    <FirstImage/>
    <SecondImage/>
    <Logos/>
    <Container4/>
   
    </div>
  );
}
export default Home;