import React from 'react';
import FlightTiles from './FlightTiles.jsx';


class FlightDetailCard extends React.Component {
  constructor(props){
    super(props);
   
  }

  render() {
    
    return (
     <div className='flightDetail'>
         <div className = 'flightData'>
            <p className='priceTag'> Rs. 9000</p>
            <FlightTiles/>
            <FlightTiles/>
         </div>
         <div className='bookFlight'>
            <img/>
            <button type='submit'>Book This Flight</button>
        </div>
        
      </div>
    );
  }
}


FlightDetailCard.propTypes = {
  selectedTab: React.PropTypes.string,
}
export default FlightDetailCard;
