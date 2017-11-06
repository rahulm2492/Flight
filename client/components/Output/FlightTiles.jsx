import React from 'react';
import PropTypes from 'prop-types';


class FlightTiles extends React.Component {
  constructor(props){
    super(props);
   
  }

  render() {
    const rotateClass = this.props.className === 'flightOne' ? 'rotateRight' :'rotateLeft'
    return (
     <div className={`flightTiles ${this.props.className}`}>
         <h5>{this.props.heading}</h5>
         <p>{this.props.flightData.flightId}</p>
         <p>{this.props.flightData.departureCity} <i className= {`glyphicon glyphicon-plane ${rotateClass}`}></i> {this.props.flightData.arrivalCity}</p>
         <p>Depart: 10:00 A.M</p>
         <p>Arrive: 12:00 A.M</p>
        
      </div>
    );
  }
}


FlightTiles.propTypes = {
  flightData: PropTypes.object,
  heading: PropTypes.string,
  className: PropTypes.string
}
export default FlightTiles;
