import React from 'react';
import FlightDetailCard from './FlightDetailCard.jsx'

class FlightList extends React.Component {
  constructor(props){
    super(props);
  }
 

  render() {
  
       return (
        
            <div className = 'flightList'>
            <div class='listHeader'>
              <div className='citiesSelected'>
              <span>PUNE ></span>
              <span>DELHI ></span>
              <span>PUNE</span>
              </div>
              <div className='dateSelected'>
                <span>Departure:</span>
                <p></p>
                <span>Return:</span>
                <p></p>
              </div>
            </div>
            <FlightDetailCard/>
            <FlightDetailCard/>
            <FlightDetailCard/>
            <FlightDetailCard/>
            <FlightDetailCard/>
           </div> 
            
     
       );
  }
}


FlightList.defaultProps = {
  tempData: '',
};

FlightList.propTypes = {
  tempData: React.PropTypes.string,
}

export default FlightList;