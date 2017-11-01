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
           {this.props.flightOne && <FlightTiles flightData={this.props.flightOne}/>}
           {this.props.flightTwo && <FlightTiles flightData={this.props.flightTwo}/>}
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
  flightOne: React.PropTypes.object,
  flightTwo: React.PropTypes.object,
}
export default FlightDetailCard;
