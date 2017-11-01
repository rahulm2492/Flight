import React from 'react';
import PropTypes from 'prop-types';


class FlightTiles extends React.Component {
  constructor(props){
    super(props);
   
  }

  render() {
    
    return (
     <div className='flightTiles'>
         <p>{this.props.flightData.flightId}</p>
         <p>{this.props.flightData.departureCity} > {this.props.flightData.arrivalCity}</p>
         <p>Depart: 10:00 A.M</p>
         <p>Arrive: 12:00 A.M</p>
        
      </div>
    );
  }
}


FlightTiles.propTypes = {
  flightData: PropTypes.object,
}
export default FlightTiles;
