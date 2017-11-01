import React from 'react';
import Flights from './Container/Flights.jsx'
import Header from './Common/Header.jsx'


class App extends React.Component {
  constructor(props){
    super(props);
   
  }

  render() {
    
    return (
     <div className='flightSearch container'>
        <Header/>
        <Flights/>
      </div>);
  }
}



export default App;