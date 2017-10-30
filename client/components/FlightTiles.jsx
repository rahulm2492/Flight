import React from 'react';



class FlightTiles extends React.Component {
  constructor(props){
    super(props);
   
  }

  render() {
    
    return (
     <div className='flightTiles'>
         <p>AI-202</p>
         <p>PUNE > DELHI</p>
         <p>Depart: 10:00 A.M</p>
         <p>Arrive: 12:00 A.M</p>
        
      </div>
    );
  }
}


FlightTiles.propTypes = {
  selectedTab: React.PropTypes.string,
}
export default FlightTiles;
