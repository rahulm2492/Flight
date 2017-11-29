import React from 'react';
import FlightTiles from './FlightTiles.jsx';
import PropTypes from 'prop-types';

class FlightDetailCard extends React.Component {
  constructor(props){
    super(props);
   
  }

  render() {
    
    return (
     <div className='flightDetail'>
         <div className = 'flightData'>
            <p className='priceTag'> Rs. 9000</p>
           {this.props.flightOne && <FlightTiles heading='TO' className ='flightOne' flightData={this.props.flightOne}/>}
           {this.props.flightTwo && <FlightTiles heading='FROM' className ='flightTwo' flightData={this.props.flightTwo}/>}
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
  flightOne: PropTypes.object,
  flightTwo: PropTypes.object,
}
export default FlightDetailCard;
