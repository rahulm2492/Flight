import React from 'react';
import FlightForm from './FlightForm.jsx';
import FlightList from '../Output/FlightList.jsx';


class Flights extends React.Component {
  constructor(props){
    super(props);
   
  }

 

  render() {
    
       return (
        <div className="row margin-zero">
          <FlightForm/>
          <FlightList/>
        </div>
       );
  }
}



export default Flights;